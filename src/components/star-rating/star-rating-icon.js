/**
 * Star sign component.
 * can be unfilled, filled or half filled.
 */

import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRatingIcon = ({fill=0}) => {
	/**
	 * @param {number} fill
	 * @returns {JSX.Element}
	 * @memberof StarRating
	 */



	/** Check fill value for appropriate icon  */
	let icon;
	if (fill <= 0) {
		icon = faStar;
	} else if (fill >= 1) {
		icon = faStarFilled
	} else {
		icon = faStarHalfStroke;
	}

	return (
		<>
			<FontAwesomeIcon className="w-6 h-6 text-amber-500 -scale-x-100" icon={icon} />
		</>
	);

}