/**
 * List of comments
 */

import { Comment } from "components/comment"
import { EmptyPlaceholder } from "components/ui/empty-placeholder"
import { CommentsMoreButton } from "./comments-more-button"

export const CommentsList = ({comments, hasMore, onClickMore}) => {
	/**
	 * @param {Array<Object>} comments
	 * @param {boolean} hasMore
	 * @param {function} onClickMore
	 * @returns {JSX.Element}
	 * @memberof Comments
	 */

	if (!comments?.length) {
		return <EmptyPlaceholder />;
	}

	return (
		<>
			{/** Show comment's component in loop */}
			{comments.map(comment => (
				<Comment
					key={comment.id}
					score={comment.score}
					authorName={comment?.author?.displayName}
					date={comment?.timeDiff}
					isBuyer={comment?.isBuyer}
					isLiked={comment?.isLiked}
					comment={comment?.comment}
					pros={comment?.pros}
					cons={comment?.cons}

					replyAuthorName={comment?.reply?.author?.displayName}
					replyDate={comment?.reply?.timeDiff}
					replyComment={comment?.reply?.comment}
					/>
			))}

			{/** Show more button if there are more comments */}
			{hasMore && (
				<CommentsMoreButton onClick={onClickMore} />
			)}
		</>
	)
}