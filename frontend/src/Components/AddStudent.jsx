import React,{useState,useEffect} from 'react'

/**
 * 
 * @param {props.trigger} true or false
 *  post request 
 * @returns a form to create another student 
 */
const AddStudent = (props) => {
  const [content,setContent] = useState('')
  const url = 'http://localhost:8000/student/'
  const handleSubmit = () => {
    const blog = {
        name: content,
        completed: false
    }
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>{
    })
  }
  return (props.trigger) ? (
    <div>
      Create a New To-Do
      <form onSubmit = {handleSubmit}>
        <input onChange = {(e) => setContent(e.target.value)} type="text"  name = 'title' />
        <br />
        <button type="submit" id className='btn btn-primary'>Submit</button>
      </form>
    </div>
  ) : ''
}
export default AddStudent

