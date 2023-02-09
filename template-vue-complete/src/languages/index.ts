import { createI18n } from 'vue-i18n'

import cn from './cn'
import en from './en'

const messages = {
    cn: { ...cn },
    en: { ...en }
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'cn',
    messages
})

export default i18n