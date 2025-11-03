import React, {  useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { getAuth, updateProfile } from 'firebase/auth';

const MyProfile = () => {
    const { user,  setUser } = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);
    
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');
    
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error("User not found.");
            return;
        }

    const updatedPhoto = photo.trim() === '' ? user.photoURL : photo;
    const auth = getAuth();

    try {
      // Firebase profile update
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: updatedPhoto,
    });
    await auth.currentUser.reload();

     const updatedUser = auth.currentUser;
     setUser({ ...updatedUser });


      // Toast success
    toast.success("Profile Updated Successfully!");

     setShowForm(false);
     

    } catch (error) {
        console.log(error)
      toast.error(error.message);
    }
  };
    
    
    return (
        
        <div className='bg-[#D5DEEF] py-6 md:py-20'>
            <title>My Profile</title>
                
                <div className='max-w-11/12 mx-auto'>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-6 px-10 py-10  ">

                    <img src={user.photoURL || 'https://via.placeholder.com/150'}  alt="Profile" 
                    className= {`w-60 h-60 rounded-sm 
                    object-cover border-2 border-[#1E2E4F] transition-opacity duration-500 ${
                    user?.photoURL ? 'opacity-100' : 'opacity-70'}`} />

                    <div>
                        <h3 className='font-medium text-xl mb-2'>Name: {user.displayName || "Not Available"} </h3>

                        <hr className='border-[#1E2E4F]' />

                        <h3 className='font-medium text-xl my-2'>Email: {user && user.email}</h3>
                        
                        <hr className='border-[#1E2E4F]' />

                         {/* update profile btn */}
                        <button 
                        onClick={() => {
                            setShowForm(!showForm)
                        }}
                        className=' cursor-pointer rounded-sm mt-4
                        hover:scale-105 hover:border-2 hover:border-[#1E2E4F] hover:bg-none
                        bg-gradient-to-r from-[#1E2E4F] to-[#395886]  
                         py-2 px-3 md:py-2 md:px-6
                        text-white hover:text-[#1E2E4F] font-semibold text-base'>
                        {showForm ? 'Cancel' : 'Update Profile'}
                        </button>
                    </div>
                </div>

                {/* Update Profile Form */}

                {showForm && (
                    <form
                        onSubmit={handleUpdateProfile}
                        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
                         <h2 className="text-center text-xl font-bold text-[#1E2E4F] mb-4">
                            Update Your Info
                        </h2>

                        {/* new name */}
                        <label className="block mb-2 text-sm font-medium text-gray-700">New Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
                            placeholder="Enter new name"
                        />

                        {/* new photo */}
                        <label className="block mb-2 text-sm font-medium text-gray-700">New Photo URL</label>
                        <input
                            type="text"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
                            placeholder="Enter new photo URL"
                        />

                        {/* save btn */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#1E2E4F] to-[#395886]
                            text-white font-semibold text-base text-white hover:text-[#1E2E4F] cursor-pointer
                            py-2 px-3 md:py-2 md:px-6 rounded-sm hover:scale-105 hover:border-2  
                            hover:border-[#1E2E4F] hover:bg-none"
                        >
                            Save Changes
                        </button>

                    </form>
                )
                }
            
            </div>
            
            


            

         


        </div>
    );
};

export default MyProfile;