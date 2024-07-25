export default function getResponseFromAPI() {
  const Done = true;
  return new Promise((accepted, rejected) => {
    if (Done) {
      accepted();
    } else {
      rejected();
    }
  });
}
