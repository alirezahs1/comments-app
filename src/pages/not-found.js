/**
 * 404 - Not found page
 */

import { EmptyPlaceholder } from "components/ui/empty-placeholder"
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
	return (
		<div className="container mx-auto py-24">
			<EmptyPlaceholder>
				<div className="text-center">
					<div className="mb-6">
						404 |‌ صفحه موردنظر یافت نشد.
					</div>
					<Link className="text-blue-600" to={"/"}>رفتن به صفحه اصلی</Link>
				</div>
			</EmptyPlaceholder>
		</div>
	)
}