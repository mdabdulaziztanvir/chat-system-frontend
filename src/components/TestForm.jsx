import { useState } from "react";
const TestForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, message);
  };
  return (
    <div className="m-3">
      <form className="" onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          className="outline-1 ms-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Enter your message:</label>
        <input
          type="text"
          className="outline-1 ms-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="">
          Submit Info
        </button>
      </form>
    </div>
  );
};

export default TestForm;
