import React, { useState } from "react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse1, setApiResponse1] = useState({});
  const [apiResponse2, setApiResponse2] = useState({});
  const [apiResponse3, setApiResponse3] = useState({});
  const [apiResponse4, setApiResponse4] = useState({});

  const handleInputChange = (event) => {
    if (event.target.value.length <= 800) {
      setInputValue(event.target.value);
    }
  };
  const handleApiCall1 = () => {
    fetch(`https://api.example.com/endpoint1/${inputValue}`)
      .then((response) => response.json())
      .then((data) => setApiResponse1({ endpoint: 1, data }))
      .catch((error) => setApiResponse1({ endpoint: 1, error }));
  };

  const handleApiCall2 = () => {
    fetch(`https://api.example.com/endpoint2/${inputValue}`)
      .then((response) => response.json())
      .then((data) => setApiResponse2({ endpoint: 2, data }))
      .catch((error) => setApiResponse2({ endpoint: 2, error }));
  };

  const handleApiCall3 = () => {
    fetch(`https://api.example.com/endpoint3/${inputValue}`)
      .then((response) => response.json())
      .then((data) => setApiResponse3({ endpoint: 3, data }))
      .catch((error) => setApiResponse3({ endpoint: 3, error }));
  };
  const handleApiCall4 = () => {
    fetch(`https://api.example.com/endpoint3/${inputValue}`)
      .then((response) => response.json())
      .then((data) => setApiResponse4({ endpoint: 4, data }))
      .catch((error) => setApiResponse4({ endpoint: 4, error }));
  };
  return (
    <div>
      <div className="flex  justify-center items-center">
        <div className="w-full max-w-4xl">
          <textarea
            onChange={handleInputChange}
            value={inputValue}
            className="w-full h-96 p-2 border rounded  bg-slate-500 text-white font-serif"
          />
          <p className="mt-2">Character count: {inputValue.length}/800</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <button onClick={handleApiCall1}>Endpoint 1</button>
        <button onClick={handleApiCall2}>Endpoint 2</button>
        <button onClick={handleApiCall3}>Endpoint 3</button>
        <button onClick={handleApiCall4}>Endpoint 4</button>
      </div>
    </div>
  );
};

export default Hero;
