import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BookList from '../src/components/BookList';

const initialState = {

  Book1: {
    id : 1,
    BookName: "Book1",
    Author: "Hitler",
    Description: "This is a Autobiography of Hitler"           
 },

 Book2: {
     id : 2,
     BookName: "Book2",
     Author: "Sachin",
     Description: "This is a Autobiography of Sachin Tendulkar"           
  },

  Book3: {
     id : 3,
     BookName: "Book3",
     Author: "James Thomsan",
     Description: "This is a book based on story of World War 2 !!"           
  },

  Book4: {
     id : 4,
     BookName: "Book4",
     Author: "Paulo Coelho",
     Description: "This is a is a story based on the adventures of a young shepherd boy, who, upon deciding to follow his prophetic dreams, sets on a treasure hunt."           
  },

  temp : {}

}

function reducer(state = initialState, action) {
  switch(action.type){
    case "Book1Handler":
      return{
        ...state,
        temp: action.payload
      };

    case "Book2Handler":
      return{
        ...state,        
        temp: action.payload
      };

    case "Book3Handler":
      return{
        ...state,        
        temp: action.payload
      };

    case "Book4Handler":
      return{
        ...state,        
        temp: action.payload
      };

    default:
      return state;
   
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>

         <BookList />

      </Provider>
    );
  }
}

export default App;
