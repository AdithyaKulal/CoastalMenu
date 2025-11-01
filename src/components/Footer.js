function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} CoastalMenu. Taste the difference.</p>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


