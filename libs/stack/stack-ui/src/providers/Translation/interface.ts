export type TTranslateFunc = (_key: string, _obj?: Record<string, unknown>) => string

export interface TTranslationProps {
  useTranslationFunc: (_ns: string) => {
    t: TTranslateFunc
    i18n: {
      language: string
    }
  }
  children: React.ReactNode
  namespace?: string
  translateFunctionName?: string
}

export interface TTranslationContext {
  t: TTranslateFunc
}
