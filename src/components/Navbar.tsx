import { useState } from 'react';
import '../styles/Navbar.css';
import { Button } from './shared/Button';
import { IconButton } from './shared/IconButton';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container container">
                <IconButton icon="list" ariaLabel="Menu" onClick={() => setMenuOpen(!menuOpen)} />

                <span className="navbar-logo">
                    tri<span className="navbar-logo-accent">lok</span>
                </span>

                <div className="navbar-action">
                    <IconButton icon="search" ariaLabel="Search" />
                    <Button variant="subscribe" icon="bookmark-plus" onClick={() => {}}>
                        Subscribe
                    </Button>
                </div>
            </div>

            {menuOpen && (
                <div className="navbar-menu">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Movies</a>
                    <a href="#" className="nav-link">TV Shows</a>
                    <a href="#" className="nav-link">Genre</a>
                </div>
            )}
        </nav>
    );
};