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

export const getFormattedCurrentTime = () => {
  const now = new Date();
  const formattedTime = now.toISOString().slice(0, 19).replace('T', ' ');

  return String(formattedTime);
};
