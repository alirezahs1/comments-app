/**
 * This is a con or pro.
 * Showing a text with a green or red color,
 * with plus or minus sign.
 */

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CommentFeature = ({isPositive, children}) => {
	/**
	 * @param {boolean} isPositive
	 * @param {string} children
	 * @returns {JSX.Element}
	 * @memberof Comment
	 */
	
	return (
		<div className="flex items-center text-slate-700 text-sm mb-1">
			<FontAwesomeIcon className={`w-3 h-3 ml-2 ${isPositive ? "text-green-400" : "text-red-500"}`} icon={isPositive ? faPlus : faMinus} />
			<span>
				{children}
			</span>
		</div>
	)
}