export default function getStudentIdsSum(students) {
  const idTotal = students.reduce(
    (data, val) => data + val.id, 0,
  );
  return idTotal;
};
