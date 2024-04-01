import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  configurationFactory,
  IConfiguration,
  IGroup,
  ILocale,
  ITextConfig,
  ITextVariant
} from '@shared/model/configuration'

const initialState: IConfiguration = configurationFactory(false)

// Create the slice
const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    addTextConfig: (state, action: PayloadAction<ITextConfig>) => {
      state.textConfigs.push(action.payload)
    },
    addTextVariant: (state, action: PayloadAction<ITextVariant>) => {
      state.textVariants.push(action.payload)
    },
    addGroup: (state, action: PayloadAction<IGroup>) => {
      state.groups.push(action.payload)
    },
    addLocale: (state, action: PayloadAction<ILocale>) => {
      state.locales.push(action.payload)
    },
    newConfiguration: (state, action: PayloadAction<IConfiguration>) => {
      return action.payload
    }
  }
})

// Export the actions and reducer
export const { addTextConfig, addTextVariant, addGroup, addLocale, newConfiguration } =
  configurationSlice.actions

export default configurationSlice.reducer
