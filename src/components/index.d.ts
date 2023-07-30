type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'submit' | 'button' | 'reset';
};

type InputProps = {
	/**
	 * default: text
	 */
	type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
	value: string;
	onChange: (e: any) => void;
};
