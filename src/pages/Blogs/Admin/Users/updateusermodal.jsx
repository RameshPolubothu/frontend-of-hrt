import React, { useState } from 'react';
import { useUpdateUserMutation } from '../../../../redux/features/authenticatio/Authapi';

const Updateusermodal = ({user,onClose,onRoleUpdate}) => {
    const [role,setrole] = useState(user?.role);
    const [updateuserRole] = useUpdateUserMutation();
    console.log(user._id);
    const handleUpdateRole = async() =>{
        try {
            await updateuserRole({id:user?._id,role}).unwrap();
            alert("Role updated successfully");
            onRoleUpdate();
            onClose();
        } catch (error) {
            console.error("Error updating role",error);
        }
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 '>
            <div className='bg-white p-4 rounded shadow-lg w-1/3'>
                <h2 className='text-xl mb-4 '>Edit User</h2>
                <div className='mb-4 space-y-4'>
                <label className='block text-sm font-medium text-gray-500'>Email</label>
                <input 
                className='mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 
                rounded-md py-2 px-5 focus:outline-none'
                type="text"
                value = {user?.email}
                readOnly
                 />
                
                </div>
                <div className='mb-4 space-y-4'>
                <label className='block text-sm font-medium text-gray-500'>Role</label>
                <select value={role} onChange={(e) => setrole(e.target.value)}
                className='mt-1 w-full bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 
                rounded-md py-2 px-5 focus:outline-none'>
                <option vlaue="user">user</option>
                <option vlaue="admin">admin</option>
                </select>
                </div>

                <div className='flex justify-end pt-8'>
                    <button onClick={onClose}className='bg-gray-500 text-white px-4 rounded py-2 mr-2'>Cancel</button>
                    <button onClick = {handleUpdateRole} className='bg-indigo-500 text-white px-4 rounded py-2 mr-2'>Save</button>

                </div>
            </div>

        </div>
    );
}

export default Updateusermodal;
