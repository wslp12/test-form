/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
	MutableRefObject,
	createContext,
	useContext,
	useRef,
	useState,
} from 'react';

interface SignInData {
	// id: string;
	// name: string;
	id: MutableRefObject<string> | null;
	name: MutableRefObject<string> | null;
}

interface SignInContextProps {
	// id: string;
	// name: string;
	// data: SignInData;
	signInId: SignInData['id'];
	signInName: SignInData['name'];
	handleChangeId: (value: string) => void;
	handleChangeName: (value: string) => void;
	initializeSignInData: () => void;
}

const SignInContext = createContext<SignInContextProps>({
	// id: '',
	// name: '',
	// data: { id: '', name: '' },
	signInId: null,
	signInName: null,
	handleChangeId: () => {},
	handleChangeName: () => {},
	initializeSignInData: () => {},
});

export const useSignIn = () => useContext(SignInContext);

interface SignInProviderProps {
	children: React.ReactNode;
}

const SignInProvider = ({ children }: SignInProviderProps) => {
	// const [id, setId] = useState('');
	// const [name, setName] = useState('');
	// const [data, setData] = useState<SignInData>({
	// 	id: '',
	// 	name: '',
	// });
	const signInId = useRef<string>('');
	const signInName = useRef<string>('');

	const handleChangeId = (value: string) => {
		signInId.current = value;
		// setData((prev) => ({ ...prev, id: value }));
		// setId(value);
	};

	const handleChangeName = (value: string) => {
		signInName.current = value;
		// setData((prev) => ({ ...prev, name: value }));
		// setName(value);
	};

	const initializeSignInData = () => {
		signInId.current = '';
		signInName.current = '';
		// setData({ id: '', name: '' });
		// setId('');
		// setName('');
	};

	return (
		<SignInContext.Provider
			value={{
				// id,
				// name,
				// data,
				signInId,
				signInName,
				handleChangeId,
				handleChangeName,
				initializeSignInData,
			}}>
			{children}
		</SignInContext.Provider>
	);
};

export default SignInProvider;
