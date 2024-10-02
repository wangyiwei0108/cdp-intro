import { createI18n } from 'vue-i18n'
import zhTwLocale from './zhTw/index'
import enLocale from './en/index'

const i18n = createI18n({
  legacy: false,
  locale: 'zhTw',
  fallbackLocale: 'zhTw',
  globalInjection: true,
  messages: {
    zhTw: { ...zhTwLocale },
    en: { ...enLocale }
  },
  numberFormats: {
    zhTw: {
      decimal: {
        style: 'decimal',
        notation: 'compact',
        useGrouping: true
      }
    }
  }
})

export default i18n
