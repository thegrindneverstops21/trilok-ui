import '../../styles/IconButton.css';
interface IconButtonProps {
    icon: string; // bootstrap-icons name, no "bi-" prefix, e.g. "list", "search"
    onClick?: () => void;
    variant?: 'default' | 'round';
    ariaLabel?: string;
    expanded?: boolean;
    controls?: string;
}

export const IconButton = ({ icon, onClick, variant = 'default', ariaLabel, expanded, controls }: IconButtonProps) => (
    <button
        type="button"
        className={`icon-btn icon-btn--${variant}`}
        onClick={onClick}
        aria-label={ariaLabel ?? icon}
        aria-expanded={expanded}
        aria-controls={controls}
    >
        <i className={`bi bi-${icon}`} aria-hidden="true" />
    </button>
);
