// import axios from "axios";
// import React, { useRef, useState } from "react";
// import { useEffect } from "react";

// const Test = () => {
//   const [data, setdata] = useState([]);
//   const title = useRef();
//   const author = useRef();

//   const getData = () => {
//     axios.get("http://localhost:3001/posts").then((res) => {
//       console.log(res.data);
//       setdata(res.data || []);
//     });
//   };

//   const addData = () => {
//     const result = {
//       title: title.current.value,
//       author: author.current.value,
//     };

//     console.log(result);

//     axios.post("http://localhost:3001/posts", result).then((res) => {
//       console.log(res.data);
//       setdata([...data, res.data]);
//     });
//   };

//   const deleteData = (id) => {
//     console.log(id);

//     axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
//       //   getData();
//       setdata();
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <input type="text" name="title" ref={title} />
//       <input type="text" name="author" ref={author} />
//       <button onClick={addData}>add</button>

//       <div>
//         {data?.map((val, ind) => {
//           return (
//             <div>
//               <h1>{val.id}</h1>
//               <h2>{val.title}</h2>
//               <h3>{val.author}</h3>
//               <button onClick={() => deleteData(val.id)}>delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Test;