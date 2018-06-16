import React from 'react';
import { connect } from 'react-redux';
import './BookList.css';
class BookList extends React.Component {


//browser DB(local storage uses)

//setter
//localStorage.setItem('mydata', this.props.book1);
//getter
//localStorage.getItem('mydata');



book1Handler = ()=>{
    this.props.dispatch({ type: "Book1Handler", payload: this.props.Book1 });
};

book2Handler = ()=>{
    this.props.dispatch({ type: "Book2Handler", payload: this.props.Book2 });    
 };

 book3Handler = ()=>{
    this.props.dispatch({ type: "Book3Handler", payload: this.props.Book3 });    
 }

 book4Handler = ()=>{
    this.props.dispatch({ type: "Book4Handler", payload: this.props.Book4 });    
 }

 render() {
    

     return(
       <div className="Head">
       
         <div className="bookList">

            <div className="book1" onClick={this.book1Handler}>
               <h2 className="d-inline-flex p-2"> Book1 </h2>
            </div>

            <div className="book2" onClick={this.book2Handler}>
               <h2> Book2 </h2>
            </div>

            <div className="book3" onClick={this.book3Handler}>
               <h2> Book3 </h2>
            </div>

            <div className="book4" onClick={this.book4Handler}>
               <h2> Book4 </h2>
            </div>

         </div>

         <div className="content">
            <h1  style={{color: '#E63C18', fontStyle: 'bold', fontSize: '50px'}}> Book Details </h1><br/><br/>
            <p className="para">Book Name: </p>
            <p className="para-content">{this.props.temp.BookName}</p><br/>
            <p className="para">Author: </p>            
            <p className="para-content">{this.props.temp.Author}</p><br/>
            <p className="para">Description: </p>                    
            <p className="para-content">{this.props.temp.Description} </p>            
         </div>
         
       </div>
     );
 }

}

const mapStateToProps = state => ({
    Book1: state.Book1,
    Book2: state.Book2,
    Book3: state.Book3,
    Book4: state.Book4,
    temp: state.temp
});

export default connect(mapStateToProps)(BookList);
