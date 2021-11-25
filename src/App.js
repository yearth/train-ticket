import { useState, useMemo, memo, useCallback } from "react";

const Foo = memo(function Foo(props) {
  console.log("render foo");

  return <div onClick={props.onClick}>{props.double}</div>;
});

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  const sixAndEight = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  const onClick = useCallback(() => {
    console.log("foo click");
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count:{count}, double:{double} sixAndEight:{sixAndEight}
      </button>
      <Foo double={sixAndEight} onClick={onClick} />
    </div>
  );
}

export default App;
