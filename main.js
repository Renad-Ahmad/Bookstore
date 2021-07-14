let books = [
   [["id",1],["BookTitle","Start with why"],["Author","Simon Sinek"],["Price",80.0],["Quantity",13]] ,
   [["id",2],["BookTitle","But how do it know"],["Author","J. Clark Scott"],["Price",59.9],["Quantity",22]] ,
   [["id",3],["BookTitle","Clean Code"],["Author","Robert Cecil Martin"],["Price",50.0],["Quantity",5]] ,
   [["id",4],["BookTitle","Zero to One"],["Author","Peter Thiel"],["Price",45.0],["Quantity",12]] ,
   [["id",5],["BookTitle","You don't know JS"],["Author","Kyle Simpson"],["Price",39.9],["Quantity",9]] 
]


function findBook(info){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
         let booksItem = books[i][j][1];
         // let bookInfo = books[i];

         // console.log(bookId);
         if(booksItem == info){
            let bookInfo = books[i];          
            console.log(bookInfo.toString());
         }  
      }      
   }
}

 findBook(4);
