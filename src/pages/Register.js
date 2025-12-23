import { useContext, useEffect } from 'react';
import { SignUp, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import ClerkFlagContext from '../ClerkFlagContext';

function Register() {
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
        <h2>Register</h2>
        <p>Clerk is not configured. Please set your Clerk publishable key in `.env`.</p>
      </main>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <SignUp routing="path" path="/register" />
      </div>
      <div className="auth-side">
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop" alt="Tabletop food" />
      </div>
    </div>
  );
}

export default Register;


