export type TTranslateFunc = (key: string, obj?: Record<string, unknown>) => string

export type TTranslationProps = {
  useTranslationFunc: (ns: string) => {
    t: TTranslateFunc
    i18n: {
      language: string
    }
  }
  children: React.ReactNode
  namespace?: string
  translateFunctionName?: string
}

export type TTranslationContext = {
  t: (key: string, obj?: Record<string, unknown>) => string
}
