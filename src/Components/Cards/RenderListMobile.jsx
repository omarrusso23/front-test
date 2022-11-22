import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchContext } from "../../Context/searchContext";

let page = 2;
export const nextPage = () => {
  page++;
};

//New list to map
let listItems = [];

//Function that calls the Api and renders the list of items
function RenderingArrayOfObjectsMobile() {
  const searchContext = useContext(SearchContext);
  // Store list of all the items
  const [list, setItems] = useState([]);

  //Maping of the list of items and controling if the title contains x characters for the search
  listItems = list
    .filter((item) => item.title.includes(searchContext.query))
    .map((element) => {
      return (
        <div className="card" key={element.id}>
          <div className="card-price">
            <h3 className="price">{element.price}€</h3>
          </div>
          <img
            src={element.main_attachment.small}
            alt=""
            className="card-img"
          ></img>
          <div className="txt-container">
            <div className="card-txt">
              <p className="title">{element.title}</p>
              <p className="author">
                <span className="color-span">by</span> {element.author}
              </p>
            </div>
            <br></br>
            <hr></hr>
            <div className="likes">
              <div className="like">
                <span className="like-txt">{element.likes_count}</span>
                <button className="like-logo-btn"></button>
              </div>
            </div>
          </div>
        </div>
      );
    });

  //Run the call to the api when the web is started
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch("http://192.168.1.134:3100/images?page=1")
        .then((response) => response.json())
        .catch((error) =>
          alert(
            "El fallo puede ocurrir ya que esta llamada se hace al localhost y para poder conectarse desde el movil tendra que cambiarse el fetch a la dirección ip del ordenador que este hosteando el servidor Error:" +
              error
          )
        );

      // update the state
      setItems(response);
    };

    getApiData();
  }, []);

  //Api with page number for the infinite scroll
  const getApiData = async () => {
    const response = await fetch(
      "http://192.168.1.134:3100/images?page=" + page
    );
    const data = await response.json();
    return data;
  };

  //We call the Api
  const fetchData = async () => {
    nextPage();
    const newArr = await getApiData();
    //Adds the new array to the end of the old array to create a infinite scroll
    setItems([...list, ...newArr]);
    //Renders said array
    return <ul id="#desktopList">{listItems}</ul>;
  };

  //InfiniteScroll is used for creating a infinite scroll
  return (
    <div>
      <InfiniteScroll dataLength={list.length} next={fetchData} hasMore={true}>
        <ul id="#desktopList">{listItems}</ul>
      </InfiniteScroll>
    </div>
  );
}

export default RenderingArrayOfObjectsMobile;
