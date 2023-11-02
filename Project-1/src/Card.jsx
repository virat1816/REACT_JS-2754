import React, { useState, useEffect } from "react";
import { data } from "./Data";
const Card = () => {
const [value, setValue] = useState({});
const [result, setResult] = useState([]);

const handle = (e) => {
    setValue({
    ...value,
    [e.target.name]: e.target.value
    });
};

const handlesubmit = () => {
    setResult([...result, value]);
    setValue({});
};

const handleDelete = (name) => {
    console.log(name);
    // delete result[index];

    // console.log(result);

    // result.splice(index, 1);
    // setresult(result);
    // console.log(res, "result");

    setResult(result.filter((e) => e.author !== name));
  };

useEffect(() => {
    setResult(data);
}, []);

return (
    <div>
    <input type="text" name="title" placeholder='title' onChange={handle} />
    <input type="text" name="author" placeholder='author' onChange={handle} />
    <button onClick={handlesubmit}>Submit</button>

    <ul>
{result.map((val) => (
        <li>
        <h4>{val.title}</h4>
        <h2>{val.author}</h2>
        <button onClick={() => handleDelete(val.author)}>Delete</button>
        </li>
    ))}
    </ul>
    </div>

);
};

export default Card;














// import React, { useState, useEffect } from "react";
// import { data } from "./Data";

// const Card = () => {
//   const [value, setValue] = useState({});
//   const [result, setResult] = useState([]);

//   const handle = (e) => {
//     setValue({
//       ...value,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     setResult([...result, value]);
//     setValue({});
//   };

//   const handleDelete = (name) => {
//     setResult(result.filter((e) => e.author !== name));
//   };

//   useEffect(() => {
//     setResult(data);
//   }, []);

//   return (
//     <div>
//       <input type="text" name="title" placeholder='title' onChange={handle} />
//       <input type="text" name="author" placeholder='author' onChange={handle} />
//       <button onClick={handleSubmit}>Submit</button>

//       <ul>
//         {result.map((val, index) => ( // Added index as a parameter
//           <li key={index}> {/* Added a unique key for each list item */}
//             <h4>{val.title}</h4>
//             <h2>{val.author}</h2>
//             <button onClick={() => handleDelete(val.author)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Card;
