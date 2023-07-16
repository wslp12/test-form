import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
	const [values, setValues] = useState<{ id: string; name: string }>({
		id: '',
		name: '',
	});

	console.count();

	const handleChangeId = (value: string) => {
		console.log('handleChangeId');
		setValues((prev) => ({ ...prev, id: value }));
	};

	const handleChangeName = (value: string) => {
		console.log('handleChangeName');
		setValues((prev) => ({ ...prev, name: value }));
	};

	const handleClickSubmit = () => {
		console.log('handleClickSubmit', values.id, values.name);
		// someApi(values)
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
				</section>
				<section>
					<span className="text-white">이름: </span>
					<Input
						value={values.name}
						type="text"
						onChange={handleChangeName}
					/>
				</section>
				<Button onClick={handleClickSubmit}>저장</Button>
			</div>
		</div>
	);
}

export default App;
