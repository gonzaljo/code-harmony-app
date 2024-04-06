import { configureStore } from '@reduxjs/toolkit'
import configuration from './configuration'
import codeHarmony from './code-harmony'

const store = configureStore({
  reducer: {
    codeHarmony: codeHarmony,
    configuration: configuration
  }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
