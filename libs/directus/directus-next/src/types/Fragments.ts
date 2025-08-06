export type Fragmentize<FragmentData, FragmentName extends string = string> =
  | {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ' $fragmentRefs'?:
        | {
            [FragmentKey in FragmentName]?: FragmentData | null | undefined
          }
        | null
        | undefined
    }
  | null
  | undefined
