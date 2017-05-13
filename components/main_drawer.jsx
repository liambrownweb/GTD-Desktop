import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

Object.defineProperty(exports, "__esModule", {
	value: true
});
class MainDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
	this.handleItemClick = this.handleItemClick.bind(this);
	this.handleToggle = this.handleToggle.bind(this);
  }

  handleItemClick (event) {
	  let target = event.currentTarget,
		  id = target.id;
	  this.handleToggle();
	  console.log(id);
  }

  handleToggle () {
	  this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <Drawer className="drawer" open={this.state.open}>
          <MenuItem onClick={this.handleItemClick} id="settings">Settings</MenuItem>
        </Drawer>
      </div>
    );
  }
}

exports.default = MainDrawer;
module.exports = {
	"MainDrawer": MainDrawer
};
