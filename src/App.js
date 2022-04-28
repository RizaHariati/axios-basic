import React from "react";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "https://reqres.in/api";
  const instanceData = () => {};
  const getData = () => {
    axios
      .get("/users", { params: { id: 2 } })
      .then(({ data }) => console.log(data));
  };

  const config = {
    data: {
      first_name: "Trasdfcey",
      last_name: "Rassmoasdfs",
    },
    // headers: {
    //   "content-type": "application/json",
    // },
  };
  const postData = () => {
    axios
      .post("/users", config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const upDateData = () => {};
  const deleteData = () => {};
  const multiple = () => {};

  return (
    <>
      <div className="grid">
        <button className="btn" onClick={getData}>
          get
        </button>
        <button className="btn" onClick={postData}>
          post
        </button>
        <button className="btn" onClick={upDateData}>
          update
        </button>
        <button className="btn" onClick={deleteData}>
          delete
        </button>
        <button className="btn" onClick={instanceData}>
          Instance
        </button>
        <button className="btn" onClick={multiple}>
          multiple
        </button>
      </div>
    </>
  );
};
export default App;
