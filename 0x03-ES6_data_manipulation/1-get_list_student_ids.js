export default function getListStudentIds(list_ids) {
  if (!Array.isArray(list_ids)) {
    return [];
  }

  return list_ids.map((student) => (student.id));
}
