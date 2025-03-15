import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo'; // Import Logo component
import DropdownMenu from './DropdownMenu'; // Import DropdownMenu component

const Nav = ({
  handleHomeClick,
  handleCourseDetailClick,
  nav,
  setNav,
  courses,
}) => {
  const navigate = useNavigate();

  return (
    <nav
      className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
      aria-label='Global'
    >
      <div className='flex lg:flex-1'>
        <Logo handleClick={handleHomeClick} />
      </div>

      <div className='hidden lg:flex space-x-6'>
        <ul className='flex space-x-6'>
          <li className='block cursor-pointer'>
            <a
              href='#'
              onClick={handleHomeClick}
              className='text-lg text-blue-900 hover:text-blue-700'
            >
              Home
            </a>
          </li>
          {/* DropdownMenu integration */}
          <DropdownMenu
            courses={courses}
            handleCourseDetailClick={handleCourseDetailClick}
          />
        </ul>
      </div>

      <button
        onClick={() => setNav(true)}
        className='lg:hidden p-2 rounded-md text-blue-900 focus:outline-none hover:text-blue-700'
      >
        <span className='text-2xl'>&#9776;</span>
      </button>
    </nav>
  );
};

export default Nav;
