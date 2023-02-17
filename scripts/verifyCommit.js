// @ts-check
import { readFileSync } from 'fs'
import path from 'path'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()


/**
 * feat: 新功能
 * fix: bug 修复
 * docs：文档修改，例如 readme 等
 * style：代码格式化
 * refactor： 代码重构
 * pref： 性能优化
 * test： 添加、修改、删除测试代码
 * build： 修改构建工具或新增、删除、修改依赖包
 * chore：其他杂七杂八的
 * revert： 代码回滚
 */
const commitRE = /^(feat|fix|docs|style|refactor|perf|test|build|chore|revert)(\(.+\))?: .{1,50}/

// commit 信息校验不通过
if (!commitRE.test(msg)) {
    console.log()
    console.log(
        `当前 commit 信息：\n` +
        `  -  ${msg} \n\n` +
        `commit 格式不符合提交要求, 请按如下格式进行修改：\n` +
        `  -  feat(xxxx): 新增 xxx 功能\n` +
        `  -  fix(xxxx): 修复 xxx 问题\n` +
        `  -  docs: 修改了 xxx 文档\n\n` +
        `具体规范： ${commitRE}\n\n`
    )
    // 退出程序
    process.exit(1)
}
