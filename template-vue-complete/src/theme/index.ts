import type { ThemeConf, ThemeType } from './types';
import defaultTheme from './theme-default';
import blueTheme from './theme-blue'

const themes: Record<ThemeType, ThemeConf> = {
    default: defaultTheme,
    blue: blueTheme
}

export default themes