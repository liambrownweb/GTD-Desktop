import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

Object.defineProperty(exports, "__esModule", {
	value: true
});
class MainDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
  }

  handleToggle () {
	  this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <Drawer className="drawer" open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

exports.default = MainDrawer;
module.exports = {
	"MainDrawer": MainDrawer
};
