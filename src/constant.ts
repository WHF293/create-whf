/*
 * @Author: hfWang
 * @Date: 2023-02-09 19:14:48
 * @LastEditTime: 2023-02-09 21:56:11
 * @Description: file content
 * @FilePath: \create-whf\src\constant.ts
 */
import { blue, yellow } from "kolorist"
import { IFrameWorks } from "./types"

/**
 * @desc 框架模板选择
 */
export const framework = [
	{
		value: 'vue',
		title: 'vue3 + ts',
		ui: [
			{ value: 'simple', title: yellow('简单模板') },
			{ value: 'complete', title: blue('完整模板') },
		]
	},
	{
		value: 'react',
		title: 'react18 + ts',
		ui: [
			{ value: 'simple', title: yellow('简单模板') },
			{ value: 'complete', title: blue('完整模板') },
		]
	},
] as IFrameWorks[]

/**
 * @desc 模板里需要重写名字的文件名
 */
export const renameFiles = {
	_gitignore: '.gitignore',
} as Record<string, string>