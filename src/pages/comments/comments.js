import { TitleSupLine } from "../../components/ui/typography/title-sup-line";
import { CommentsList } from "./comments-list";
import { CommentsSidebar } from "./comments-sidebar";

export const CommentsPage = () => {
	return (
		<div className="container mx-auto pt-24 pb-8">
			<TitleSupLine className="text-center mb-12">
				دیدگاه‌ها
			</TitleSupLine>
			<div className="flex">
				<aside className="w-96 px-3">
					<CommentsSidebar avgScore={4.5} scoreCount={45} />
				</aside>
				<article className="flex-1 px-3">
					<CommentsList />
				</article>
			</div>
		</div>
	);
}