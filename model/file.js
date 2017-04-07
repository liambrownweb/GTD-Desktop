const fs = require('fs');

class DataFile {
	constructor(data_file_name) {
		this.data_file_name_in = data_file_name;
		this.data = null;
		this.load();
	}

	getData() {
		return this.data;
	}

	load(callback = function(d){}) {
		var that = this;
		fs.readFile(this.data_file_name_in, "utf8", (err, data) => {
			if (err) {
				callback(err);
			} else {
				let res = that.parse(data);
				callback(res);
			}
		});
	}

	parse(file_data) {
		try {
			this.data = JSON.parse(file_data);
		} catch (err) {
			return err;
		}
		return 0;
	}

	save(data_file_name_out = null, callback = function(d){}) {
		var str_out = JSON.stringify(this.data, null, 2);
		if (!data_file_name_out) {
			data_file_name_out = this.data_file_name_in;
		}
		fs.writeFile(data_file_name_out, str_out, "utf8", (err) => {
			if (err) {
				callback(err);
			} else {
				callback(0);
			}
		});
	}
	
	setData(new_data) {
		this.data = new_data;
	}
}

module.exports = {
	"DataFile": DataFile
};
