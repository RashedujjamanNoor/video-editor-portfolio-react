export const Contacts = () => {
  return (
    <div name="Contacts" className="m-2 my-11 md:mx-40">
      <div className="text-center font-bold text-lg md:text-4xl text-slate-700 border-b-2">
        <h1>Contact</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-slate-300 p-5 md:h-96 md:w-1/2 mt-4 flex justify-center items-center rounded-lg">
          <form
            action="https://formsubmit.co/cb3b85473401d802904f53fd26a76cd1"
            method="POST"
          >
            <div className="my-5">
              <div>
                <label className="font-bold text-lg py-1 text-slate-700">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                className="w-72 h-8 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
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
                name="email"
                className="w-72 h-8 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
              />
            </div>
            <div className="my-5">
              <div>
                <label className="font-bold text-lg py-1 text-slate-700">
                  Message
                </label>
              </div>
              <textarea
                name="message"
                className="w-72 h-20 rounded-lg p-2 outline-cyan-500 text-sm font-semibold text-slate-800"
              />
            </div>
            <button
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
