# Assignment5

JavaScript DOM & Event Handling
1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll:
getElementById selects a single element by its id. getElementsByClassName selects all elements with a specific class and returns a live collection. querySelector selects the first element that matches a CSS selector, and querySelectorAll selects all elements that match the CSS selector and returns a NodeList.
2. How to create and insert a new element into the DOM:
You can create a new element using document.createElement(). Then add content using textContent or innerHTML. You can also set classes or ids. Finally, insert the element into the DOM using appendChild or insertBefore on a parent element.
3. What is Event Bubbling and how it works:
Event Bubbling happens when an event starts at the innermost element and moves up through its parent elements. For example, clicking a child element triggers its event first, and then the event on the parent element.
4. What is Event Delegation and why it is useful:
Event Delegation is a technique where you add an event listener to a parent element to handle events on its child elements. It is useful because you don’t need to add multiple listeners, it saves memory, and it works for elements added dynamically after the page loads.
5. Difference between preventDefault() and stopPropagation():
preventDefault() stops the browser’s default action, like following a link or submitting a form. stopPropagation() stops the event from moving up to parent elements, preventing it from triggering other listeners.
Project Images / Assets
ambulance.png
brac.png
bangladesh-railway.png
emergency.png
fire-service.png
police.png
coin.png
heart.png
logo.png ,logo-dark.png
