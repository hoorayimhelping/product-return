// assume proxy is a well defined object that handles ajax requests for javascript objects that is injected into this object 
var proxy = {
    get: function(data) {
        // someFunctionThatUses(data);

        // for the purposes of this demo, just return the data passed in
        return $.Deferred().resolve(data).fail(this.handleError).promise();
    },

    post: function() {},
    put: function() {},

    handleError: function(error) {
        // log the error
        // make a friendly error message
    }
}

var Order = function() {
    this.order_state = {
        returnable: 'returnable'
    };
};

Order.prototype = {
    getReturnOptions: function(order_number) {
        // assume a good result from the server every time.
        // in the interest of time and this being a js exercise, I've considered the server a black box, but assumed it has a restful api.
        // I'm more than happy to talk about back-end architecture and design of the controller/model/data interaction and it's interaction with the front end if you'd like 8-)

        return proxy.get({
            order_number: order_number,
            return_status: 'returnable',
            order_date: 1438424464
        });
    }
};