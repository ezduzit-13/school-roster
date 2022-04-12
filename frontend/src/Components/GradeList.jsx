import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddStudent from './AddStudent'
import GetCourse from './GetCourse'
import AddClassGrade from './AddClassGrade'


const GradeList = (props) => {
  const [studentList,getStudents] = useState([])
  const [trigger,setTrigger] = useState(false)


  useEffect(()=>{
    axios.get(`http://localhost:8000/classgrades/${props.student_id}/`)
      .then(response=>{
        getStudents(response.data)
      })
    axios.get('')

  },[])
  function makeList(item){
    return(
      <tr>
        <td>
          <GetCourse course_id = {item.course_profile} />
        </td>
        <td>
          Grade: {item.grade} 
        </td>
      </tr>
    )
  }



  return (
    <table >

      <tr>
        <th colSpan={'100%'}>Class List</th>
      </tr>
      {studentList.map(makeList)}
      <tr>
        <td colSpan={'100%'}>
          <button onClick = {()=>setTrigger(true)}>enroll in another course</button>
        </td>
      </tr>
      
      <br />
      <AddClassGrade 
      student_id = {props.student_id} 
      trigger = {trigger}
      />
    </table>
  )
}

export default GradeList



