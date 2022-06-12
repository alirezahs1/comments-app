/**
 * Comment component.
 * showing comment and its reply.
 */

import { CommentBuyerTag } from "./comment-buyer-tag"
import { CommentDotDivider } from "./comment-dot-divider"
import { CommentFeature } from "./comment-feature"
import { CommentLike } from "./comment-like"
import { CommentLineDivider } from "./comment-line-divider"
import { CommentReply } from "./comment-reply"
import { CommentScore } from "./comment-score"

export const Comment = ({authorName, date, isBuyer, isLiked, comment, pros, cons, score, replyAuthorName, replyDate, replyComment}) => {

	/**
	 * @param {string} authorName
	 * @param {string} date
	 * @param {boolean} isBuyer
	 * @param {boolean} isLiked
	 * @param {string} comment
	 * @param {string[]} pros
	 * @param {string[]} cons
	 * @param {number} score
	 * @param {string} replyAuthorName
	 * @param {string} replyDate
	 * @param {string} replyComment
	 * @returns {JSX.Element}
	 */

	return (
		<div className="mb-12 pb-12 relative">
			<header className="flex items-center mb-8 space-x-4 space-x-reverse text-gray-500">
				
				{/** Score given by author */}
				<CommentScore score={score} />

				{/** Author name */}
				<span>{authorName}</span>


				<CommentDotDivider />

				{/** Publish Datetime */}
				<span>{date}</span>

				{/** Is Buyer tag */}
				{isBuyer && (
					<>
						<CommentDotDivider />
						<CommentBuyerTag />
					</>
				)}
			</header>

			{/** Author offers the product or not */}
			{typeof isLiked === "boolean" && (
				<CommentLike className="mb-8" liked={isLiked} />
			)}

			{/** Comment text */}
			<div className="text-gray-800 text-lg mb-8">
				{comment}
			</div>

			{/** Pros and cons */}
			{(pros || cons) && (
				<div className="mb-8">

					{/** Pros */}
					{pros?.map(pro => 
						<CommentFeature key={pro} isPositive={true}>{pro}</CommentFeature>
					)}

					{/** Cons */}
					{cons?.map(con => 
						<CommentFeature key={con} isPositive={false}>{con}</CommentFeature>
					)}
				</div>
			)}

			{/** If anyone replied to comment */}
			{replyComment && (
				<CommentReply authorName={replyAuthorName} date={replyDate} comment={replyComment} />
			)}

			{/** Just a horizontal line as divider */}
			<CommentLineDivider />
		</div>
	)
}