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
    const version = answers.version.split(' ')[0];
    const versionShell = 'npm version' + ' ' + version;

    if (shell.exec(versionShell) !== 0) {
      shell.echo('Error: 请先提交之前所有的修改!');
      shell.exit(1);
    }

    shell.exec('git push --tags');
    shell.exec('npm publish --access=public');
  });
