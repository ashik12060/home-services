import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/userAction";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.signIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <header className="bg-white  border-b border-gray-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/" className="text-black font-mono font-bold tracking-wide hover:underline">
            HOME
          </Link>
          <Link to="/products" className="text-black font-mono font-bold tracking-wide hover:underline">
            PRODUCTS
          </Link>
          <Link to="/bloghome" className="text-black font-mono font-bold tracking-wide hover:underline">
            BLOG
          </Link>
        </div>

        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Replace with <img src={userInfo?.avatarUrl} alt="Profile" /> if available */}
              <span className="text-black font-bold">{userInfo?.name?.[0] || "A"}</span>
            </div>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-50">
              <Link
                to="/admin/dashboard"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Admin
              </Link>
              <Link
                to="/user/dashboard"
                onClick={closeDropdown}
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                User
              </Link>
              {userInfo ? (
                <button
                  onClick={() => {
                    logOutUser();
                    closeDropdown();
                  }}
                  className="w-full text-left px-4 py-2 text-purple-700 hover:bg-gray-100"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
