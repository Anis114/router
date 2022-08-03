import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const AddToDo = () => {
const [input, setInput]=useState("")
const [list, setList]=useState([])
const [checked, setChecked]=useState(false)

const handleChange=(e)=>{
    setInput(e.target.value)
    console.log(input)
}

const handleAdd=(e)=>{
    e.preventDefault()
    setList([...list, {text:input, checked:checked}])
    console.log(list)
}
  return (
    <div>
        
        <h1>MY Films LIST</h1>
        <form>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleAdd}>ADD</button>
        </form>
        <ul>
            {list.map((el,i)=><li className={el.checked?'complete':""}>
                



                
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.text} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
           
 

                
                {/* {el.text}
                <img src = {el.text}></img> */}
                
                <button onClick={(e)=>{setChecked(el.checked=!el.checked) 
                    console.log(el.checked)}}>{el.checked?"UnComplete":"Complete"}</button>
            <button onClick={(e)=>{setList(list.filter((x,j)=>i!=j))}}>Delete</button>
            </li>)}
        </ul>
    </div>
  )
}

export default AddToDo