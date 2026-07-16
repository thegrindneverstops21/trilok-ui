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

const socialIcons = ["facebook", "twitter", "instagram", "youtube"];

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-logo">
          tri<span className="footer-accent">lok</span>
        </span>
        <p className="footer-contact">
          <span>trilok007@sample.com</span>
          <span>+001 2390 27649</span>
        </p>
      </div>

      {footerData.map((col) => (
        <Column key={col.title} title={col.title} links={col.links} />
      ))}
      <div className="footer-column">
        <h4 className="footer-title">Follow Us</h4>
        <div className="footer-socials">
          {socialIcons.map((icon) => (
            <a href="#" key={icon} className="footer-icon">
              {icon[0].toUpperCase()}
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
