import { useState } from 'react';
import '../styles/Navbar.css';
import { Button } from './shared/Button';
import { IconButton } from './shared/IconButton';

export const Navbar = () => {
    // React remembers whether the menu is open; changing this value redraws the menu.
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className='nav-hamburger'>
                    <IconButton icon={menuOpen ? 'x-lg' : 'list'} ariaLabel="Menu" expanded={menuOpen} controls="main-menu" onClick={() => setMenuOpen(!menuOpen)} />
                </div>

                <span className="navbar-logo">
                    tri<span className="navbar-logo-accent">lok</span>
                </span>

                <div className="navbar-action">
                    <IconButton icon="search" ariaLabel="Search" />
                    <Button variant="subscribe" icon="bookmark-plus" onClick={() => { }}>
                        Subscribe
                    </Button>
                </div>
            </div>

            {/* Only show the links when the hamburger has opened the menu. */}
            {menuOpen && (
                <div className="navbar-menu" id="main-menu" onClick={() => setMenuOpen(false)} onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                        setMenuOpen(false);
                        document.querySelector<HTMLButtonElement>('[aria-controls="main-menu"]')?.focus();
                    }
                }}>
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#movies" className="nav-link">Movies</a>
                    <a href="#genres" className="nav-link">Genre</a>
                </div>
            )}
        </nav>
    );
};
