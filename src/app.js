import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['my', 'our', 'the'];
  let adj = ['cool', 'crazy', 'hidden'];
  let noun = ['wizard', 'pirate', 'cat'];
  let extension = ['.com', '.es', '.us'];

  for( let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
      for( let k = 0; k < noun.length; k++) 
        for(let l = 0; l < extension.length; l++) {
          let dominio = pronoun[i] + adj[j] + noun[k] + extension[l]
          console.log(dominio)
      }
    }
  }
 
};
