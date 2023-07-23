import SignInForm from './components/SignInForm';
import SignInProvider from './context/signInProvider';

function App() {
	console.count();

	return (
		<SignInProvider>
			<div>
				<SignInForm />
			</div>
		</SignInProvider>
	);
}

export default App;
