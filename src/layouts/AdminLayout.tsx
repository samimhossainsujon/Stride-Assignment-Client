import { useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };




    return (
        <>
            {/* Navigation Bar */}
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            {/* Sidebar Toggle Button */}
                            <button
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="logo-sidebar"
                                type="button"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white uppercase">Mobail shop</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        onClick={toggleDropdown} // Toggle dropdown on click
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded={isDropdownOpen ? "true" : "false"}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />
                                    </button>
                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700"
                                            aria-labelledby="dropdown-user"
                                        >
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                <li>
                                                    <a href="#" className="block px-4 py-2">
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2">
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2">
                                                        Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                id="logo-sidebar"
                className={`fixed w-fit top-0 left-0 z-40  h-screen pt-20 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar"            >
                <div className="h-full px-3 pb-4  bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <main className="mt-16 ml-44">
                <Outlet />
            </main>
        </>
    );
};

export default AdminLayout;
