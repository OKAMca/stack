import type { ReactNode, Ref, RefObject } from 'react'
import { useHiddenSelect } from 'react-aria'
import type { HiddenSelectProps } from 'react-aria'

function HiddenSelect<T>(props: HiddenSelectProps<T> & { selectRef: Ref<HTMLSelectElement> }): ReactNode | null {
  const { state, triggerRef, label, name, isDisabled, selectRef } = props
  const { containerProps, selectProps } = useHiddenSelect(
    { ...props, selectRef: selectRef as RefObject<HTMLSelectElement> },
    state,
    triggerRef,
  )

  if (state.collection.size <= 300) {
    return (
      <div {...containerProps} data-testid="hidden-select-container">
        <label htmlFor={`hidden-select-${name || ''}`}>
          {label}
          <select {...selectProps} id={`hidden-select-${name || ''}`} ref={selectRef}>
            <option />
            {[...state.collection.getKeys()].map((key) => {
              const item = state.collection.getItem(key)
              if (item && item.type === 'item') {
                return (
                  <option key={item.key} value={item.key}>
                    {item.textValue}
                  </option>
                )
              }
              return null
            })}
          </select>
        </label>
      </div>
    )
  }
  if (name) {
    return (
      <input
        type="hidden"
        autoComplete={selectProps.autoComplete}
        name={name}
        disabled={isDisabled}
        value={state.selectedKey ?? ''}
      />
    )
  }

  return null
}

export default HiddenSelect
