interface ColumnProps {
    title: string;
    links: string[];
}

export const Column = ({title, links}: ColumnProps) => (
    <div className="column">
        <h4 className="column-title">{title}</h4>
            <ul className="column-list">
                {links.map((link) => (
                    <li key={link}><a href="#" className="column-link">{link}</a></li>
                ))}
            </ul>
    </div>
)