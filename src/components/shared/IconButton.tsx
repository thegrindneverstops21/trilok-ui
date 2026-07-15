interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    variant?: 'default' | 'round';
}

export const IconButton = ({ icon, onClick, variant='default'}: IconButtonProps) => (
    <button className={`icon-btn icon-btn--${variant}`} onClick={onClick}>
        {icon}
    </button>
)