import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const itRef = useRef();

  useEffect(() => {
    itRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 500);
  }, []);

  useEffect(() => {
    if (count === 10) {
      clearInterval(itRef.current);
    }
  });

  return <div>{count}</div>;
}

export default App;
