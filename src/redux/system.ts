import { Reducer } from 'redux';

const defaultState = {} as SystemState;

enum ActionTypes {
  BOOT = 'system/BOOT',
  SESSION = 'system/SESSION',
}

export const reducer: Reducer<SystemState> = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.BOOT:
      return {
        ...state,
        boot: true,
      };
    default:
      return state;
  }
};

export function boot() {
  return {
    type: ActionTypes.BOOT,
  };
}

export interface SystemState {
  boot: boolean;
  reHydrated: boolean;
}
