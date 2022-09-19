import { call, put, takeLatest, select,delay } from 'redux-saga/effects'
import { getCoinsSuccess, selectlength } from '../slices/coinState';

function* async_getCoinsFetch() {
    while (false) {
        yield delay(1000)
        const length = yield select(selectlength)
        const coins = yield call(() => fetch(`https://api.coincap.io/v2/assets?limit=${length}`));
        const formattedCoins = yield coins.json();
        yield put(getCoinsSuccess(formattedCoins))

    }

}
function* coinSaga() {
    yield takeLatest('coins/getCoinsFetch', async_getCoinsFetch);
}
export default coinSaga;