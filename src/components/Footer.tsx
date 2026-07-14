import { Column } from "./Column";

const footerData = [
    {
        title: 'Company',
        links: ['About Us', 'Privacy Policy', 'Contact Us'],
    }, 
    {
        title: 'Premium Movies',
        links: ['Primal', 'Dead Evil', 'Jiesel']
    },
    {
        title: 'Quick Links',
        links: ['Terms of Use', 'Error', 'Share Feedback']
    },
];

const socialIcons = ['facebook', 'twitter', 'instagram', 'youtube'];

export const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <span className="footer-logo">tri<span className="footer-logo-accent">lok</span></span>
            <p className="footer-contact">
                <span>trilok007@sample.com</span>
                <span>+001 2390 27649</span>
            </p>
        </div>
        {footerData.map((col) => (
            <Column key={col.title} title= {col.title} links={col.links} />
        ))}
        <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-socials">
                {socialIcons.map((icon) => (
                    <a href="#" key={icon} className="footer-icon">{icon[0].toUpperCase()}</a>
                ))}
            </div>
        </div>
        <p className="footer-legal">Best Viewed on Google</p>
    </footer>
)


