import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { FaCopy, FaUndoAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [service, setService] = useState("");

  const handleInputChange = (event) => {
    if (event.target.value.length <= 1000) {
      setInputValue(event.target.value);
    }
  };
  const handleRewriteAPI = async (service) => {
    setService(service);
    setApiResponse("");
    const response = await fetch("http://localhost:5000/rewrite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue }),
    });

    const data = await response.json();
    console.log(data.data);
    // setApiResponse(data.data);
  };
  const handleGrammarAPI = async (service) => {
    setService(service);
    setApiResponse("");
    const response = await fetch(
      "https://write-right-server-rosy.vercel.app/grammar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      }
    );

    const data = await response.json();
    setApiResponse(data.data);
  };
  const handleSummarizeAPI = async (service) => {
    setService(service);
    setApiResponse("");
    const response = await fetch(
      "https://write-right-server-rosy.vercel.app/summarize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      }
    );

    const data = await response.json();
    setApiResponse(data.data);
  };
  const handleFormalAPI = async (service) => {
    setService(service);
    setApiResponse("");
    const response = await fetch(
      "https://write-right-server-rosy.vercel.app/formal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue }),
      }
    );

    const data = await response.json();
    setApiResponse(data.data);
  };
  const handleApiCallAgain = (service) => {
    switch (service) {
      case "Rewrite":
        handleRewriteAPI(service);
        break;
      case "Grammar Check":
        handleGrammarAPI(service);
        break;
      case "Summarize":
        handleSummarizeAPI(service);
        break;
      case "Formal Tone":
        handleFormalAPI(service);
        break;
      default:
        break;
    }
  };

  const copyTextToClipboard = (id) => {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Text copied to clipboard!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      {/* Header */}
      <div className="bg-slate-700 lg:h-96 md:h-72 h-72"></div>
      {/* Input Field */}
      <div className="flex  justify-center items-center">
        <div className="w-full lg:max-w-4xl md:max-w-2xl max-w-xs">
          <textarea
            onChange={handleInputChange}
            value={inputValue}
            placeholder="Write better, Write smarter..."
            className="w-full  h-96 p-10 border rounded-md bg-slate-300  text-zinc-700 md:text-xl text-lg font-serif lg:-mt-48 md:-mt-40 -mt-44"
          />
          <p className="mt-2">Character count: {inputValue.length}/1000</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex  justify-center items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
          <button onClick={() => handleRewriteAPI("Rewrite")} className="w-72">
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-slate-300 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-slate-300">
                Rewrite
              </span>
            </label>
          </button>
          <button
            onClick={() => handleGrammarAPI("Grammar Check")}
            className="w-72"
          >
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-slate-300 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-slate-300">
                Grammar Check
              </span>
            </label>
          </button>
          <button
            onClick={() => handleSummarizeAPI("Summarize")}
            className="w-72"
          >
            <label
              htmlFor="my-modal-3"
              className="px-14 py-7 relative rounded group overflow-hidden font-medium bg-slate-300 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-slate-300">
                Summarize
              </span>
            </label>
          </button>
          <button
            onClick={() => handleFormalAPI("Formal Tone")}
            className="w-72"
          >
            <label
              htmlFor="my-modal-3"
              className=" px-14 py-7 relative rounded group overflow-hidden font-medium bg-slate-300 text-slate-700 inline-block w-72"
            >
              <span className="absolute top-0 left-0 flex w-72 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-700 group-hover:h-full opacity-90"></span>
              <span className="relative text-xl group-hover:text-slate-300">
                Formal Tone
              </span>
            </label>
          </button>
        </div>
      </div>
      {/* Response Modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
          <label
            className="btn btn-sm btn-circle absolute right-14 top-4"
            onClick={() => copyTextToClipboard("text-to-copy")}
          >
            <FaCopy />
          </label>
          <label
            className="btn btn-sm btn-circle absolute right-24 top-4"
            onClick={() => handleApiCallAgain(service)}
          >
            <FaUndoAlt className="mx-auto" />
          </label>

          <h3 className="text-lg font-bold">{service}</h3>
          {apiResponse ? (
            <p id="text-to-copy" className="py-4">
              {apiResponse}
            </p>
          ) : (
            <div className="flex justify-center mt-10 mb-10">
              <ThreeCircles
                height="50"
                width="50"
                color="rgb(180,198,239)"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
