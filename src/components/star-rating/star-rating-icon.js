import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRatingIcon = ({fill=0}) => {

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