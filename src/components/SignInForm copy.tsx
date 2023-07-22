import { useRef, useState } from 'react';
import {
	signInIdValidatoer,
	signInNameValidatoer,
	singInSubmitValidatoer,
} from '../utils/signin-validator';
import Input from './Input';
import Button from './Button';

function SignInForm() {
	const idRef = useRef<HTMLInputElement | null>(null);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const [idError, setIdError] = useState<IdErrorProps>('init');
	const [nameError, setNameError] = useState<NameErrorProps>('init');
	const [submitError, setSubmitError] = useState<SubmitErrorProps>('init');

	console.count();

	const handleChangeId = (value: string) => {
		console.log('handleChangeId', value);
		idRef.current = value;
		const validateRes = signInIdValidatoer(value);
		setIdError(validateRes.type);
	};

	const handleChangeName = (value: string) => {
		console.log('handleChangeName', value);
		const validateRes = signInNameValidatoer(value);
		setNameError(validateRes.type);
	};

	const handleClickSubmit = () => {
		console.log('handleClickSubmit');
		// const values: { id: string; name: string } = {
		// 	id: idRef.current || '',
		// 	name: nameRef.current,
		// };
		// const validateRes = singInSubmitValidatoer(values);
		// if (validateRes.success) {
		// 	// someApi(values)
		// 	id.current = '';
		// 	name.current = '';
		// 	setSubmitError(validateRes.type);
		// 	return;
		// }
		// setSubmitError(validateRes.type);
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-violet-800 w-2/3 h-2/4 rounded-md p-4 flex flex-col">
				<div className="text-white text-3xl flex flex-col items-center">
					로그인
				</div>
				<section>
					<span className="text-white">아이디: </span>
					<Input
						ref={idRef}
						onChange={handleChangeId}
					/>
					{idError === 'length' && (
						<span className="text-red-600">아이디는 최소 3글자 입니다.</span>
					)}
				</section>
				<section>
					<span className="text-white">이름: </span>
					<Input
						ref={nameRef}
						onChange={handleChangeName}
					/>
					{nameError === 'length' && (
						<span className="text-red-300">이름은 최소 3글자 입니다.</span>
					)}
				</section>
				{submitError === 'empty' && (
					<span className="text-red-600">값이 비어 있습니다.</span>
				)}
				{submitError === 'id' && (
					<span className="text-red-600">아이디를 확인해주세요.</span>
				)}
				{submitError === 'name' && (
					<span className="text-red-300">이름을 확인해주세요.</span>
				)}
				<Button onClick={handleClickSubmit}>저장</Button>
			</div>
		</div>
	);
}

export default SignInForm;
