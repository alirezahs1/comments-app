/**
 * shows a `Is buyer` caption with `check` sign.
 */

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CommentBuyerTag = () => (
	<div className="flex items-center text-green-500">
		<FontAwesomeIcon className="w-5 h-5 ml-2" icon={faCheck} />
		خریدار
	</div>
)