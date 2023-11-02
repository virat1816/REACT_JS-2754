import './App.css';
import Card from './Card';
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState({});
  const [data, setdata] = useState([]);

  const handle = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = () => {
    setdata([...data, value]);
    setValue({});
  };

  return (
    // <div>
    //   {/* <input type="text" name="author" placeholder='author' onChange={handle} />
    //   <input type="text" name="title"  placeholder='title' onChange={handle} />
    //   <button onClick={handlesubmit}>Submit</button> */}
    //   <div>
    //     {result?.map((val, ind) => {
    //       return (
    //         <div key={ind}>
    //           <h1>{val.author}</h1>
    //           <h1>{val.title}</h1>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div>
      <h1>{}</h1>
      <div>
        <Card/>
      </div>
    </div>


  );
}

export default App;
