import { StarRatingIcon } from "./star-rating-icon";

export const StarRating = ({ className, score, stars=5 }) => {
	
	const starsArray = Array.from({ length: stars }, (_, i) => i);

	return (
		<div className={`flex space-x-1 space-x-reverse ${className}`}>
			{starsArray.map(star => (
				<StarRatingIcon key={star} fill={score-star} />
			))}
		</div>
	);
}