import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=826&t=st=1683024078~exp=1683024678~hmac=49adf532af0306b29a02744b0bc49a571dcd2b3c2f177305218c05cdd0a99bab"
          className="mr-3 h-10 lg:h-20 rounded-full"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap lg:text-3xl font-bold dark:text-white">
          <span className='text-orange-400'> Cook's</span> <span className='text-lime-300'>Corner</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
        >
        </Dropdown>
        {
          user ? <> <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
          </a> <button onClick={handleLogout} className='bg-stone-300 font-bold px-3 py-2 ms-2 rounded'>Logout</button></>
            :
            <button className='bg-stone-300 font-bold px-3 py-2 rounded'><Link to='/login'>Login</Link></button>
        }
        <Tooltip
          id="my-tooltip"
          content={user ? user.displayName : ""}
          isOpen={isOpen}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ActiveLink to='/'><span className='lg:text-2xl'>Home</span></ActiveLink>
        <ActiveLink to='/blog'><span className='lg:text-2xl'>Blog</span></ActiveLink>
        <ActiveLink to='/registration'><span className='lg:text-2xl'>Register</span></ActiveLink>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;
