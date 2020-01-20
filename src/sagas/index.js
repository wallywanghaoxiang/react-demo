import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(2000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* reduceAsync() {
  yield delay(2000)
  yield put({ type: 'REDUCE' })
}

export function* watchReduceAsync() {
  yield takeEvery('REDUCE_ASYNC', reduceAsync)
}