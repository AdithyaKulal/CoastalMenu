import { Link } from 'react-router-dom';

function Landing() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1>Discover Your Next Favorite Dish</h1>
          <p>Curated menus, mouth-watering photos, and a smooth ordering experience.</p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-outline">Sign In</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=1600&auto=format&fit=crop" alt="Fresh ingredients" />
          <h3>Fresh & Seasonal</h3>
          <p>We highlight seasonal specials and locally sourced ingredients.</p>
        </div>
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop" alt="Cozy dining" />
          <h3>Curated Menus</h3>
          <p>Hand-picked selections for every mood and occasion.</p>
        </div>
        <div className="feature-card">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop" alt="Chef special" />
          <h3>Chef Specials</h3>
          <p>Discover trending dishes loved by our foodies.</p>
        </div>
      </section>
    </main>
  );
}

export default Landing;


