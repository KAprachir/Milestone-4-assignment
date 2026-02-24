1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() is used to select one single element using its unique id.

getElementsByClassName() selects elements using a class name and returns a collection (HTMLCollection) instead of just one element.

querySelector() is selecting elements using CSS selectors id, class and returns only the first matching element.

querySelectorAll() also uses CSS selectors, but it returns all matching elements as a NodeList.

2. How do you create and insert a new element into the DOM?

we use document.createElement(). After creating it, we can add text, classes, or attributes. Then we insert it into the page using methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?

Event bubbling is when an event starts from the target element and then moves upward through its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where we attach an event listener to a parent element instead of adding separate listeners to many child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default behavior of an element.
stopPropagation() stops the event from bubbling up to parent elements.
