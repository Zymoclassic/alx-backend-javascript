export default function getStudentsByLocation(students, city) {
  const arrObj = students.filter((data) => data.location === city);
  return arrObj;
};
