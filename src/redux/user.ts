import produce from 'immer';
import { Reducer } from 'redux';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

export interface UserState {
  userInfo: any;
}

const initialState = {} as UserState;

export const reducer: Reducer<UserState> = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.userInfo = action.data.user;
        break;
      }
      case LOG_IN_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
