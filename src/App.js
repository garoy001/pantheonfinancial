import { Main } from './pages/main';
import './App.css';
import './normalize.css';
import { Helmet } from 'react-helmet';

function App() {
	const Demo = (props) => (
		<ScriptTag type="text/javascript" src="./utils/webflow.js" />
	);
	return (
		<div className="App">
			<Helmet>
				<script src="utils/webflow.js" type="text/javascript"></script>
				<script
					src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=624e03a6b2a23a681175c043"
					type="text/javascript"
					integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
					crossorigin="anonymous"
				></script>
			</Helmet>
			<Main />
		</div>
	);
}

export default App;
