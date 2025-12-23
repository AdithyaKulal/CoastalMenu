import { useContext, useEffect } from 'react';
import { SignIn, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import ClerkFlagContext from '../ClerkFlagContext';

function Login() {
  const clerkEnabled = useContext(ClerkFlagContext);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/', { replace: true });
    }
  }, [isSignedIn, navigate]);

  if (!clerkEnabled) {
    return (
      <main style={{ padding: 24 }}>
        <h2>Sign In</h2>
        <p>Clerk is not configured. Please set your Clerk publishable key in `.env`.</p>
      </main>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <SignIn routing="path" path="/login" />
      </div>
      <div className="auth-side">
        <img src="/signdish.jpg" alt="Food collage" />
      </div>
    </div>
  );
}

export default Login;


