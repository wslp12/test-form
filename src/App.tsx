import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';
import {
	signInIdValidatoer,
	signInNameValidatoer,
	singInSubmitValidatoer,
} from './utils/signin-validator';

function App() {
	const [values, setValues] = useState<{ id: string; name: string }>({
		id: '',
		name: '',
	});
	const [idError, setIdError] = useState<IdErrorProps>('init');
	const [nameError, setNameError] = useState<NameErrorProps>('init');
	const [submitError, setSubmitError] = useState<SubmitErrorProps>('init');

	console.count();

	const handleChangeId = (value: string) => {
		console.log('handleChangeId');
		setValues((prev) => ({ ...prev, id: value }));
		const validateRes = signInIdValidatoer(value);
		setIdError(validateRes.type);
	};

	const handleChangeName = (value: string) => {
		console.log('handleChangeName');
		setValues((prev) => ({ ...prev, name: value }));
		const validateRes = signInNameValidatoer(value);
		setNameError(validateRes.type);
	};

	const handleClickSubmit = () => {
		console.log('handleClickSubmit', values.id, values.name);
		const validateRes = singInSubmitValidatoer(values);
		if (validateRes.success) {
			// someApi(values)
			setValues({ id: '', name: '' });
			setSubmitError(validateRes.type);
			return;
		}
		setSubmitError(validateRes.type);
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
						value={values.id}
						onChange={handleChangeId}
					/>
					{idError === 'length' && (
						<span className="text-red-600">아이디는 최소 3글자 입니다.</span>
					)}
				</section>
				<section>
					<span className="text-white">이름: </span>
					<Input
						value={values.name}
						type="text"
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

export default App;
