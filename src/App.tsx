import SignInForm from './components/SignInForm';
import TestCompo from './components/TestCompo';
import SignInProvider from './context/signInProvider';

function App() {
	console.count();

	return (
		<SignInProvider>
			<div>
				<SignInForm />
				{/* <TestCompo /> */}
			</div>
		</SignInProvider>
	);
}

export default App;
