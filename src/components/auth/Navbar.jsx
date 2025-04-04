import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-blue-300 p-4 transition-all duration-300 ease-in-out shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold transition-all duration-300 ease-in-out hover:scale-105 cursor-default">Kameshwaran</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
