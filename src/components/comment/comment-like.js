/**
 * Does the author offers the stuff or not.
 * 
 */

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CommentLike = ({className, liked}) => {
	/**
	 * @param {string} className
	 * @param {boolean} liked
	 * @returns {JSX.Element}
	 * @memberof Comment
	 */
	
	return (
		<div className={`flex items-center font-normal ${liked ? "text-green-500" : "text-red-400"} ${className}`}>
			<FontAwesomeIcon icon={liked ? faThumbsUp : faThumbsDown} className={`w-7 h-7 ml-4 ${liked ? "-mt-1" : "-scale-x-100 -mb-1"}`} />
			{liked ? "پیشنهاد می‌کنم" : "پیشنهاد نمی‌کنم"}
		</div>
	)
}