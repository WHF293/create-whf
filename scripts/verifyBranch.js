// @ts-check
import { readFileSync } from 'fs'
import path from 'path'


const branchRE = /^(main|dev){1}$|^(feature|hotfix|release)\/.+$/

const headPath = path.resolve('.git/HEAD')
const branchName = readFileSync(headPath, 'utf-8').trim().replace('ref: refs/heads/', '')


if (!branchRE.test(branchName)) {
    console.log();
    console.log(
        `当前分支命名不规范，无法推送分支，请修改后在提交\n\n` + 
        `分支命名规范如下： \n` + 
        `  -  feature/xxxxx\n` +
        `  -  fix/xxxx\n` +
        `具体匹配规则如下：  ^(main|dev){1}$|^(feature|hotfix|release)\/.+$`
    );
    process.exit(1)
}