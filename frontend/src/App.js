
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name,setName]=useState(0);
  

  const addName=()=>{
    Axios.post('http://localhost:5000/create',{
      name: name
    }).then(()=>{
      console.log("Success");
    })
  }


  return (
    <div className="App">
      <input type="text" name="text1" onChange={(event)=>{
        setName(event.target.value);
      }} />
      <button onClick={addName} type="submit" name="button1" >Add user</button>
      <hr></hr>


      

    </div>
  );
}

export default App;
