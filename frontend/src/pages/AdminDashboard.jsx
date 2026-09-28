import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetch('http://localhost:8000/api/leads/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(async (res) => {
      if (res.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        throw new Error('Unauthorized');
      }
      return res.json();
    })
    .then(data => {
      setLeads(data);
      setLoading(false);
    })
    .catch(err => {
      setError('Failed to fetch leads');
      setLoading(false);
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  if (loading) return <div className="text-center py-20 text-brand-text-muted">Loading dashboard...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-serif">Lead Management</h1>
        <Button onClick={handleLogout} className="bg-gray-800 text-sm py-2 px-6">Logout</Button>
      </div>

      {error ? (
        <div className="text-red-600 bg-red-50 p-4 border border-red-200">{error}</div>
      ) : leads.length === 0 ? (
        <div className="text-gray-500 bg-brand-surface p-8 border border-gray-100 text-center">No leads found.</div>
      ) : (
        <div className="overflow-x-auto bg-brand-surface border border-gray-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs tracking-wider uppercase text-gray-500 border-b border-gray-100">
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Budget</th>
                <th className="p-4 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium text-brand-text-main">{lead.name}</td>
                  <td className="p-4 text-sm">
                    <div className="text-brand-text-main">{lead.email}</div>
                    <div className="text-gray-500">{lead.phone}</div>
                  </td>
                  <td className="p-4 text-sm text-brand-text-muted">{lead.budget || '-'}</td>
                  <td className="p-4 text-sm text-brand-text-muted max-w-xs truncate" title={lead.description}>
                    {lead.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
