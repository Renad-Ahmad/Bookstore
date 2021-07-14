let books = [
   [["id",1],["BookTitle","Start with why"],["Author","Simon Sinek"],["Price",80.0],["Quantity",13]] ,
   [["id",2],["BookTitle","But how do it know"],["Author","J. Clark Scott"],["Price",59.9],["Quantity",22]] ,
   [["id",3],["BookTitle","Clean Code"],["Author","Robert Cecil Martin"],["Price",50.0],["Quantity",5]] ,
   [["id",4],["BookTitle","Zero to One"],["Author","Peter Thiel"],["Price",45.0],["Quantity",12]] ,
   [["id",5],["BookTitle","You don't know JS"],["Author","Kyle Simpson"],["Price",39.9],["Quantity",9]] 
]

//find book by any info of the book 
function findBook(info){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
         let booksItem = books[i][j][1];

         if(booksItem == info){
            let bookInfo = books[i];          
            console.log(bookInfo.toString());
         }  
      }      
   }
}

//find book by any id 
function findBookById(id){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
          let bookId = books[i][0][1];

         if(bookId == id){
            let bookInfo = books[i];          
            console.log(bookInfo.toString());
            break;
         }  
      }      
   }
}

//find book by any name 
function findBookByName(name){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
          let bookName = books[i][1][1];

          if(bookName == name){
            let bookInfo = books[i];          
            console.log(bookInfo.toString());
            break;
         }  
      }      
   }
}

//find book by any Author 
function findBookByAuthor(author){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
          let bookAuthor = books[i][2][1];

         if(bookAuthor == author){
            let bookInfo = books[i];          
            console.log(bookInfo.toString());
            break;
         }  
      }      
   }
}

// findBook(4);
findBookById(4);
findBookByName("You don't know JS")
findBookByAuthor("Robert Cecil Martin");