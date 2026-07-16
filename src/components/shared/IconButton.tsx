import '../../styles/IconButton.css';
interface IconButtonProps {
    icon: string; // bootstrap-icons name, no "bi-" prefix, e.g. "list", "search"
    onClick?: () => void;
    variant?: 'default' | 'round';
    ariaLabel?: string;
}

export const IconButton = ({ icon, onClick, variant = 'default', ariaLabel }: IconButtonProps) => (
    <button
        type="button"
        className={`icon-btn icon-btn--${variant}`}
        onClick={onClick}
        aria-label={ariaLabel ?? icon}
    >
        <i className={`bi bi-${icon}`} aria-hidden="true" />
    </button>
);