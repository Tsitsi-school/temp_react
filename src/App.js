import './App.css';
import {
  sampleFunctionOne,
  sampleFunctionTwo,
  sampleFunctionThree,
  sampleFunctionFour,
  sampleFunctionFive,
} from './util'
import {
  students,
  numbers, 
  data
} from './constants'

function App() {
  return (
    <div>
      <p>
        <b>1. Results of function one:</b> {sampleFunctionOne(students)}
      </p>
      <p>
        <b>2. Results of function two:</b> {sampleFunctionTwo(numbers) }
      </p>
      <p>
        <b>3. Results of function three:</b> {sampleFunctionThree(numbers)}
      </p>
      <p>
        <b>5a. Sum of teachers ages:</b> {sampleFunctionThree(data.map(teacher => teacher.teacherAge))}
      </p>
      <p>
        <b>5b. Sum of active teachers ages:</b> {sampleFunctionFour(data)}
      </p>
      <p>
        <b>5c. Sorted list of students: </b> {sampleFunctionFive(data).join(", ")}
      </p>
      

    </div>
  );
}

export default App;
