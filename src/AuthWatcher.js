import { useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function AuthWatcher() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const prevSignedIn = useRef(false);

  useEffect(() => {
    if (prevSignedIn.current && !isSignedIn) {
      navigate('/login', { replace: true });
    }
    prevSignedIn.current = isSignedIn;
  }, [isSignedIn, navigate]);

  return null;
}
