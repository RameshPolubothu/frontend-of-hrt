import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import avatarImg from '../assets/commentor.png';
import { useLogoutUserMutation } from '../redux/features/authenticatio/Authapi';
import { logout } from '../redux/features/authenticatio/AuthSlice';

const navLists = [
    { Name: 'Home', path: '/' },
    { Name: 'About Us', path: '/about' },
    { Name: 'Privacy Policy', path: '/privacy' },
    { Name: 'Contact Us', path: '/contact' }
];

const Navbar = () => {
    const [isMenuopen, setMenuopen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const tooglemenu = () => setMenuopen(!isMenuopen);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutUser] = useLogoutUserMutation();

    const handlelogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            // handle error
        }
    };

    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="/">
                    <img src="/logo.png" className='h-12' alt="Logo" />
                </a>
                <ul className='sm:flex hidden items-center gap-8'>
                    {navLists.map((listitem, index) => (
                        <li key={index}>
                            <NavLink to={listitem.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""}
                            >{listitem.Name}
                            </NavLink>
                        </li>
                    ))}
                    {/* Conditionally render user based on login status */}
                    {user && user.role === 'user' ? (
                        <li className='flex items-center gap-3'>
                            <img src={avatarImg} className='size-12' alt="User Avatar" />
                            <button className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'
                                onClick={handlelogout}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    ) }

                    {user && user.role === 'admin' && (
                        <li className='flex items-center gap-3'>
                            <img src={avatarImg} className='size-8' alt="Admin Avatar" />
                            
                            <Link to="/dashboard">
                                <button className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>Dashboard</button>
                            </Link>
                        </li>
                    )}
                </ul>
                {/* Toggle menu */}
                <div className='flex items-center sm:hidden'>
                    <button
                        onClick={tooglemenu}
                        className='flex items-center px-3 py-4 bg-[#fdfafa] rounded text-sm text-gray-500 hover:text-gray-900'>
                        {/* Conditionally show menu icon */}
                        {isMenuopen ? <IoClose className='size-6' /> : <IoMenu className='size-6' />}
                    </button>
                </div>
            </nav>
            {/* Function to show menu in small devices */}
            {isMenuopen && (
                <ul className='fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50'>
                    {navLists.map((listitem, index) => (
                        <li key={index} className='mt-5 px-4'>
                            <NavLink
                                onClick={() => setMenuopen(false)}
                                to={listitem.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""}
                            >{listitem.Name}
                            </NavLink>
                        </li>
                    ))}
                    {(
                        <li className='px-4 mt-5'>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    )}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
