function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>About CoastalMenu</h1>
          <p className="muted">Passion for flavor, crafted with care.</p>
        </div>
      </section>

      <section className="about-food">
        <div className="about-grid">
          <div className="about-copy">
            <h2>Food that tells a story</h2>
            <p>
              Our menu celebrates fresh, seasonal ingredients and regional favorites. From
              hearty mains to vibrant salads and indulgent desserts, every dish is
              designed to balance flavor and nourishment.
            </p>
            <ul className="bullet-list">
              <li>Locally sourced produce and responsibly raised proteins</li>
              <li>Small-batch sauces and house-made dressings</li>
              <li>Vegetarian and vegan delights without compromise</li>
            </ul>
          </div>
          <div className="about-image">
            <img
              src="/signdish.jpg"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'; }}
              alt="Signature dish"
            />
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" alt="Colorful bowl" />
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop" alt="Shared table" />
        <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop" alt="Dessert" />
      </section>

      <section className="about-founder">
        <div className="founder-card">
          <img
            className="founder-photo"
            src="/founder.jpg"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop'; }}
            alt="Founder"
          />
          <div className="founder-copy">
            <h2>Meet the Founder</h2>
            <p>
            CoastalMenu began with a simple thought—food should be easy to discover, explore, and enjoy. I wanted to create more than just a menu; I wanted to design an experience that connects people to flavors, cultures, and stories.
             In today’s fast-moving world, menus often feel plain or confusing. That’s why I built CoastalMenu: to bring clarity, beauty, and convenience to the way you browse and choose your meals. Every feature is designed with you in mind, making food discovery seamless and enjoyable.
             For me, food has always been more than just fuel—it’s an expression of culture, a reason to gather, and a source of joy. With CoastalMenu, my goal is to celebrate that spirit and help you explore dishes with excitement, curiosity, and delight.
             Thank you for being part of this journey. Together, let’s make dining smarter, simpler, and more meaningful.
             <br />
             <b>— Adithya, Founder of CoastalMenu</b>
              
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;


