
// Import Firebase authentication methods
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

/**
 * Login component that provides Google authentication
 * Features:
 * - Google Sign-in button
 * - Modern UI with gradient background
 * - Smooth transitions and hover effects
 */
const Login = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles Google sign-in process
   * On successful authentication, redirects to dashboard
   */
  const handleGoogleSignIn = async () => {
    try {
      // Trigger Google authentication popup
      await signInWithPopup(auth, googleProvider);
      // Redirect to dashboard on success
      navigate('/dashboard');
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] [background-size:40px_40px] opacity-30"></div>
      <div className="max-w-md w-full space-y-8 relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        <div>
          <h2 className="mt-6 text-center text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
          Sign in to your account
          </h2>
        </div>
        
     
        
        <div className="mt-8">
          <button
            onClick={handleGoogleSignIn}
            className="w-full text-xl bg-black text-white flex items-center justify-center py-4 px-6 border border-transparent font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            <img
              className="h-7 w-7 mr-4"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            <span >Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
