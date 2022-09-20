import { call, put, takeLatest, select,delay } from 'redux-saga/effects'
import { getCoinsSuccess, selectlength } from '../slices/coinState';

function* async_getCoinsFetch() {
    while (true) {
        
        const length = yield select(selectlength)
        const coins = yield call(() => fetch(`https://api.coincap.io/v2/assets?limit=${length}`));
        const formattedCoins = yield coins.json();
        yield put(getCoinsSuccess(formattedCoins.data))
        yield delay(2000)

    }

}
function* coinSaga() {
    yield takeLatest('coins/getCoinsFetch', async_getCoinsFetch);
}
export default coinSaga;