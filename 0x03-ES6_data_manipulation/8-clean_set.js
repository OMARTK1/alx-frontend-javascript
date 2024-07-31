export default function cleanSet(set, startString) {
  const listo = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      listo.push(elem.slice(startString.length));
    }
  }

  return listo.join('-');
}
