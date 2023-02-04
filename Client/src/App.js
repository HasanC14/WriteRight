import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/PublicRoutes";

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
// import React, { useState } from "react";

// const App = () => {
//   const [response, setResponse] = useState("");
//   const [input, setInput] = useState("");

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch("http://localhost:5000/response", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ input }),
//     });

//     const data = await response.json();
//     setResponse(data.data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea value={input} onChange={handleInputChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{response}</p>
//     </div>
//   );
// };

// export default App;
