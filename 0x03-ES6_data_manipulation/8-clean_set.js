export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let bilan = '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (bilan.length > 0) {
        bilan += '-';
      }
      bilan += value.slice(startString.length);
    }
  });

  return bilan;
}
