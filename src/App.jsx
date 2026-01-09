import { useEffect } from "react";
import { socket } from "./socket/socket";
import TestForm from "./components/TestForm";
const App = () => {
  useEffect(() => {
    socket.connect();
  }, []);
  return (
    <div className="flex justify-center items-center">
      <TestForm />
    </div>
  );
};

export default App;
