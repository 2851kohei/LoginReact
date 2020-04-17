import React from "react";
// import Login from "./Login";
import Form from "./Form";
// import Register from "./Register";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered === true ? <Login /> : <Register />} */}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
