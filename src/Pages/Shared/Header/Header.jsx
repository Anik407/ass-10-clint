import { Navbar, Dropdown } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ActiveLink = ({ to, children }) => (
  <Link to={to} className="mx-4 py-2 text-gray-700 hover:text-gray-900">
    {children}
  </Link>
);

const Header = () => {
  return (
    <div className='container md mx-auto'>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab"
            className="mr-3 h-10 lg:h-20 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap lg:text-3xl font-bold dark:text-white">
            Cook's Corner
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="User settings" className="rounded-full h-8" />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
            </Dropdown.Header>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <ActiveLink to="/">
            <span className="lg:text-2xl">Home</span>
          </ActiveLink>
          <ActiveLink to="/blog">
            <span className="lg:text-2xl">Blog</span>
          </ActiveLink>
          <ActiveLink to="/login">
            <span className="lg:text-2xl">Log In</span>
          </ActiveLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
