const safeWriteFile = require('safe-write-file'),
    ora = require('ora'),
    chalk = require('chalk'),
    // fs = require('fs');

    conf = require('../config/conf'),
    // util = require('./util.js'),
    argv = require('minimist')(process.argv.slice(2));

let createType = argv.type,
    createName = '',
    pageTitle = '',
    prefixPath = '',
    creatorName = process.env.USER,
    isAddPage = createType == 'page';

if (typeof argv.name == 'string') {
    createName = pageTitle = argv.name;
    if (/\//.test(argv.name)) {
        // 包含路径
        let indexof = argv.name.lastIndexOf('/') + 1;
        prefixPath = argv.name.substring(0, indexof);
        createName = pageTitle = argv.name.substring(indexof);
    }
}

if (isAddPage && typeof argv.title == 'string') {
    pageTitle = argv.title;
}

if (typeof argv.creator == 'string') {
    creatorName = argv.creator
}

if (createName.length <= 0) {
    console.log(chalk.red(`  ${createType} name is not defined!\n`))
    return;
}

var spinner = ora(`createing ${createType}...`);
spinner.start();

var fullPath = `${conf.path.src}/${createType}s/${prefixPath}${createName}/${createName}`
wxapp = {
    wxml: '<view></view>',
    scss: '',
    json: isAddPage ? `{\n\t"navigationBarTitleText": "${pageTitle}"\n}` : `{\n\t"component": true,\n\t"usingComponents": {}\n}`,
    js: isAddPage ? getPageJS() : getComponentJS()
};

Object.keys(wxapp).forEach((key) => {
    safeWriteFile(`${fullPath}.${key}`, wxapp[key], handleWriteFile);
})

spinner.stop();
console.log(chalk.green(`  created ${createType}:/${createType}s${prefixPath}${createName}/${createName}\n  by ${creatorName}`))

function handleWriteFile(err) {
    if (err) throw err;
}

function getComponentJS() {
    return `/**
 * ${createName}
 * Created by ${creatorName}
 * ${nowTime()}
 * @prop ...
 */
Component({
    properties: {},
    data: {},
    attached: function() {},
    detached: function() {},
    methods: {}
})`;
}

function getPageJS() {
    return `/**
 * ${pageTitle}
 * Created by ${creatorName} 
 * ${nowTime()}
 * @options ...
 */
Page({
    data: {},
    /**
     * 与页面渲染无关的本页公用变量
     */
    customData: {},
    onLoad: function () {}
})`;
}

function nowTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return `${year}-${month}-${strDate}`;
}