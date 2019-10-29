import { combineReducers } from 'redux';
import { reducer as persist, PersistState } from './persist';
import { reducer as system, SystemState } from './system';
import { reducer as user, UserState } from './user';

export const reducer = combineReducers<RootState>({
  persist,
  system,
  user,
});

export interface RootState {
  persist: PersistState;
  system: SystemState;
  user: UserState;
}
