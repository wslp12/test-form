/* eslint-disable react-refresh/only-export-components */
import { useState, forwardRef, ChangeEvent, ForwardedRef } from 'react';

interface InputProps {
	type?: string;
	onChange?: (value: string) => void;
}

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement | null>) {
	const { type = 'text', onChange } = props;
	const [value, setValue] = useState('');

	console.count();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange?.(e.target.value);
	};

	return (
		<input
			type={type}
			className="border border-neutral-300"
			value={value}
			ref={ref}
			onChange={handleChange}
		/>
	);
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
