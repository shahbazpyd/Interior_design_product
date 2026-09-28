export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-accent text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-opacity-90 transition-all shadow-sm ${className}`}
    >
      {children}
    </button>
  );
}
