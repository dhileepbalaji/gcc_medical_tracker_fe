import { call } from 'redux-saga/effects';
import history from '../utils/history';

export default function* routesSaga(action) {
    yield call(history.push, action.payload.path);
}