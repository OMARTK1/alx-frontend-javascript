export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, kimat] of map.entries()) {
    if (kimat === 1) {
      map.set(key, 100);
    }
  }
}
