# Thoughts about coding problems

---

1.  Try to use ternary operators more for more succinct code

2.  The rest operator (...) makes the arguments an array. So, if you're passing in something like [12,43,22,56,72]
    you could write a function to handle that as `function(...numbers: number){`and so on. This also makes the arguement an array so we can easily apply functions like slice, map, etc to it.
