import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CommentFeature = ({isPositive, children}) => (
	<div className="flex items-center text-slate-700 text-sm mb-1">
		<FontAwesomeIcon className={`w-3 h-3 ml-2 ${isPositive ? "text-green-400" : "text-red-500"}`} icon={isPositive ? faPlus : faMinus} />
		<span>
			{children}
		</span>
	</div>
)