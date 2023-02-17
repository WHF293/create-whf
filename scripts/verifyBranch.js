// @ts-check
import { readFileSync } from 'fs'
import path from 'path'


const branchRE = /^(main|dev){1}$|^(feature|fix)\/.{2,10}\/.+$/

const headPath = path.resolve('.git/HEAD')
const branchName = readFileSync(headPath, 'utf-8').trim().replace('ref: refs/heads/', '')

if (!branchRE.test(branchName)) {
    console.error(
        `\n当前分支 ${branchName} 命名不规范，无法推送分支，请修改后再提交\n\n` +
        `分支命名规范： \n` +
        `  -  feature/xxxxx\n` +
        `  -  fix/xxxx\n` +
        `\n具体规范： ${branchRE}`
    );
    process.exit(1)
}