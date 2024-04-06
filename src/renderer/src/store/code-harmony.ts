import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CodeHarmonyState = {
  path: string | undefined
}

const initialState: CodeHarmonyState = {
  path: undefined
}

// Create the slice
const configurationSlice = createSlice({
  name: 'codeHarmony',
  initialState,
  reducers: {
    setCodeHarmonyState: (state, action: PayloadAction<CodeHarmonyState>) => {
      state.path = action.payload.path
    }
  }
})

// Export the actions and reducer
export const { setCodeHarmonyState } = configurationSlice.actions

export default configurationSlice.reducer
