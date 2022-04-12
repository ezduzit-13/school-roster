import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddStudent from './AddStudent'


const GetCourse = (props) => {
  const [studentList,getStudents] = useState('')


  useEffect(()=>{
    axios.get(`http://localhost:8000/course/${props.course_id}/`)
      .then(response=>{
        getStudents(response.data)
      })

  },[])
  return (
    <span>
      {' '+ studentList.course_name}
    </span>
  )
}

export default GetCourse

