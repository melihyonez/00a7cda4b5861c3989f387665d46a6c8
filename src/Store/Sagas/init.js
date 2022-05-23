import {
  call,
  take,
  put,
} from 'redux-saga/effects';
// import { request } from '../../Commons/utils';

import * as constants from '../constants';

// import {
//   INIT_URL,
// } from '../../Commons/urls';
import { setAppConfig } from '../Actions/actions';

// import * as notificationActions from '../Actions/Notification';

function* init() {
  yield put(setAppConfig('isLoading', true));
  const result = yield call(fetch, 'INIT_URL', 'GET', false, true);
  if (result.status) {
    // yield put({
    //   type: constants.GET_INIT,
    //   data: result.data,
    // });
    if (result.data?.userInfo?.language) {
      localStorage.setItem('language', result.data.userInfo.language);
    }
    yield put(setInit(result.data?.initData));
    yield put(setActiveUser(result.data?.userInfo));
    yield put(setAppConfig('isLoading', false));
  } else {
    yield put(setAppConfig('isLoading', false));
    // yield put(notificationActions.setShowToast(true, result.message || 'Giriş başarısız.', 'error'));
  }
}

export function* initWatcher() {
  while (true) {
    yield take(constants.GET_INIT);
    yield call(init);
  }
}
