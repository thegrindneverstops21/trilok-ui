interface TrailerModalProps {
    videoSrc: string;
    onClose: () => void;
}

export const TrailerModal = ({ videoSrc, onClose }: TrailerModalProps) => (
    <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>X</button>
            <iframe className="trailer-frame" src={videoSrc} title="Trailer" allow="autoplay;encrypted-media" allowFullScreen />
        </div>
    </div>
);