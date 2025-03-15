import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'; // Import NavLink for active link styling
import Nav from './Nav';
import courses from '../data/courses'; // Import courses data
import DropdownMenu from './DropdownMenu'; // Import the new DropdownMenu component

function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setNav(false);
  };

  const handleCourseDetailClick = (identifier) => {
    navigate(`/CourseDetailPage?id=${identifier}`);
    setNav(false);
  };

  return (
    <>
      <header className='sticky top-0 left-0 z-[10] bg-white p-4 border-b-4 border-gray-100 shadow-md'>
        <Nav
          handleHomeClick={handleHomeClick}
          handleCourseDetailClick={handleCourseDetailClick}
          nav={nav}
          setNav={setNav}
          courses={courses}
        />
      </header>

      {/* Overlay for sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          nav ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setNav(false)}
      ></div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setNav(false)}
          className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900'
        >
          &#x2715;
        </button>

        <div className='flex flex-col mt-16 space-y-4 px-6'>
          <ul className='space-y-4'>
            <li>
              <NavLink
                to='/'
                onClick={handleHomeClick}
                className='text-lg text-blue-900 hover:text-blue-700'
                activeClassName='bg-blue-100' // Automatically applies active background for Home
              >
                Home
              </NavLink>
            </li>

            <DropdownMenu
              courses={courses}
              handleCourseDetailClick={handleCourseDetailClick}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
