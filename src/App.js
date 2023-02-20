
import './App.css';


import {data} from "./data";
import { useState } from "react";
import "./App.css";

function App(){
  const [books,setBooks]= useState(data);
  const [showText,setShowText] = useState(false);

  const removeBook = (id) => {
    let newBook = books.filter((book) => book.id !== id);
    setBooks(newBook)
  }
  const showTextClick = (item) =>{
    item.showMore=!item.showMore 
    setShowText(!showText)
  }


  return(
  <div className="container">
    <h1 className="titel">Top {books.length} must-read fantasy novels</h1>
    {
      books.map((item => {
        const{id,name,image,description,showMore} = item;
        return(
          <div key={id} className="main">
            <div className="container">
              <h2>{id} - {name}</h2>
            </div>
            
            <div className="container">
              <img src={image} width="350px" alt="book"/>
              </div>
              <div className="container">
              <p className="descrip">
                {showMore ? description : description.substring(0,210)+"..."}
                <button onClick={()=> showTextClick(item)}>{showMore ? "show less":"show more"}</button>
              </p>
            </div>
            <div className="container-btn " >
              <button className="btn" onClick={() => removeBook(id)}>Remove</button>
            </div>
            <div className="container">
              
            </div>
          </div>
        )
      }))
    }
    <div className="container">
      <button className="btn2" onClick={() => setBooks([])}>Remove all</button>
    </div>
  </div>
  )
}

export default App;

