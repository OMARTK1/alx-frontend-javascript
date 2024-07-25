import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.all([userPromise, photoPromise]);

    const resultsArr = [
      { status: 'resolved', value: userResult },
      { status: 'resolved', value: photoResult },
    ];

    return resultsArr;
  } catch (error) {
    console.error('Error in handleProfileSignup:', error);
    throw error;
  }
}

export default handleProfileSignup;
