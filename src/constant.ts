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
			{ value: 'simple', title: yellow('简易') },
			{ value: 'complete', title: blue('简易') },
		]
	},
	{
		value: 'react',
		title: 'react18 + ts',
		ui: [
			{ value: 'simple', title: yellow('简易') },
			{ value: 'complete', title: blue('简易') },
		]
	},
] as IFrameWorks[]

/**
 * @desc 模板里需要重写名字的文件名
 */
export const renameFiles = {
	_gitignore: '.gitignore',
} as Record<string, string>