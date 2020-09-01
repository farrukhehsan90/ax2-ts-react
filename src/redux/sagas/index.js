import { fork } from "redux-saga/effects";

import getData from "./getData";

export default function* rootSaga() {
  yield fork(getData);
}
