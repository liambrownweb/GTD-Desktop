const yaml = require('js-yaml');
const {FileManager} = require('./file_manager.js');

const config_dir = "~/.config/GTD-Desktop";
const config_file = "settings.yml";
const config_file_full_path = path.join(config_dir, config_file);

class SettingsManager {
	constructor () {
		this.config_data = {};
	}

	load () {
		let config_file_text = "",
			config_data = {},
			result = false;
		FileManager.makeDirIfNotExists(config_dir);
		FileManager.touchFileIfNotExists(config_file_full_path);
		config_file_text = FileManager.loadFile(config_file_full_path);
		this.config_data = this.parseConfig(config_file_text);
		result = true;
		return result
	}

	set (key = "", value = "") {
		let result = 0;
		if ("" == key || "" == value) {
			result = 0
		} else {
			this.config_data[key] = value;
			result = value;
		}
		return result;
	}

	get (key = "") {
		let result = null;
		if ("" == key) {
		} else {
			result = this.config_data[key];
		}
		return result;
	}
}
