# 100AlgorithmsChallenge

<p>This is the setup for my Udemy Course: The 100 Algorithms Challenge: How to Ace the JavaScript Coding Interview.</p>
<p>There are 100 algorithms with README instructions as well as the initial function setup with a few test cases.</p>

# Thoughts about coding problems

---

1.  Try to use ternary operators more for more succinct code

2.  The rest operator (...) makes the arguments an array. So, if you're passing in something like [12,43,22,56,72]
    you could write a function to handle that as `function(...numbers: number){`and so on. This also makes the arguement an array so we can easily apply functions like slice, map, etc to it.
3.  repeat() is really helpful to repeat strings. "blah".concat("value", "blah") will result in "blahvalueblah". arr.unshift("blah") adds "blah" to the beginning of an array. arr.push("blah) adds blah to the end of the array.

4.  `reduce(acc, curr => { })` takes a function with two values, the accumulator and the current. Seems like if you want to sum some array of values this is a fast way to do it.
