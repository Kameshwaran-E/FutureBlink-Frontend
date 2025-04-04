// Import necessary dependencies for routing and authentication
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

// Import authentication components
import Login from './components/auth/Login';
import Navbar from './components/auth/Navbar';

// Import ReactFlow and related components
import '@xyflow/react/dist/style.css';
import ReactFlowComponents from './components/ReactFlowComponents';

// Import context and modal components
import { useContext } from 'react';
import { AppContext } from './components/ContextProvider';
import Modal from './components/ModalComponent/Modal';
import ErrorModal from './components/ModalComponent/ErrorModal';

/**
 * Main App component that handles:
 * - Authentication state management
 * - Protected routing
 * - Layout structure
 */
function App() {
  // Authentication and loading states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get modal and flow states from context
  const {modalOpen, errorModal, nodes, edges} = useContext(AppContext);

  // Set up authentication listener
  useEffect(() => {
    // Subscribe to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Login />
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <>
                <Navbar />
                <div className="h-screen">
                  <ReactFlowComponents/>
                </div>
                {modalOpen && <Modal/>}
                {errorModal && <ErrorModal/>}
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
