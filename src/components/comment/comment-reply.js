import { CommentDotDivider } from "./comment-dot-divider"

export const CommentReply = ({authorName, date, comment}) => {
	return (
		<div className="bg-neutral-100 px-5 py-6 rounded-md">
			<div className="flex items-center space-x-4 space-x-reverse mb-8">
				<span>{authorName}</span>
				<CommentDotDivider />
				<span className="text-gray-500">{date}</span>
			</div>
			<div className="text-lg">
				{comment}
			</div>
		</div>
	)
}