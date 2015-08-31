### [Check it out](http://hoorayimhelping.github.io/product-return/)

A simple product return form.

It's mostly a skeleton of a product form with comments explaining the stubbed out functionality.

In the spirit of keeping this around an hour in length, I just downloaded a minified version of jQuery. In the wild I'd probably use npm and gulp to manage dependencies and automate the js build with tests. In the wild design of the page would ideally drive the tech used (e.g. a single page app might be better with react and ember, whereas a simple form might be better with just some jQuery and vanilla JavaScript), but since I'm fastest with jQuery, I figured I'd use that and keep it simple.

The index page is the entry point, and there is a simple `Order` object which the page delegates domain-level tasks to. I've tried to keep the concerns of DOM interaction and server interaction separate by using an abstract representation of an order and by having helper methods to handle writing to the DOM. I like promises so order just returns a dumb deferred object to represent interaction with the server.

To save tons of time, this form assumes the happy case (good data passed in by the user, good response from server, good state on item) and so doesn't have a lot of error handling.
