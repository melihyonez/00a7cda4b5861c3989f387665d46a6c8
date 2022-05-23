import { all } from 'redux-saga/effects';

import { initWatcher } from './init';

export default function* rootSaga() {
  yield all([
    initWatcher(),
  ]);
}
