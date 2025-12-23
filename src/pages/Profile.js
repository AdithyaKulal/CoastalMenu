import { SignedIn } from '@clerk/clerk-react';

export default function Profile() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Profile</h1>
      <p>This is a protected route that only signed-in users can access.</p>
    </main>
  );
}
