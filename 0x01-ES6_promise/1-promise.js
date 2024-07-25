export default function (boolean) {
  return new Promise((accepted, rejected) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      accepted(object);
    } else {
      rejected(Error('The fake API is not working currently'));
    }
  });
}
