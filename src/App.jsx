import React from "react";
import { useState } from "react";
import data from "./Data";
import Tours from "./Components/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {

      // Tours wale date ko filtering as a id

    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
          <h2>No Tours Left</h2>
          
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
      </div>
    );
  }

  return (
    <div className="App">
      {/* yaha par tour aur card ka data add karne ke liye as a props pass kar rhe hai biut basically yaha par data ko pass card se kar rhe hai but removetour ka code tour me hai to phle tour me pass karke card me pass karege*/}

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
