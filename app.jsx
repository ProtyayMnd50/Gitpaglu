import React from "react";
import { useState } from "react";

const app = () => {
  const [cnt, setcnt] = useState(0);

  return (
    <>
      <div>count is: {cnt}</div>
      <button onClick={() => setcnt(cnt + 1)}>+</button>
      <button onClick={() => setcnt(cnt - 1)}>-</button>
    </>
  );
};

export default app;
