export default function getListStudentIds(listIds) {
  if (!Array.isArray(listIds)) {
    return [];
  }

  return listIds.map((student) => (student.id));
}
