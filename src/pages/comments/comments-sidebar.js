import { StarRating } from "../../components/star-rating"
import { Button } from "../../components/ui/button"

export const CommentsSidebar = ({avgScore, maxScore=5, scoreCount}) => {
	return (
		<>
			<div className="flex mb-4 text-lg">
				{avgScore}&nbsp;
				<span className="text-neutral-500">
					از {maxScore}
				</span>
			</div>

			<StarRating className="mb-5" score={avgScore} />

			{scoreCount && (
				<div className="text-sm text-neutral-500 mb-12">
					{scoreCount} نفر امتیاز داده‌اند
				</div>
			)}

			<Button className={"w-60"}>
				ثبت دیدگاه
			</Button>
		</>
	)
}