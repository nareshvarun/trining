
// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (m) {
  return(m%3==0)
};
console.log(isDivisibleBy3(6));
console.log(isDivisibleBy3(8));

// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function(m) {
  return ((m*9)/5+32);
};
console.log(celsToFahr(127));
var fahrTocels= function(n){
  return((n-32)*5/9);
};
console.log(fahrTocels(124));




// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236

var randUpTo = function (n) {
return Math.floor(Math.random()*n);
}
console.log(randUpTo(10));


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function () {
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function(suit) {
  if(suit.toLowerCase()=="clubs" || suit.toLowerCase()=="dimonds" ||
  suit.toLowerCase()=="hearts"||suit.toLowerCase()=="spades"){

return true;
}
else {
  return false;
}
};
console.log(isSuit("raju"));
// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function(rank) {
  if(rank=="two" || rank=="three" ||
  rank=="four"||rank=="five"||
  rank=="six" || rank=="seven" ||
  rank=="eight"||rank=="nine"||
  rank=="ten" || rank=="jack" ||
  rank=="queen"||rank=="king"||
  rank=="ace")

  {

return true;
}
else {
  return false;
}
};
console.log(isRank("jack"))



// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (rank,suit) {
  if(isSuit(rank) && isRank(suit)){
    return true;
  }
  else {
    return false;
  }
};
console.log(isCard("king","jack"));


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. Howcan you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function(firstLetter) {
  if(firstLetter[0]==firstLetter[0].toUpperCase()){
return true;
}
else
{
      return false;
}
};
console.log(isCapitalized("Varun"));

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item

var getHTMLText = function (varun) {
 return varun.slice(varun.indexOf('>')+1, varun.lastIndexOf('<'));
};
console.log(getHTMLText("<p>naresh varun</p>"));




// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//

//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (txt)
{ if(txt.slice(txt.indexOf('<')+1, txt.indexOf('>')) ===
    txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'))){
 return "That's a pretty good HTML element!!!";
}
else{
 return "Not an HTML Element!"
}
};

console.log(isHTMLElement("<p>blahblah</p>"));
