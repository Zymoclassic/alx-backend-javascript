export default function updateStudentGradeByCity(students, city, newGrades) {
  if(!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const theStudents = students.filter((student) => student.location === 
  city).map((student) => {
    const findItem = newGrades.find((student2) => student.id === student2.id);
    return { ...student, grade: findItem ? findItem.grade: "N/A" };
  });
  return theStudents;
}
