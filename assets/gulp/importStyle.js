'use strict';
/*jshint node:true */
/**
 * Created by Evan.Jia on 14-11-28.
 */
var through = require('through2');
module.exports = function (option) {
	option = option || {};
	var lessIndex = null;
	var lessArray = [];

	function isExclude(file) {
		if (!option.exclude) {
			return false;
		}
		return option.exclude.test(file.relative);
	}

	return through.obj(
		function (file, enc, cb) {
			if (file.isNull()) {
				lessArray.push(file);
				return cb();
			}

			if (file.isStream()) {
				this.emit('error', new Error('import less', 'Streaming not supported'));
				return cb();
			}

			if (!lessIndex) {
				lessIndex = file;
				lessArray.push(file);
			}
			else if (!isExclude(file)) {
				var newPath = new Buffer(('\n@import \'' + file.relative + '\';').replace(/\\/g, '/'));
				lessIndex.contents = Buffer.concat([lessIndex.contents, newPath]);
			}
			cb();
		},
		function (cb) {
			for (var i = 0, length = lessArray.length; i < length; i++) {
				var lessFile = lessArray[i];
				this.push(lessFile);
			}
			cb();
		});
};