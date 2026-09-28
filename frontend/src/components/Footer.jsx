export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-gray-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-brand-text-muted">
        <p className="font-serif italic mb-2">"Design is not just what it looks like and feels like. Design is how it works."</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Lumina Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}
