import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="md:hidden mr-4 btn btn-ghost btn-circle">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Admin Dashboard</h2>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <FaUserCircle className="w-8 h-8 text-gray-600" />
        </label>
        <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow mt-2">
          <li><a className="hover:bg-gray-100">Profile</a></li>
          <li><a className="hover:bg-gray-100">Settings</a></li>
          <li><a className="hover:bg-gray-100">Logout</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;