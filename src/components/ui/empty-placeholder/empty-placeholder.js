/**
 * shows a placeholder when the list is empty
 */

export const EmptyPlaceholder = ({className, children}) => {
	/**
	 * @param {string} className
	 * @param {string} message
	 * @returns {JSX.Element}
	 */

	return (
		<div className={`h-36 bg-gray-100 flex items-center justify-center rounded-md text-sm text-slate-800 ${className || ''}`}>
			{children || "هیچ موردی برای نمایش وجود ندارد."}
		</div>
	)
}