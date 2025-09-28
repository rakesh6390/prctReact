import React, { useState } from "react";
import { usePostTitle } from "./hook/usefetchwrf";

function App() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const data = usePostTitle(shouldFetch);

  return (
    <div>
      <h1>Fetched Data</h1>
      <button onClick={() => setShouldFetch(true)}>Fetch Data</button>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre> // ✅ show JSON nicely
      )}
    </div>
  );
}

export default App;
