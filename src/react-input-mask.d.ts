declare module 'react-input-mask' {
   import * as React from 'react'

   export interface Selection {
      start: number
      end: number
   }

   export interface InputState {
      value: string
      selection: Selection | null
   }

   export interface BeforeMaskedStateChangeStates {
      previousState: InputState
      currentState: InputState
      nextState: InputState
   }

   export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
      mask: string | Array<string | RegExp>
      maskChar?: string | null
      formatChars?: Record<string, string>
      alwaysShowMask?: boolean
      inputRef?: React.Ref<HTMLInputElement>
      beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState
      children?: (inputProps: React.InputHTMLAttributes<HTMLInputElement>) => React.ReactNode
   }

   export class ReactInputMask extends React.Component<Props> {}
   export default ReactInputMask
}
