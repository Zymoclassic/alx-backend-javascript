export default function getListStudentsIds(myArray) {
  if(!Array.isArray(myArray)) {
    return [];
  } else {
    return myArray.map((studentId)=> studentId.id);
  }
};
