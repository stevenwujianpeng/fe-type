/**
 * 释放库的版本脚本
 * */
var shell = require('shelljs');
var inquirer = require('inquirer');
var questions = [{
  type: 'list',
  name: 'version',
  message: '请选择你想发布的版本类型?',
  choices: ['major (x.0.0)', 'minor (1.x.0)', 'patch (1.0.x)'],
}];

inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
    const version = answers.version.split(' ')[0];
    const versionShell = 'npm version' + ' ' + version;

    shell.exec(versionShell);
    shell.exec('git add .');
  });
