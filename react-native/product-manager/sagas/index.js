import { productWatchers } from "./product";
import { storeWatchers } from "./store";
import { fork } from 'redux-saga/effects';

export default function* rootWatchers() {
    yield fork(productWatchers);
    yield fork(storeWatchers);
}