import React, { useState } from "react";
import { usePostTitle } from "./hook/useFetch";

function App() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const title = usePostTitle(shouldFetch);

  return (
    <div>
      <h1>Fetched Data</h1>
      <button onClick={() => setShouldFetch(true)}>Fetch Data</button>
      <pre>{title}</pre>
    </div>
  );
}

export default App;
