export type Fragmentize<FragmentData, FragmentName extends string = string>
  = | {

    ' $fragmentRefs'?:
      | {
        [FragmentKey in FragmentName]?: FragmentData | null | undefined
      }
      | null
      | undefined
  }
  | null
  | undefined
