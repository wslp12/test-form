/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
	MutableRefObject,
	createContext,
	useContext,
	useRef,
} from 'react';

interface SignInData {
	id: MutableRefObject<string> | null;
	name: MutableRefObject<string> | null;
}

interface SignInContextProps {
	signInId: SignInData['id'];
	signInName: SignInData['name'];
	handleChangeId: (value: string) => void;
	handleChangeName: (value: string) => void;
	initializeSignInData: () => void;
}

const SignInContext = createContext<SignInContextProps>({
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
	const signInId = useRef<string>('');
	const signInName = useRef<string>('');

	const handleChangeId = (value: string) => {
		signInId.current = value;
	};

	const handleChangeName = (value: string) => {
		signInName.current = value;
	};

	const initializeSignInData = () => {
		signInId.current = '';
		signInName.current = '';
	};

	return (
		<SignInContext.Provider
			value={{
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
