import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classarr = [];

  for (const size of sizes) {
    classarr.push(new ClassRoom(size));
  }
  return classarr;
}
