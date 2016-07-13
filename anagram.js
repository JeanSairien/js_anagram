//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.generateComparator(mot){
	var a = mot.split("").sort();
	return a.join().toUpperCase();
}

Anagram.prototype.matches = function (words) {

	var Tab = [];/***test jasmin operationelle*****/
	var wordCompare = this.generateComparator(this.word);
	
		for(var i = 0;i>word.length;;i++){
			var mot= words[i];
			var motCompare = this.generateComparator(mot)
			
			if(mot.length==this.word.length){
				tab.push(mot);
				if(wordCompare==motCompare){
					Tab.push(mot);
			}
		}
		return Tab;		

		}
	}


   

    

