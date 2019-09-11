import { take, put, call, race, delay} from 'redux-saga/effects';
import {
  GET_JOKE,
  GET_JOKE_FAILED,
  GET_JOKE_SUCCESS,
  START_POLL,
  STOP_POLL
} from './actions'

import { getJokeService } from './api'

function* getJokeWorker(){
  while(true){
    try{
      yield put({
        type: GET_JOKE
      })
      const joke = yield call(getJokeService);
      yield put({
        type: GET_JOKE_SUCCESS,
        payload:{
          joke
        }
      });
      yield delay(10000);
    }catch(err){
      put({
        type: GET_JOKE_FAILED
      })
    }
  }
}

export default function* rootSaga(){
  while(true){
    yield take(START_POLL);
    yield race([call(getJokeWorker), take(STOP_POLL)])
  }
}