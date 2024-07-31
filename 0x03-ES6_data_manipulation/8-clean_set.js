export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    throw new Error('Invalid startString');
  }

  let bilan = '';
  let hasMatch = false;

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      hasMatch = true;
      if (bilan.length > 0) {
        bilan += '-';
      }
      bilan += value.slice(startString.length);
    }
  });

  if (!hasMatch) {
    throw new Error('No matching values found');
  }

  return bilan;
}
 