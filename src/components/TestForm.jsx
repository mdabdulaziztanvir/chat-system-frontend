import { useEffect, useState } from "react";

import { socket } from "../socket/socket.js";
const TestForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, message });

    socket.emit("testMessage", { name, message });
  };
  useEffect(() => {
    socket.on("testMessage", (msg) => {
      setChatMessages((prev) => [...prev, msg]);
    });
    return () => {
      socket.off("testMessage");
    };
  }, []);
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
        <button type="submit" className=" m-3 outline-1">
          Submit Info
        </button>
      </form>
      <div>
        {chatMessages.length > 0
          ? chatMessages.map((msgs, i) => (
              <p key={i}>
                {" "}
                <strong>{msgs.name}:</strong>
                {msgs.message}{" "}
              </p>
            ))
          : "type message"}
      </div>
    </div>
  );
};

export default TestForm;
