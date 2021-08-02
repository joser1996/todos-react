# DOM
DOM - Document Object Model
* Interface that allows JS or other elements to read and manipulate the contents
    of a document(html page)
* Whenever a html page is loaded a corresponding DOM is made for the page
* Merely, an object representation of said page

Everytime the DOM changes, the browser needs to recalculate the CSS, run layout, repaint, etc.

This causes overhead.

# Virtual DOM
Virtual representation of the actual DOM
update the DOM without haigng to readraw all the webpage elements

Whenever a new element is added to the UI, a virtual DOM is created.
Now, if the state of this element changes, React would recreate the Virutal DOM for the
second time and compare it with the previous version to figure out what has changed.

It then updates ONLY the object on the real DOM. Avoid re rendering the webpage.

props - send data to the children; Read-Only
state - local and specific to the component that owns it
shared state data should live in the closest common parent
"Lifting the state up" and then "top-down" data flow

An alternative is to use Context API to manage the state data.