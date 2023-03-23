# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The addOne argument returns an object with the type "ADD_ONE".
* The addOne argument "ADD_ONE" is passed to the dispatch function.
* The dispatch function is identified as having the "ADD_ONE" case.
* The dispatch function returns a copy of the state with the total incremented by 1.
dispatch function is called with the addOne argument.
* The TotalDisplay component shows the total plus 1.
