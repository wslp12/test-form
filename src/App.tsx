import SignInForm from './components/SignInForm';
import SignInForm2 from './components/SignInForm2';
import SignInProvider from './context/signInProvider';

function App() {
	console.count();

	return (
		<SignInProvider>
			<div>
				{/* <SignInForm /> */}
				<SignInForm2 />
			</div>
		</SignInProvider>
	);
}

export default App;
