import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  const title = useRef();
  const author = useRef();

  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log(res.data);
      setdata(res.data || []);
    });
  };

  const addData = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };

    console.log(result);

    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="text" name="title" ref={title} />
      <input type="text" name="author" ref={author} />
      <button onClick={addData}>Add</button>

      <div>
        {data?.map((val, ind) => {
          return (
            <div key={ind}>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
              <h3>{val.author}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
