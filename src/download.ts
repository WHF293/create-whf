/*
 * @Author: hfWang
 * @Date: 2023-02-09 19:14:48
 * @LastEditTime: 2023-02-09 21:49:32
 * @Description: file content
 * @FilePath: \create-whf\src\download.ts
 */
import { red } from "kolorist"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from 'node:url'
import { renameFiles } from "./constant"
import { IProjectBaseInfo } from "./types"
import { copy, showSuccessTip } from './utils'

const cwd = process.cwd()
let root: string = ''
let targetTemplateDir: string = ''

/**
 * @desc 下载模板文件
 * @param source 用户输入的信息
 */
export const downloadTemplate = async (source: IProjectBaseInfo) => {
  const { projectName } = source

  // 新建项目的根目录地址
  root = path.join(cwd, projectName)

  // 判断新项目文件夹是不是 不存在，若已存在则报错
  if (fs.existsSync(root)) {
    console.log();
    console.log(red('<------------目标文件夹已存在，无法创建------------->'));
    console.log();
    return
  } else {
    // 将模板项目文件夹复制到本地
    copyTemplateFile(root, source)
    // 创建成功提示
    showSuccessTip(projectName)
  }
}

/**
 * @desc 生成/修改文件
 * @param file 目标文件名
 * @param content 需要修改的内容
 */
const write = (
  file: string,
  content?: string
) => {
  // 获取目标文件路径
  const destPath = path.join(root, renameFiles[file] ?? file)

  if (content) {
    // 改写模板文件内容，如 package.json
    fs.writeFileSync(destPath, content)
  } else {
    // 将目标模板的文件复制到新项目的文件夹里
    const srcPath = path.join(targetTemplateDir, file)
    copy(srcPath, destPath)
  }
}

/**
 * @desc 创建 package.json 文件
 * @param projectName 项目名
 */
const copyPkgFile = (projectName: string) => {
  try {
    const pkg = JSON.parse(
      fs.readFileSync(
        path.join(targetTemplateDir, `package.json`),
        'utf-8'
      )
    )
    // 更改 name 字段
    pkg.name = projectName
    // 重写 package.json, 并复制到新项目中
    write('package.json', JSON.stringify(pkg, null, 2))
  } catch (err) {
    console.log(red('创建 package.json 时出现异常'))
    return
  }
}

/**
 * @desc 创建除 package.json 外的全部文件
 * @param files 不需求修改内容的文件/文件夹名称
 */
const copyNoRewriteFiles = (files: string[]) => {
  try {
    // 遍历读取到的所有文件 / 文件夹，并将其复制到新建的项目中 (除 package.json)
    const noReWriteFiles = files.filter(file => file !== 'package.json')
    for (const file of noReWriteFiles) {
      write(file)
    }
  } catch (err) {
    console.log(red('创建模板文件时出现异常'))
  }
}

const copyTemplateFile = (root: string, source: IProjectBaseInfo) => {
  const { projectName, framework, frameworkType } = source
  if (!projectName || !framework || !frameworkType) {
    console.log(red('<----------用户手动终止项目创建-------->'));
    return
  } else {
    console.log();
    console.log(red('-------------------开始创建项目---------------------'));
    console.log();

    // 创建新项目文件夹
    // http://nodejs.cn/api/fs/fs_mkdirsync_path_options.html
    fs.mkdirSync(root, { recursive: true })

    // 要拷贝的项目模板名
    const targetTemplateProjectName = `template-${framework}-${frameworkType}`
    // 目标模板项目的具体路径
    targetTemplateDir = path.resolve(
      fileURLToPath(import.meta.url),
      "../..",
      targetTemplateProjectName
    )

    let files = []
    try {
      // 获取模板项目的文件
      files = fs.readdirSync(targetTemplateDir)
    } catch (err) {
      console.log(red('用户手动关闭，创建项目失败'));
      return
    }
    // 复制除 package.json 外的全部文件
    copyNoRewriteFiles(files)
    // 复制 package.json
    copyPkgFile(projectName)
  }
}