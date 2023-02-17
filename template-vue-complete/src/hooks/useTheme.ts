import themes from "@/theme";
import type { LocalThemeType, ThemeType } from "@/theme/types";

const SYSTEM_KEY = 'sys-theme'

const useTheme = () => {
    const theme = ref<ThemeType>(
        (localStorage.getItem(SYSTEM_KEY) as LocalThemeType) || 'default'
    )

    const html = document.getElementsByTagName("html")[0] as HTMLHtmlElement

    const setTheme = (type: ThemeType) => {
        console.log('...........');
        Object.entries(themes[type]).forEach(([key, value]) => {
            html.style.setProperty(`--${key}`, value)
        })
        theme.value = type
        localStorage.setItem(SYSTEM_KEY, type)
    }

    setTheme(theme.value)

    return {
        theme,
        setTheme
    }
}

export default useTheme