import React, { useState } from "react";

const App = () => {
  //  State variables for title, detail and notes array
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [add, setAdd] = useState([]);
 
  const handleSubmit = (e) => {
    // Preventing the default behavior of the form
    e.preventDefault();
    console.log("Notes Added:", title, detail);

    //  Adding notes to the array
    const addNote = [...add];
    addNote.push({ title, detail });
    setAdd(addNote);

    // Clearing the input fields
    setTitle("");
    setDetail("");
  };
  //  deleting notes function
  const handleDelete = (index) => {
    const deleteNote = [...add];
    deleteNote.splice(index, 1);
    setAdd(deleteNote);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex items-start flex-col gap-4 p-10 lg:w-1/2"
      >
        <h1 className="font-bold text-3xl">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 rounded-2xl outline-none font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 w-full h-32 py-2 border-2 rounded-2xl outline-none font-medium"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white text-black px-5 py-2 border-2 rounded-2xl w-full outline-none font-medium active:scale-95">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2  lg:border-l-4 p-10 ">
        <h1 className="font-bold text-3xl">Your Notes</h1>
        <div
          id="scroll"
          className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto items-start justify-start"
        >
          {add.map(function (elem, index) {
            return (
              <div
                key={index}
                className="flex justify-between flex-col items-start relative h-64 w-48
               text-black rounded-2xl p-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h1 className=" leading-tight  text-lg font-bold py-2">
                    {elem.title}
                  </h1>
                  <p className="font-semibold text-sm leading-tight text-gray-600 ">
                    {elem.detail}
                  </p>
                </div>
                <button
                  className="w-full bg-red-600 text-white text-xs border-2 rounded-full py-2 font-bold active:scale-95 cursor-pointer"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >Delete  </button>
            
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
