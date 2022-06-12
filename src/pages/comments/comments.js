/**
 * Comments Page
 */

import { Loading } from "components/loading";
import { TitleSupLine } from "components/ui/typography";
import { useEffect, useState } from "react";
import { CommentsList } from "./comments-list";
import { CommentsSidebar } from "./comments-sidebar";

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
	{
		id: 6,
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
		id: 7,
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
		id: 8,
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
		id: 9,
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
		id: 10,
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
	{
		id: 11,
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
		id: 12,
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
		id: 13,
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
		id: 14,
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
		id: 15,
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

export const CommentsPage = () => {

	/**
	 * Loading status
	 */
	const [loading, setLoading] = useState(false);

	/**
	 * The data that is being fetched
	 */
	const [data, setData] = useState(false);

	/**
	 * The current page number
	 */
	const [page, setPage] = useState(1);

	/**
	 * @description: fetch comments
	 * @param {number} page
	 * @returns {void}
	 */
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setTimeout(() => {
				setData(fakeCommentsData.slice(0, page*5))
				setLoading(false);
			}, 1000);
		});
	}, [page])

	return (
		<div className="container mx-auto py-24">
			{/** Page title */}
			<TitleSupLine className="text-center mb-16">
				دیدگاه‌ها
			</TitleSupLine>


			<div className="flex flex-wrap">
				
				{/** Sidebar */}
				<aside className="w-full lg:w-96 px-3 mb-12 lg:mb-0">
					<CommentsSidebar avgScore={4.5} scoreCount={45} />
				</aside>

				{/** List of comments */}
				<article className="flex-1 px-3">
					<Loading active={loading}>
						<CommentsList comments={data} hasMore={fakeCommentsData?.length > data.length} onClickMore={() => setPage(p => p+1)} />
					</Loading>
				</article>
			</div>
		</div>
	);
}