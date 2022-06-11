import { Comment } from "components/comment"

const fakeCommentsData = [
	{
		id: 1,
		author: {
			displayName: 'سیاوش تقی‌لو',
		},
		timeDiff: '۵ ساعت پیش',
		isBuyer: true,
		isLiked: true,
		score: 5,
		comment: `یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر. چند بار موند زیر ماشین هیچیش نشد. به همه ی ماشین سواران این گوشی رو پیشنهاد میکنم.`,
		reply: {
			author: {
				displayName: 'مدیریت فروشگاه',
			},
			timeDiff: '۵ ساعت پیش',
			comment: "بسیار ممنونم از نقطه نظر شما."
		},
		pros: ['بسیار انعطاف‌پذیر'],
		cons: ['بسیار پر سرعت']
	},
	{
		id: 2,
		author: {
			displayName: 'سیاوش تقی‌لو',
		},
		timeDiff: '۴ ساعت پیش',
		isBuyer: true,
		isLiked: false,
		score: 4,
		comment: `یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر. چند بار موند زیر ماشین هیچیش نشد. به همه ی ماشین سواران این گوشی رو پیشنهاد میکنم. یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر`,
		reply: null,
		pros: ['بسیار انعطاف‌پذیر'],
		cons: ['بسیار پر سرعت']
	},
	{
		id: 3,
		author: {
			displayName: 'سیاوش تقی‌لو',
		},
		timeDiff: '۵ ساعت پیش',
		isBuyer: false,
		isLiked: null,
		score: 3,
		comment: `یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر. چند بار موند زیر ماشین هیچیش نشد. به همه ی ماشین سواران این گوشی رو پیشنهاد میکنم.`,
		reply: null,
		pros: [],
		cons: []
	},
	{
		id: 4,
		author: {
			displayName: 'سیاوش تقی‌لو',
		},
		timeDiff: '۵ ساعت پیش',
		isBuyer: false,
		isLiked: null,
		score: 2,
		comment: `یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر. چند بار موند زیر ماشین هیچیش نشد. به همه ی ماشین سواران این گوشی رو پیشنهاد میکنم.`,
		reply: null,
		pros: [],
		cons: []
	},
	{
		id: 5,
		author: {
			displayName: 'سیاوش تقی‌لو',
		},
		timeDiff: '۵ ساعت پیش',
		isBuyer: false,
		isLiked: null,
		score: 1,
		comment: `یکی از بهترین گوشی هایی که استفاده کردم بود. بسیار عالی و فوق‌العاده انعطاف‌پذیر. چند بار موند زیر ماشین هیچیش نشد. به همه ی ماشین سواران این گوشی رو پیشنهاد میکنم.`,
		reply: null,
		pros: [],
		cons: []
	},
]

export const CommentsList = () => {
	return (
		<>
			{fakeCommentsData.map(comment => (
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
		</>
	)
}