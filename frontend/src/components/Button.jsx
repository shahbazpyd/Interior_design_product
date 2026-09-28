export default function Button({ children, onClick, type = "button", className = "", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-brand-accent text-white px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all shadow-sm ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90 hover:shadow-md'
      } ${className}`}
    >
      {children}
    </button>
  );
}
