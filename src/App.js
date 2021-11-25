import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  const sixAndEight = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count:{count}, double:{double} sixAndEight:{sixAndEight}
    </button>
  );
}

export default App;
