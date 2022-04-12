import React,{useEffect,useState} from 'react'
import axios from 'axios'

const OptionCourses = (props) => {
  
  return (
    <>
      {props.courseList.map((item)=>{
        return(
          <option value = {item.id}>{item.course_name}: {item.id}</option>
        )
      })}

    </>
  )
}

export default OptionCourses