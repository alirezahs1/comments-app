/**
 * A reply to comment
 */

import { CommentDotDivider } from "./comment-dot-divider"

export const CommentReply = ({authorName, date, comment}) => {
	/**
	 * @param {string} authorName
	 * @param {string} date
	 * @param {string} comment
	 * @returns {JSX.Element}
	 * @memberof Comment
	 */
	
	return (
		<div className="bg-neutral-100 text-slate-700 px-5 py-6 rounded-md">
			<div className="flex items-center space-x-4 space-x-reverse mb-8">
				<span>{authorName}</span>
				<CommentDotDivider />
				<span className="text-gray-500">{date}</span>
			</div>
			<div className="">
				{comment}
			</div>
		</div>
	)
}