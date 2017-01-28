import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

Object.defineProperty(exports, "__esModule", {
	value: true
});

class Header extends React.Component {
	constructor () {
		super();
	}
	handleClose(event) {
		ipcRenderer.send('exitApp');
	}
	render () {
		var headers_list = [],
			headers_block = [];
		this.state = {
			title: this.props.title,
			headers: this.props.headers || []
		};
		headers_block = this.state.headers.map((item) => 
				<NavPopover style={{height: "100%"}} key={item.id} id={item.id} type={item.type} label={item.title} className="app_header_menu">
				</NavPopover>
		);
		this.type = this.props.type; 
		return (
				<AppBar	title={this.state.title} style={{"WebkitAppRegion": "drag", "paddingRight": "10px"}}
					titleStyle={{display: "inline-block", width: "50%", "textTransform": "uppercase"}}
					showMenuIconButton={false}
					children={<div className="header_dropdowns" style={{display:"flex", alignItems:"center", "WebkitAppRegion": "no-drag"}}>
					{headers_block}
					<IconButton><NavigationClose color="white" onClick={this.handleClose} /></IconButton></div>}>
				</AppBar>
			   );
	}
}  
module.header = null;
module.exports = {
	"Header": Header,
	"create": function (parent_element, title, headers) {
		module.header = ReactDOM.render(<Header title={title} headers={headers} />, parent_element);
	},
	"update": function (key, value) {
		if (module.header.state.hasOwnProperty(key)) {
			module.header.state[key] = value;
			module.header.forceUpdate();	
		}
	},
	"get": function () {
		return module.header;
	}	
};
exports.default = Header;
export default Header;;
