//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
	for(var i=0;i<words.length;i++){;
		var mot= words[i]; 
		this.inverse(mot);
	}
}

Anagram.prototype.inverse = function (str) {

	return mot;

}

