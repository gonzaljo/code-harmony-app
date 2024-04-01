import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { codeHarmonyFactory, ICodeHarmony } from '@shared/model/application'
import { configurationFactory } from '@shared/model/configuration'

const initialState: ICodeHarmony = codeHarmonyFactory(undefined, configurationFactory(false))

// Create the slice
const configurationSlice = createSlice({
  name: 'filehandler',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<ICodeHarmony>) => {
      return action.payload
    }
  }
})

// Export the actions and reducer
export const { save } = configurationSlice.actions

export default configurationSlice.reducer
