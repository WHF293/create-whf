import { red, reset } from 'kolorist'
import prompts from 'prompts'
import { downloadTemplate } from './download'
import { IProjectBaseInfo } from './types'
import { getFrameworkList, getFrameworkTypeList } from './utils'

const createProject = async () => {
  const defaultProjectName = `whf-vite-project`

  try {
    const res = await prompts([
      {
        type: 'text',
        name: 'projectName',
        message: reset('请输入项目名称'),
        initial: defaultProjectName,
      },
      {
        type: 'select',
        name: 'framework',
        message: reset('请选择框架'),
        initial: 0,
        choices: getFrameworkList(),
      },
      {
        type: 'select',
        name: 'frameworkType',
        message: reset('请选择项目模板'),
        initial: 0,
        choices: (framework: string) => getFrameworkTypeList(framework),
      },
    ]) as IProjectBaseInfo
    downloadTemplate(res)
  } catch (err) {
    console.log(red('出错了.....'))
    return
  }
}

createProject()

