import { useState } from "react";

export default function () {
  const [newUser,setNewUser] = useState(true);
  return (
    <div className="container">
      {newUser ? (
        <form className="m-3 p-3 shadow rounded">
          <div className="mb-3">
            <label className="form-label" for="userName">
              Username
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="password">
              Password
            </label>
            <input className="form-control" type="password" />
          </div>
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <button className="btn btn-success">Login</button>
            <a onClick={()=>{setNewUser(!newUser)}}>New User</a>
          </div>
        </form>
      ) : (
        <form className="m-3 p-3 shadow rounded">
          <div className="mb-3">
            <label className="form-label" for="userName">
              Username
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" for="password">
              Password
            </label>
            <input className="form-control" type="password" />
          </div>
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <button className="btn btn-success">Register</button>
            <a onClick={()=>{setNewUser(!newUser)}}>Already have an account</a>
          </div>
        </form>
      )}
    </div>
  );
}
