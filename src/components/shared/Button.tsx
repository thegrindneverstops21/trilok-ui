import '../../styles/Button.css';
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'solid' | 'outline' | 'subscribe';
    icon?: string;
    onClick: () => void;
}

export const Button = ({ children, variant = 'solid', icon, onClick }: ButtonProps) => (
    <button className={`btn btn--${variant}`} onClick={onClick}>
        {icon && <i className={`bi bi-${icon}`} aria-hidden="true" />}
        {children}
    </button>
);