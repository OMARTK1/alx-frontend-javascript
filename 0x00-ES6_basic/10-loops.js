export default function appendToEachArrayValue(array, appendString) {
  const NewArray = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    NewArray[idx] = appendString + value;
  }

  return array;
}
