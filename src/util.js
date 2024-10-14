//util.js

export const sampleFunctionOne = (students) => { return students.filter(student => student.startsWith("M")) + " "}

export const sampleFunctionTwo = (numbers) => { return numbers.map(number => Math.sqrt(number)) + " "}

export const sampleFunctionThree = (numbers) => { return numbers.reduce((partialSum, a) => partialSum + a, 0)}

export const sampleFunctionFour = (data) => {
  const activityCheck = data
  .filter(teacher => teacher.active)
  .map(teacher => teacher.teacherAge);
  return sampleFunctionThree(activityCheck);
}

export const sampleFunctionFive = (data) => {
  const studentsInfo = data
  .flatMap( teacher => teacher.students.map(student => student.name));
  return studentsInfo.sort();
}
