import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((valors) => {
    const Array = [];
    for (const item of valors) {
      Array.push({ status: item.status, value: item.value || item.reason });
    }
    return Array;
  });
}
