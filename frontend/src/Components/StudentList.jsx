import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddStudent from './AddStudent'
import GradeList from './GradeList'
import DeleteStudent from './DeleteStudent'

// TODO: add change student name button
const StudentList = () => {
  const [studentList,getStudents] = useState([])
  const [createStudent,triggerCreateStudent] = useState(false)

  useEffect(()=>{
      axios.get('http://localhost:8000/student/')
        .then(response=>{
          getStudents(response.data)
        })

    },[])
    
    function studentListUI(item){
        return(
          <>
      <div className='row'>
        <div className='col-6'>
          <DeleteStudent student_id = {item.id}/>
          <br />
          <br />
          <div className='student-name'>{item.name}</div>     
        </div> 

        <div className='col'>
          <GradeList student_id = {item.id}/>

          </div>
        <hr />
        </div>
          </>
        )
      }
    

    return (
      <div className='container'>       
          {studentList.map(studentListUI)}
          <br />
          <br />
          
          <button className='btn btn-primary' onClick = {()=>triggerCreateStudent(true)}>New Student</button>
          <br />
          
          {/* this only happens after the click because it makes it true on click(triggerCreateStudent) */}
        <div className='row'>
          <AddStudent trigger = {createStudent}/>
          </div>
        
        </div>


  )
}

export default StudentList


