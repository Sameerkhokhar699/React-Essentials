import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );
  let printUserData = (
    <h3 className="text-gray-300 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading....
    </h3>
  );
  if (userdata.length > 0) {
    printUserData = userdata.map(function (element, index) {
      return (
        <div key={index}>
          <Card element={element} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen overflow-auto text-white p-4">
      <div className="flex flex-wrap gap-3 py-2">{printUserData}</div>
      <div className="flex justify-center items-center gap-4 p-4">
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className="bg-amber-400 text-black font-bold text-xs cursor-pointer active:scale-95 rounded-full px-4 py-2"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-black font-bold text-xs cursor-pointer active:scale-95  rounded-full px-4 py-2"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
