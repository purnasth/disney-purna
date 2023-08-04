// UserProfile.jsx
import React from "react";
import user from "./../assets/images/purna.webp";

const UserProfile = () => {
  const userData = {
    fullName: "Purna Shrestha",
    email: "purnashrestha0310@gmail.com",
    contactNumber: "9808021753",
  };

  return (
    <div className="relative">
      <img
        src={user}
        alt="User's Picture"
        className="w-12 h-12 rounded-full cursor-pointer object-cover m-5 my-auto hover:border-2 hover:border-[#032541] transition-all duration-100 ease-in-out"
      />
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 absolute right-5 top-5">
        <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#032541] mx-auto mb-4">
          <img src={user} alt="User's Picture" className="w-20 h-20 rounded-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mt-2">{userData.fullName}</h3>
        <p className="text-gray-500 text-sm mb-1">{userData.email}</p>
        <p className="text-gray-500 text-sm mb-4">{userData.contactNumber}</p>
        <hr className="border-gray-300 mb-4" />
        <button className="bg-[#032541] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#024429] transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
