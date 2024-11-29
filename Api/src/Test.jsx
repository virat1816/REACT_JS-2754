import React, { useRef, useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false); // Track if we're in edit mode
  const [editingPostId, setEditingPostId] = useState(null); // Track the ID of the post we're editing
  const title = useRef();
  const author = useRef();

  // Load data from localStorage
  const loadDataFromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem("posts"));
    setData(storedData || []);
  };

  // Save data to localStorage
  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem("posts", JSON.stringify(newData));
  };

  // Add new data (post) to the list and localStorage
  const addData = () => {
    const newPost = {
      id: Date.now(), // Generate a unique ID based on timestamp
      title: title.current.value,
      author: author.current.value,
    };

    const updatedData = [...data, newPost];
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
  };

  // Update an existing post and save to localStorage
  const updateData = () => {
    const updatedPost = {
      title: title.current.value,
      author: author.current.value,
    };

    const updatedData = data.map((post) =>
      post.id === editingPostId ? { ...post, ...updatedPost } : post
    );

    setData(updatedData);
    saveDataToLocalStorage(updatedData);

    setEditMode(false); // Exit edit mode after update
    setEditingPostId(null);
  };

  // Delete a post and update localStorage
  const deleteData = (id) => {
    const updatedData = data.filter((post) => post.id !== id);
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
  };

  // Set up useEffect to load data from localStorage when the component loads
  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  // If we are in edit mode, show an update button instead of the add button
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
        {data?.map((val) => {
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
