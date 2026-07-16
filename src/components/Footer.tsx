import { Column } from "./Column";
import "../styles/Footer.css";

const footerData = [
  {
    title: "Company",
    links: ["About Us", "Privacy Policy", "Contact Us"],
  },
  {
    title: "Premium Movies",
    links: ["Primal", "Dead Evil", "Jiesel"],
  },
  {
    title: "Quick Links",
    links: ["Terms of Use", "Error", "Share Feedback"],
  },
];

const socialIcons = [
  { icon: "bi-facebook", label: "Facebook" },
  { icon: "bi-twitter", label: "Twitter" },
  { icon: "bi-instagram", label: "Instagram" },
  { icon: "bi-youtube", label: "YouTube" },
];

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-logo">
          tri<span className="footer-accent">lok</span>
        </span>
        <p className="footer-contact">
          <span><i className="bi bi-envelope" /> trilok007@sample.com</span>
          <span><i className="bi bi-telephone" /> +001 2390 27649</span>
        </p>
      </div>

      {footerData.map((col) => (
        <Column key={col.title} title={col.title} links={col.links} />
      ))}
      <div className="footer-column">
        <h4 className="column-title">Follow Us</h4>
        <div className="footer-socials">
          {socialIcons.map(({ icon, label }) => (
            <a href="#" key={label} aria-label={label} className="footer-icon">
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
    <p className="footer-legal">
      Best Viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+,
      Safari 5.55+ * Copyright @ 2026 Trilok. All rights reserved.
    </p>
  </footer>
);