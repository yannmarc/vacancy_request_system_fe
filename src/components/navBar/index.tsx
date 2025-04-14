import { useState } from "react";
import Avatar from '../../assets/avatar.png'
import { getActiveUser, setActiveUser } from "../../utils/user";
import { useNavigate } from "react-router";

const ACCOUNT_TYPE_EMPLOYEE = 'Employee Account';
const ACCOUNT_TYPE_EMPLOYER = 'Employer Account';



export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = getActiveUser();
  const navigate = useNavigate()

  const toggleActiveUser = (currentUser: string, setActiveUser: (value: string) => void) => {
    const newUser = currentUser === "employee" ? "admin" : "employee";
    setActiveUser(newUser);
    navigate(`/${newUser}`)
  }

  const mockUser = {
    name: "Jane Doe",
    avatar: Avatar,
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
      <div className="text-xl font-bold text-blue-600">
       Vacation Request System
      </div>

      <div className="relative flex items-center">
      <div className="px-4 py-3 text-sm">
              <p className="font-medium text-gray-900">{mockUser.name}</p>
              <p className="text-gray-600 px-2 py-1 rounded-md bg-blue-100">{user === "admin" ? ACCOUNT_TYPE_EMPLOYER : ACCOUNT_TYPE_EMPLOYEE}</p>
            </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center !bg-transparent rounded-full focus:outline-none"
        >
          <img
            src={mockUser.avatar}
            alt="avatar"
            className="h-14 w-14 object-cover rounded-full border"
          />
        </button>

        {open && (
          <div className="absolute bottom-[-70px] right-0 mt-2 w-[290px] rounded-md bg-white shadow-lg z-50">
           
            <div className="border-t px-4 py-2">
              <button
                className="w-full text-white text-center hover:underline"
                onClick={() => {toggleActiveUser(user, setActiveUser)}}
              >
                Switch account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
