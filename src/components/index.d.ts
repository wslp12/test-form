type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
};

type InputProps = {
	/**
	 * default: text
	 */
	type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
	value: string;
	onChange: (e: any) => void;
};
