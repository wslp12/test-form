/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Button from './Button';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
	id: string;
	name: string;
};

function SignInForm2() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	console.count();

	const onSubmit: SubmitHandler<FormValues> = (data: any) => console.log(data);

	return (
		<form
			className="flex justify-center items-center h-full"
			onSubmit={() => handleSubmit(onSubmit)}>
			<div className="bg-violet-800 w-2/3 h-2/4 rounded-md p-4 flex flex-col">
				<div className="text-white text-3xl flex flex-col items-center">
					로그인
				</div>
				<section>
					<span className="text-white">아이디: </span>
					<input
						type="text"
						{...register('id', {
							required: true,
							minLength: {
								value: 3,
								message: '아이디는 최소 3글자 이상입니다.',
							},
						})}
					/>
					{errors.id && (
						<span className="text-red-600">{`${errors.id.message}`}</span>
					)}
				</section>
				<section>
					<span className="text-white">이름: </span>
					<input
						type="text"
						{...register('name', {
							required: true,
							minLength: {
								value: 3,
								message: '이름은 최소 3글자 이상입니다.',
							},
						})}
					/>

					{errors.name && (
						<span className="text-red-300">{`${errors.name.message}`}</span>
					)}
				</section>
				{/* {submitError === 'empty' && (
					<span className="text-red-600">값이 비어 있습니다.</span>
				)}
				{submitError === 'id' && (
					<span className="text-red-600">아이디를 확인해주세요.</span>
				)}
				{submitError === 'name' && (
					<span className="text-red-300">이름을 확인해주세요.</span>
				)} */}
				<Button type="submit">저장</Button>
			</div>
		</form>
	);
}

export default SignInForm2;
