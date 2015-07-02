var Router = Backbone.Router.extend({

    routes: {
        "": "index",
        "shipping": "shipping"
    },

    index: function() {
        console.log('im in index');
        var shippingView = new Checkout.Views.Shipping();
    },

    shipping: function () {
        // console.log('im in shipping');
        // var shippingView = new Checkout.Views.Shipping();
    }
});

$(function(){
    Checkout.Router = new Router();
    Backbone.history.start({pushState: true});
});
