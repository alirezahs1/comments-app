/**
 * New comment button component
 */

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CommentsMoreButton = ({className, ...rest}) => {
	/**
	 * @param {string} className
	 * @param {object} rest
	 * @returns {JSX.Element}
	 * @memberof Comments
	 */

	
	return (
		<div className={`flex items-center cursor-pointer text-indigo-500 hover:text-indigo-700 transition-colors duration-200 text-lg ${className || ''}`} {...rest}>
			<span className="ml-3">
				مشاهده دیدگاه‌های بیشتر
			</span>
			<FontAwesomeIcon className="w-4 h-4" icon={faAngleDown} />
		</div>
	)
}