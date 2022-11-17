import React, { useState, useEffect } from "react";

export let pages = 0;
//Function that calls the Api and renders the list of items
function RenderingArrayOfObjects() {
  // Store list of all the items
  const [list, setItems] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:3100/images?pages=" + pages)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    // update the state
    setItems(response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  const listItems = list.map((element) => {
    return (
      <div className="card">
        <div className="top-card">
          <div className="likes">
            {element.likes_count}
            <br></br>
            {element.liked}
          </div>
        </div>
        <div className="card-price">
          <h3 className="price">{element.price}€</h3>
        </div>
        <img
          src={element.main_attachment.big}
          alt=""
          className="card-img"
        ></img>

        <div className="card-txt">
          <p className="title">{element.title}</p>
          <p className="author">by {element.author}</p>
        </div>
      </div>
    );
  });
  return <ul id="desktopList">{listItems}</ul>;
}

export default RenderingArrayOfObjects;
