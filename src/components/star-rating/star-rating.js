/**
 * Set of stars that fill by given score.
 */

import { StarRatingIcon } from "./star-rating-icon";

export const StarRating = ({ className, score, stars=5 }) => {
	/**
	 * @param {string} className
	 * @param {number} score
	 * @param {number} stars
	 * @returns {JSX.Element}
	 */
	
	/** An array of numbers with length of `stars` params */
	const starsArray = Array.from({ length: stars }, (_, i) => i);

	return (
		<div className={`flex space-x-1 space-x-reverse ${className}`}>
			{starsArray.map(star => (
				<StarRatingIcon key={star} fill={score-star} />
			))}
		</div>
	);
}