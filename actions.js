export const GET_JOKE = 'GET_JOKE/request';
export const GET_JOKE_SUCCESS = 'GET_JOKE/success';
export const GET_JOKE_FAILED = 'GET_JOKE/failed';

export const START_POLL = 'POLL/start';
export const STOP_POLL = 'POLL/stop';

export const getJoke = () => {
  return {
    type: GET_JOKE
  }
}

export const startPoll = () => {
  return {
    type: START_POLL
  }
}

export const stopPoll = () => {
  return {
    type: STOP_POLL
  }
}