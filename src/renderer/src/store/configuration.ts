import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  configurationFactory,
  IConfiguration,
  IGroup,
  ILocale,
  ITextConfig,
  ITextVariant
} from '@shared/model/configuration'

const initialState: IConfiguration = configurationFactory(true)

// Create the slice
const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    addTextConfig: (state, action: PayloadAction<ITextConfig>) => {
      state.textConfigs.push(action.payload)
    },
    setTextVariants: (state, action: PayloadAction<ITextVariant[]>) => {
      state.textVariants = action.payload
    },
    addGroup: (state, action: PayloadAction<IGroup>) => {
      state.groups.push(action.payload)
    },
    addLocale: (state, action: PayloadAction<ILocale>) => {
      state.locales.push(action.payload)
    },
    newConfiguration: (state, action: PayloadAction<IConfiguration>) => {
      state = action.payload
    }
  }
})

export const checkTextVariants = (variants: ITextVariant[]): void => {
  const count = variants.filter((variant) => variant.default).length;
  if (count === 0) {
    throw new Error('At least one variant must be default');
  } else if (count > 1) {
    throw new Error('Only one variant can be default');
  }

  const ids = variants.map((variant) => variant.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    throw new Error('Variant ids must be unique');
  }
}
// Export the actions and reducer
export const { addTextConfig, setTextVariants, addGroup, addLocale, newConfiguration } =
  configurationSlice.actions

export default configurationSlice.reducer
