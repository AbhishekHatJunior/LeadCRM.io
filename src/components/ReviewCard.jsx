import ReviewStar from "../assets/images/ReviewStar.png"

const ReviewCard = ({ text, stars = 5, name, source, avatar, badgeIcon }) => {
    return (
        <div className="review-card">
            <p className="review-quote">“{text}”</p>

            <div className="review-stars-row">
                {badgeIcon && <img src={badgeIcon} alt="Review Platform" className="review-badge" />}
                <div className="review-stars" aria-label={`${stars} star rating`}>
                    {Array.from({ length: stars }).map((_, i) => (
                        <span key={i} className="review-star">
                            <img src={ReviewStar} className="reviewStar" alt="Ratings" />
                        </span>
                    ))}
                </div>
            </div>

            <div className="review-author">
                <div className="review-divider" />
                <div className="d-flex gap-3">
                    <img src={avatar} alt={name} className="review-avatar" />
                    <div className="reviewer-container">
                        <div className="review-name">{name}</div>
                        <div className="review-source fw-400 font-exo2">{source}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
