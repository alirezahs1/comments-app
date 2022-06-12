/**
 * The score given by comment's author.
 * Also showing a color related to score
 * from 1 to 5.
 */

export const CommentScore = ({className, score}) => {
	/**
	 * @param {string} className
	 * @param {number} score
	 * @returns {JSX.Element}
	 * @memberof Comment
	 */


	/** map colors to score */
	const colorClassMap = {
		'1': 'bg-red-400',
		'2': 'bg-amber-300',
		'3': 'bg-lime-400',
		'4': 'bg-green-400',
		'5': 'bg-emerald-500',
	}
	return (
		<span className={`rounded-md w-8 h-7 flex items-center justify-center text-white text-sm ${colorClassMap[score]} ${className}`}>
			{score?.toFixed(1)}
		</span>
	)
}