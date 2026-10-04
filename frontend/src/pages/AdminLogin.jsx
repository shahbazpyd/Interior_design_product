import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import Button from '../components/Button';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch(`${API_URL}/api/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('admin_token', data.access_token);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F9F8F6] px-6 pt-32 pb-20">
      <div className="w-full max-w-md bg-brand-surface p-8 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-serif text-center mb-8">Admin Access</h1>
        
        {error && <div className="bg-red-50 text-red-600 p-3 mb-6 text-sm text-center border border-red-200">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-brand-accent transition-colors"
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}
