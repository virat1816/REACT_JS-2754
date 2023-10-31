// import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState({});

//   const Submit = () => {
//     const data = {
//       firstName: value.fname,
//       lastName: value.lname,
//     };
//     localStorage.setItem("user", JSON.stringify(data));
//   };

//   const handle = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   console.log(value);

//   return (
//     <div>
//       <h1></h1>
//       <div>
//         <input type="text" name="fname" onChange={handle} />
//         <input type="text" name="lname" onChange={handle} />

//         <button onClick={Submit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// export default App;


//=========================================================2============================================================//
//=========================================================2============================================================//

// import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState({});
//   const [userList, setUserList] = useState([]);

//   const Submit = () => {
//     const data = {
//       firstName: value.fname,
//       lastName: value.lname,
//     };

//     const existingUserList = JSON.parse(localStorage.getItem("userList")) || [];

//     existingUserList.push(data);

//     setUserList(existingUserList);

//     localStorage.setItem("userList", JSON.stringify(existingUserList));
//   };

//   const handle = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   console.log(value);

//   return (
//     <div>
//       <h1></h1>
//       <div>
//         <input type="text" name="fname" onChange={handle} />
//         <input type="text" name="lname" onChange={handle} />

//         <button onClick={Submit}>Submit</button>
//       </div>
//       <div>
//         <h2>Users:</h2>
//         <ul>
//           {userList.map((user, index) => (
//             <li key={index}>
//               {user.firstName} {user.lastName}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

//==============================================================3===========================================================//
//==============================================================3===========================================================//

import './App.css';
import { data } from "./Data";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState({});
  const [userList, setUserList] = useState([]);

  const Submit = () => {
    const data = {
      firstName: value.fname,
      lastName: value.lname,
    };

    setUserList([...userList, data]);
    setValue({});
  };

  const handle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1></h1>
      <div>
        <input type="text" name="fname" onChange={handle} value={value.fname || ''} />
        <input type="text" name="lname" onChange={handle} value={value.lname || ''} />

        <button onClick={Submit}>Submit</button>
      </div>
      <div>
        <h2>Users:</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>  
  );
}

export default App;

