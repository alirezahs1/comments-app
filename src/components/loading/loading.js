/**
 * Loading spinner over every component that uses it.
 */

import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Loading = ({active, children}) => {
	/**
	 * @param {boolean} active
	 * @param {string} children
	 * @returns {JSX.Element}
	 */

	return (
		<div className={`relative`}>
		
			{/** Loading icon */}
			<div className={`absolute z-30 inset-0 flex items-center justify-center bg-neutral-100 text-gray-600 ${active ? "opacity-60" : "pointer-events-none opacity-0"}`}>
				<FontAwesomeIcon className="w-4 h-4" icon={faSpinner} pulse />
			</div>

			{/** Children */}
			{children}
		</div>
	)
}