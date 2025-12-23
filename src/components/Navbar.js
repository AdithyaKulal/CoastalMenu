import { Link, NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useContext } from 'react';
import ClerkFlagContext from '../ClerkFlagContext';

function Navbar() {
  const clerkEnabled = useContext(ClerkFlagContext);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">🍽️</span>
          CoastalMenu
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Profile
          </NavLink>

          {clerkEnabled ? (
            <>
              <SignedOut>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Sign In
                </NavLink>
              </SignedOut>

              <SignedIn>
                <div style={{ marginLeft: 12 }}>
                  <UserButton />
                </div>
              </SignedIn>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


