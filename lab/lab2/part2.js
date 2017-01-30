/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
 ===================== */

// For-loop One:
/*
var filterOutLessThan10 = function(List) {
  var ListOver10=[];
  for (var i = 0; i < List.length; i++) {
    if (List[i] > 10) {
      ListOver10.push(List[i]);
    }
  }
  return ListOver10;
};
*/
//Plus one function
_.each([1,2,3,4,5,6,7,8],function(list){
  console.log(list+1);
});
//Calculating age function
_.each([1956,1967,1978,1989,1993,1999,2008,2014],function(list){
  console.log(2017-list);
});
