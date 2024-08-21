import React from 'react';
import adminImg from '../../../assets/admin.png';
import { NavLink } from 'react-router-dom';
import { useLogoutUserMutation } from '../../../redux/features/authenticatio/Authapi';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/features/authenticatio/AuthSlice';
const AdminNavigation = () => {
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout());
        } catch (error) {
            console.error("Failed to Logout", error);
        }
    }

    return (
        <div className='space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between'>
            <div>
            <div className='mb-5'>
                <img src={adminImg} className='size-14'/>
                <p className='font-semibold'>Admin</p>
            </div>
            <hr className='h-0.5 bg-black' />
            <ul>
                <li className='mt-5'>
                    <NavLink to='/dashboard' 
                    end
                    className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>Dashboard</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to='/dashboard/add-new-post' className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>Add new Post</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to='/dashboard/manage-items' className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>Manage Items</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to='/dashboard/users' className={({isActive}) => isActive ? "text-blue-500 font-medium" : "text-black font-medium"}>Users</NavLink>
                </li>
            </ul>
            </div>
            <div className='mb-3'>
                <hr className='h-0.5 bg-black mb-3'/>
                <button 
                onClick={handleLogout}
                className='text-white font-medium bg-red-500 px-5 py-1 rounded-md mt-3  hover:bg-indigo-500'>Logout</button>
            </div>
        </div>
    );
}

export default AdminNavigation;
