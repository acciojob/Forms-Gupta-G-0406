import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(confirmRef.current.value);
  };

  return (
    <Card style={{ display: "flex", justifyContent: "space-around" }}>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" ref={nameRef} placeholder="Full Name" />
        <input id="email" ref={emailRef} placeholder="Email" />
        <input
          id="password"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        <input
          id="password_confirmation"
          type="password"
          ref={confirmRef}
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
