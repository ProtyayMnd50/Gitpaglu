import React from "react";
import { useState } from "react";

const app = () => {
  const [cnt, setcnt] = useState(0);
  const [toggle, setToggle] = useState(false);

  const col = toggle === false ? "green" : "red";

  return (
    <>
      <h1>Counter</h1>
      <div>count is: {cnt}</div>
      <button onClick={() => setcnt(cnt + 1)}>+</button>
      <button onClick={() => setcnt(cnt - 1)}>-</button>

      <h1>Toggler</h1>
      <button style={{ color: col }}>Button color</button>
      <button onClick={() => setToggle(!toggle)}>Toggle button</button>
    </>
  );
};

export default app;
