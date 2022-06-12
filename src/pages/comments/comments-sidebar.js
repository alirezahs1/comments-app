/**
 * Comments page's sidebar 
 */

import { StarRating } from "components/star-rating"
import { Button } from "components/ui/button"

export const CommentsSidebar = ({avgScore, maxScore=5, scoreCount}) => {
	/**
	 * @param {number} avgScore
	 * @param {number} maxScore
	 * @param {number} scoreCount
	 * @returns {JSX.Element}
	 * @memberof Comments
	 */


	return (
		<>
			{/** Numeric average score */}
			<div className="flex mb-4 text-lg">
				{avgScore}&nbsp;
				<span className="text-neutral-500">
					از {maxScore}
				</span>
			</div>

			{/** Average score with stars */}
			<StarRating className="mb-5" score={avgScore} />

			{/** Rating count */}
			{scoreCount && (
				<div className="text-sm text-neutral-500 mb-12">
					{scoreCount} نفر امتیاز داده‌اند
				</div>
			)}

			{/** New comment button */}
			<Button className={"w-60"}>
				ثبت دیدگاه
			</Button>

		</>
	)
}