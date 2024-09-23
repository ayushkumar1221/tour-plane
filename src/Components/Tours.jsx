import Card from "./Card";

import { useState } from "react";

function Tours({ tours, removeTour }) {
  console.log(tours);

  return (
    <div className="container">
      <div>
        <h2 className="title">Plan For Tour </h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          // ...tours -> Meaning cloning karna/Data Pass

          return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
