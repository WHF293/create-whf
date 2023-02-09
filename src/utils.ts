import fs from 'fs'
import { green } from 'kolorist'
import path from 'path'
import { framework } from './constant'


/**
 * @desc 判断目标文件夹中是否已经存在文件
 * @param path 目标文件夹地址 
 * @result boolean
 */
export const isEmpty = (path: string) => {
	// 同步读取目标文件夹
	const files = fs.readdirSync(path)
	return files.length === 0
}


/**
 * @desc 模板下载成功终端提示
 */
export const showSuccessTip = (projectName: string) => {
	console.log();
	console.log(green('---------------download done-----------------'))
	console.log();
	console.log('请进入新创建的项目根目录，并执行以下命令：');
	console.log();
	console.log(`cd ${projectName}`);
	console.log('pnpm install')
	console.log('pnpm dev')
	console.log();
}

/**
 * @desc 拷贝文件，将模板文件（夹）拷贝到新建的项目文件夹里
 * @param src 要复制的源文件名
 * @param dest 复制操作的目标文件名
 */
export const copy = (src: string, dest: string) => {
	// 获取文件信息， 包括 mtime，ctime （用于协商缓存）等属性方法
	// https://juejin.cn/post/6955011872298893319
	const stat = fs.statSync(src)

	if (stat.isDirectory()) {
		// 如果是文件夹的话，拷贝文件夹
		copyDir(src, dest)
	} else {
		// 文件的话直接拷贝
		// http://nodejs.cn/api-v14/fs/fs_copyfilesync_src_dest_mode.html
		try {
			console.log(green(`正在创建文件: ${dest}`));
			fs.copyFileSync(src, dest)
		} catch (err) {
			console.log(dest + ' 文件复制出错');
			throw new Error(err)
		}
	}
}

/**
 * @desc 拷贝文件夹
 * @param srcDir  要复制的源文件夹名
 * @param destDir  复制操作的目标文件夹名
 */
export const copyDir = (srcDir: string, destDir: string) => {
	// 在新项目的创建文件夹
	fs.mkdirSync(destDir, { recursive: true })

	// 读取模板项目里的目标文件夹，遍历所有文件，并将对应文件复制到新项目创建的文件夹里面去
	for (const file of fs.readdirSync(srcDir)) {
		const srcFile = path.resolve(srcDir, file)
		const destFile = path.resolve(destDir, file)
		console.log(srcFile);
		console.log(destFile);
		copy(srcFile, destFile)
	}
}


/**
 * @desc 获取框架列表
 */
export const getFrameworkList = () => {
	return framework.map(item => ({
		value: item.value,
		title: item.title
	}))
}

/**
 * @desc 获取对应框架的 UI 模板
 * @param type 框架类型 vue / react
 */
export const getFrameworkTypeList = (type) => {
	return framework.find(item => item.value === type)!.ui
}

export function to<T, U = Error>(fn: Promise<any>): Promise<[null, T] | [U, null]> {
	return fn.then<[null, T]>((res: T) => [null, res]).catch<[U, null]>((err: U) => [err, null])
}