import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Contact Saver</h1>
        <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
          Add Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;