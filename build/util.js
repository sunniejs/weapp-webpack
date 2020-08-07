const fs = require('fs');
const safeWriteFile = require('safe-write-file');
const boxen = require('boxen');
const color = require('ansicolors');

exports.isImage = function (ext) {
  return ['png','gif','jpg','jpeg'].indexOf(ext) >= 0;
}

exports.isWXMPFile = function (ext) {
  return ['json','wxss','js','wxml', 'wxs', 'scss'].indexOf(ext) >= 0;
}

exports.getFileExt = function (file) {
  return file.substring(file.lastIndexOf('.') + 1);
}

exports.isSemverVersion = function (v) {
  return v.split('.').length == 3;
}

exports.getFilename = function (file) {
  // windows下的路径斜杆为\,而mac系统的斜杆为/
  let indexChar = /\//.test(file) ? '/' : '\\';
  return file.substring(file.lastIndexOf(indexChar) + 1);
}

exports.getFileRelativePath = function (file) {
  let reg = new RegExp('.+[\\/]' + process.env.npm_package_name + '[\\/]src(.+)', 'g');
  return reg.exec(file)[1];
}

exports.readJsonFile = function (path) {
  try {
    return JSON.parse(fs.readFileSync(path).toString())
  } catch (e) {
    return {};
  }
}

exports.writeJsonFile = function (path, json) {
  safeWriteFile(path, JSON.stringify(json, null, 2), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

exports.releases = function () {
  let msg = `build ${color.green(process.env.NODE_ENV)} environment complete.\n`
    + `jxc version: ${color.green(process.env.WXMP_VERSION)}\n`
    + `\n`
    + `${color.cyan('Tip:')} now you can check your ${color.yellow('\'' + process.env.DEST_BASE_PATH + '\'')} directory`;
  console.log(boxen(msg, {
    borderColor: 'yellow',
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    float: 'left',
    align: 'center'
  }));
}
