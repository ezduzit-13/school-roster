import React,{useState,useEffect} from 'react'
import OptionCourses from './OptionCourses'
import axios from 'axios'
/**
 * 
 * @param {props.trigger} true or false
 *  post request 
 * TODO: set up the form so that it sends a post request to the api that creates a new course
 * 
 * @returns a form to create another student 
 */
const AddClassGrade = (props) => {
  const [courseList,getCourseList] = useState([])
  const [content,setContent] = useState('')
  
  const url = 'http://localhost:8000/classgrades/create'


  useEffect(()=>{
    axios.get('http://localhost:8000/course/')
        .then(response=>{
          getCourseList(response.data)
        })
},[])

  const handleSubmit = (e) => {

  const new_enrollment = {
      grade: 'C',
      student_profile : props.student_id,
      course_profile: e.target[0].value,
    }
    /**
      *TODO:  new_enrollment is sent to the api in ordere to create the new enrollment :)
     */
    console.log(e.target[0].value, 'this should be the course_profile')
    fetch('http://localhost:8000/enrollment/', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(new_enrollment)
    }).then(()=>{
      console.log('new enrollment')
    })
  }
  return (props.trigger) ? (
      <tr>
        <td>
        Choose a Class
        {/* 
        //Todo: give them the option to choose grade
        */}
        <form onSubmit = {handleSubmit}>
          <select name="class" id="">
            <OptionCourses courseList = {courseList}/>
          </select>
          <button type="submit" id className='btn btn-primary'>Submit</button>
        </form>
        </td>
      </tr>
    ) : ''
}
export default AddClassGrade

