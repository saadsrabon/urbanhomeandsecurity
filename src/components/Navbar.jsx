import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
