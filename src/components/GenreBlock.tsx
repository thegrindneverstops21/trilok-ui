interface GenreBlockProp {
  label: string,
  color: string
}

export const GenreBlock = ({ label, color }: GenreBlockProp) => (
  <div className="genre-block" style={{ backgroundColor: color }}>
    <span className="genre-block-label">{label}</span>
  </div>
);
