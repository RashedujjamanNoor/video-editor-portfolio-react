import React, { useState } from "react";

export const Contacts = () => {
  //   const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setData();
  //   };

  return (
    <div name="Contacts" className="m-2 my-11 md:mx-40">
      <div className="text-center font-bold text-lg md:text-4xl text-slate-700 border-b-2">
        <h1>Contact</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-slate-300 p-5 md:h-96 md:w-1/2 mt-4 flex justify-center items-center rounded-lg">
          <form>
            <div className="my-5">
              <div>
                <label className="font-bold text-lg py-1 text-slate-700">
                  Name
                </label>
              </div>
              <input
                type="text"
                className="w-72 h-8 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
                onChange={handleName}
                value={name}
              />
            </div>

            <div className="my-5">
              <div>
                <label className="font-bold text-lg py-1 text-slate-700">
                  Email
                </label>
              </div>
              <input
                type="email"
                name=""
                id=""
                className="w-72 h-8 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
                onChange={handleEmail}
                value={email}
              />
            </div>
            <div className="my-5">
              <div>
                <label className="font-bold text-lg py-1 text-slate-700">
                  Message
                </label>
              </div>
              <textarea
                name=""
                id=""
                className="w-72 h-20 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
                onChange={handleMessage}
                value={message}
              />
            </div>
            <button
              //   onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
