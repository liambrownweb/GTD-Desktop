import darkBaseTheme from 'material-ui/styles/MuiThemeProvider';
const {getMuiTheme} = require('material-ui/styles');
const {Header} = require('./components/header.jsx');
window.sharedObject = {
		"theme": getMuiTheme(darkBaseTheme)
};
class App extends React.Component {
	render () {
		return (
			<MuiThemeProvider muiTheme={sharedObject.theme}>
				<div style={{"height": "100%", "display":"flex", "flexDirection": "column"}}>
					<Header title="SODA"/>
					<div id="main_window_container" style={{flex: "1 0 auto", position:"relative", width: "100%"}}>
						<div id="main_window" 
							style={{position: "absolute", height: "100%", width: "100%"}}>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	};
	getChildContext() {
		return {
			muiTheme: getMuiTheme(darkBaseTheme)
		};
	};
}
App.childContextTypes  = {
	muiTheme: React.PropTypes.object
};
ipcRenderer.on('globalReturn', (event, name, arg) => {
	if (name == "ERROR") {
		console.log(name + ": " +arg)
	} else {
		window.sharedObject[name] = arg;
	}
		if (name == "project_data") {
		initializeDisplay();
	}
});
ipcRenderer.send('getGlobal', 'project_data');
function initializeDisplay () {
	let main_element = null;
	ReactDOM.render(<App />, document.getElementById("app_container"));
	main_element = document.getElementById("app");
}
initializeDisplay();
