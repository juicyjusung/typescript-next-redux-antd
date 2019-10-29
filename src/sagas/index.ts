import { all, fork } from 'redux-saga/effects';
import user from './user';

export const rootSaga = function* root() {
  yield all([fork(user)]);
};
