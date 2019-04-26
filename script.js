/* global fetch */
function handleClick() {
async function makeGetRequest(){
  const axios = require('axios');
  console.log(axios);
  /*global input*/
  axios.url( "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json"
  ).then(resp => {

    console.log(resp.data);
});
 /*global url*/
  fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(response){
      console.log("response",response);
      console.log("search");
    })
}


// var myResults = ["Nelson Mandela", "Death of Nelson Mandela", "Presidency of Nelson Mandela"];

function displayResults(myResults){
  console.log("myResults", myResults);
  //var list = myResults.map(function(item){
   // return "<li>" + item.title + "</li>"
 // })
  //list = list.join("\n");
  /*global list*/
  console.log("list",list);
 myResults.forEach(function(item){
   const list2 = document.createElement("li");
   
   
   const link = document.creaElement("a");
   link.setAttribute("href","#");
   link.innerHTML = item; 
   
   list2.appendChild(link)
  
  document.getElementById("results").innerHTML=list;
});
// console.log("list2",list2)
  // document.getElementById("results").appendChild(list)
   
 }
} 