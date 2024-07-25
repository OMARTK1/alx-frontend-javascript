import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((valor) => {
      console.log(`${valor[0].body} ${valor[1].firstName} ${valor[1].lastName}`);
    })

    .catch(() => console.log('Signup system offline'));
}
