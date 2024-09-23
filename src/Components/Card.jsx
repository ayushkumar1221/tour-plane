import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  // console.log(info);

  // const description = `${info.substring(0, 200)}....`;

  const description = readmore ? info : `${info.substring(0,200)}....`

  console.log(description);

  //   ye function readmore wala Boolean ko true or flase me switch kar rha hai

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>

          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}

          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Show More`}
          </span>
        </div>
      </div>

      {/* yaha par onClick ko map kar diya remove tour wale function ko jiska defination app.js ke andar jha par tour walw obkect ko filterout kar rhe hai basic on id. */}

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
