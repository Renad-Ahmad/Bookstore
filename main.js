let books = [
   [["id",1],["Book Title","Start with why"],["Author","Simon Sinek"],["Price",80.0],["Quantity",13]] ,
   [["id",2],["Book Title","But how do it know"],["Author","J. Clark Scott"],["Price",59.9],["Quantity",22]] ,
   [["id",3],["Book Title","Clean Code"],["Author","Robert Cecil Martin"],["Price",50.0],["Quantity",5]] ,
   [["id",4],["Book Title","Zero to One"],["Author","Peter Thiel"],["Price",45.0],["Quantity",12]] ,
   [["id",5],["Book Title","You don't know JS"],["Author","Kyle Simpson"],["Price",39.9],["Quantity",9]] 
]


function findBookById(id){

   for(let i = 0; i < books.length;i++){
      var innerArrayLength = books[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
         let bookId = books[i][j][1];
         // let bookInfo = books[i];

         if(bookId == id){
            console.log(id);  
            let bookInfo = books[i];          
            console.log(bookInfo + "\n");
         }
     }      
   }
}

// function findBookByName(name){

//    for(let i = 0; i <books.length;i++){
//       var innerArrayLength = books[i].length;

//       for (let j = 0; j < innerArrayLength; j++) {
//           let bookName = books[i][j][1];
//          let bookInfo = books[i];

//          console.log(bookName);
//          // if(bookId == name){
//          //    console.log(name);            
//          // }
//          // else {
//          //    console.log("not found")
//      }      
//    }
// }

findBookById(3);
// findBookByName("But how do it know");
