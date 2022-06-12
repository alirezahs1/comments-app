/**
 * General button component
 */


 export const Button = ({className, children, ...rest}) => {

	/**
	 * Rendering the UI
	 */

	return (
		<button
			className={`
				cursor-pointer
				px-7 py-3
				rounded-md
				bg-indigo-500 
				text-white text-center text-xl
				transition-all duration-200

				hover:bg-indigo-600
				active:scale-95
				${className}
			`} 
				
			{...rest}
			>
				{children}
		</button>
	)
}