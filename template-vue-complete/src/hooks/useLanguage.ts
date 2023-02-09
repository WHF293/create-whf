import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

type ILanguage = 'cn' | 'en'

const useLanguages = () => {
    const { locale } = useI18n()
    const currentLanguage = ref<ILanguage>(localStorage.getItem('language') as ILanguage || 'cn')
    const toggleLanguage = () => {
        locale.value = currentLanguage.value === 'cn' ? 'en' : 'cn'
        currentLanguage.value = locale.value as ILanguage
        localStorage.setItem('language', locale.value)
    }
    return { currentLanguage, toggleLanguage }
}

export default useLanguages