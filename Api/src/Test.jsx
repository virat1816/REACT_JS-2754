import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false); // Track if we're in edit mode
  const [editingPostId, setEditingPostId] = useState(null); // Track the ID of the post we're editing
  const title = useRef();
  const author = useRef();

  // Fetch data from the API
  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log(res.data);
      setData(res.data || []);
    });
  };

  // Add new data to the server
  const addData = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };

    console.log(result);

    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setData([...data, res.data]);
    });
  };

  // Update an existing post
  const updateData = () => {
    const updatedPost = {
      title: title.current.value,
      author: author.current.value,
    };

    axios
      .put(`http://localhost:3001/posts/${editingPostId}`, updatedPost)
      .then((res) => {
        console.log(res.data);
        setData(
          data.map((post) =>
            post.id === editingPostId ? { ...post, ...updatedPost } : post
          )
        );
        setEditMode(false); // Exit edit mode after update
        setEditingPostId(null);
      });
  };

  // Delete a post
  const deleteData = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setData(data.filter((post) => post.id !== id));
    });
  };

  // Set up useEffect to get data when the component loads
  useEffect(() => {
    getData();
  }, []);

  // If we are in edit mode, show an edit button instead of the add button
  return (
    <div>
      <input type="text" name="title" ref={title} />
      <input type="text" name="author" ref={author} />

      {editMode ? (
        <button onClick={updateData}>Update</button>
      ) : (
        <button onClick={addData}>Add</button>
      )}

      <div>
        {data?.map((val, ind) => {
          return (
            <div key={val.id}>
              <h1>{val.id}</h1>
              <h2>{val.title}</h2>
              <h3>{val.author}</h3>
              <button onClick={() => deleteData(val.id)}>Delete</button>
              <button
                onClick={() => {
                  setEditMode(true);
                  setEditingPostId(val.id);
                  title.current.value = val.title;
                  author.current.value = val.author;
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
