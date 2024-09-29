// combination of function bundled together with refrence to its sorrounding scope (lexical scope)

/*
function x() {
  var a = 9;
  function y() {
    console.log(a);
  }

  a = 100;
  //   y();
  return y;
}

var z = x();
console.log(z); // function y(){....}

z(); // 100
*/

/*
function z() {
  var b = 900;
  function x() {
    var a = 9;
    function y() {
      console.log(a, b); // 100 900
    }

    a = 100;
    y();
    // return y;
  }
  x();
}
z();

*/

/*
Uses of closures:

module design pattern
currying
function like once
memoize
setTimeouts
*/

/*
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("test");
}

x();
*/

function x() {
  /* 
      for (let i = 1; i <= 5; i++) {
    //If we use var in for loop it will print 6 5times
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
    */

  for (var i = 1; i <= 5; i++) {
    function close(input) {
      setTimeout(function () {
        console.log(input);
      }, input * 1000);
    }
    close(i);
  }

  console.log("test");
}

// x();
