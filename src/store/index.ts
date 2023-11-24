import { player } from '../features/player'

import {
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
  ThunkAction,
} from '@reduxjs/toolkit'

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  player,
})

export type RootState = ReturnType<typeof rootReducer>

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
