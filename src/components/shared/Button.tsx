interface ButtonProps {
    children: React.ReactNode;
    variant?: 'solid' | 'outline' | 'subscribe';
    onClick: () =>void;
}

export const Button = ({children, variant='solid', onClick}: ButtonProps) => (
    <button className={`btn btn--${variant}`} onClick={onClick}>
        {children}
    </button>
);