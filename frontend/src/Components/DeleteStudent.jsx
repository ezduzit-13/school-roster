import React from 'react'
import axios from 'axios'
const DeleteStudent = (props) => {
  function handleSubmit(e){
    axios.delete('http://localhost:8000/student/' + props.student_id + '/').then(()=>console.log('deleted'))
    window.location.reload(false)

  }
  return (
    <>
      <button onClick={handleSubmit} className='btn btn-danger'>Delete</button>
    </>
  )
}

export default DeleteStudent

