import { CommentBuyerTag } from "./comment-buyer-tag"
import { CommentDotDivider } from "./comment-dot-divider"
import { CommentFeature } from "./comment-feature"
import { CommentLike } from "./comment-like"
import { CommentLineDivider } from "./comment-line-divider"
import { CommentReply } from "./comment-reply"
import { CommentScore } from "./comment-score"

export const Comment = ({authorName, date, isBuyer, isLiked, comment, pros, cons, score, replyAuthorName, replyDate, replyComment}) => {

	return (
		<div className="mb-12 pb-12 relative">
			<header className="flex items-center mb-8 space-x-4 space-x-reverse text-gray-500">
				<CommentScore score={score} />
				<span>{authorName}</span>
				<CommentDotDivider />
				<span>{date}</span>
				{isBuyer && (
					<>
						<CommentDotDivider />
						<CommentBuyerTag />
					</>
				)}
			</header>

			{typeof isLiked === "boolean" && (
				<CommentLike className="mb-8" liked={isLiked} />
			)}

			<div className="text-gray-800 text-lg mb-8">
				{comment}
			</div>

			{(pros || cons) && (
				<div className="mb-8">
					{pros?.map(pro => 
						<CommentFeature key={pro} isPositive={true}>{pro}</CommentFeature>
					)}

					{cons?.map(con => 
						<CommentFeature key={con} isPositive={false}>{con}</CommentFeature>
					)}
				</div>
			)}

			{replyComment && (
				<CommentReply authorName={replyAuthorName} date={replyDate} comment={replyComment} />
			)}

			<CommentLineDivider />
		</div>
	)
}