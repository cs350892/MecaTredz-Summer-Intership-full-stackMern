import { FaHome, FaBriefcase, FaUsers, FaCog } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-64 md:static`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Job Portal Admin</h1>
        <button onClick={toggleSidebar} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <FaHome className="mr-3" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <FaBriefcase className="mr-3" /> Jobs
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <FaUsers className="mr-3" /> Applicants
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100">
              <FaCog className="mr-3" /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;