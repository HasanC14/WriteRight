import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [service, setService] = useState("");

  const handleInputChange = (event) => {
    if (event.target.value.length <= 800) {
      setInputValue(event.target.value);
    }
  };
  const handleApiCall = async (service) => {
    setService(service);
    const response = await fetch("http://localhost:5000/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue }),
    });

    const data = await response.json();
    setApiResponse(data.data);
    console.log(apiResponse);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-slate-700 h-96 "></div>
      {/* Input Field */}
      <div className="flex  justify-center items-center">
        <div className="w-full max-w-4xl">
          <textarea
            onChange={handleInputChange}
            value={inputValue}
            //defaultValue="Write better, write smarter"
            className="w-full h-96 p-10 border rounded-md bg-slate-300  text-zinc-700 text-xl font-serif lg:-mt-48 mt-0"
          />
          <p className="mt-2">Character count: {inputValue.length}/800</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex  justify-center items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <button
            type="submit"
            onClick={() => handleApiCall("Rewrite")}
            className="w-72"
          >
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-purple-50 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-white">
                Rewrite
              </span>
            </label>
          </button>
          <button
            onClick={() => handleApiCall("Grammar Check")}
            className="w-72"
          >
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-purple-50 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-white">
                Grammar Check
              </span>
            </label>
          </button>
          <button onClick={() => handleApiCall("Spell Check")} className="w-72">
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-purple-50 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-white">
                Spell Check
              </span>
            </label>
          </button>
          <button onClick={() => handleApiCall("Formal Tone")} className="w-72">
            <label
              htmlFor="my-modal-3"
              className=" px-14 py-7 relative rounded group overflow-hidden font-medium bg-purple-50 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-white">
                Formal Tone
              </span>
            </label>
          </button>
        </div>
      </div>
      {/* Answer Modal */}
      {/* The button to open modal */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{service}</h3>
          {/* <p className="py-4">{apiResponse}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
