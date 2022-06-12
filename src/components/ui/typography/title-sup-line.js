/**
 * A title with a superscript line
 */

export const TitleSupLine = ({className, component="h1", children, ...rest}) => {
	/**
	 * @param {string} className
	 * @param {string} component
	 * @param {string} children
	 * @param {object} rest
	 * @returns {JSX.Element}
	 */


	/** Rendering tag can be quantified dynamic */
	const Tag = component;

	return (
		<Tag
			className={`
				text-2xl 
				text-slate-700 font-bold 
				${className}
			`} 
			{...rest}
			>
				<span
					className={`
						relative inline-block
						before:absolute before:content-['']
						before:left-2 before:right-2 before:-top-2
						before:h-[2px]
						before:bg-slate-500
					`}
					>
						{children}
				</span>
		</Tag>
	);
}