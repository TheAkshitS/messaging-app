import { currentUser, conversation } from './mock-data';

export function mockFetch(time = 500, dataType) {
  if (dataType === 'currentUser') {
    dataType = currentUser;
  } else if (dataType === 'conversation') {
    dataType = conversation;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataType);
    }, time);
  });
}
