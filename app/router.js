var Router = Backbone.Router.extend({

    routes: {
        "": "index",
        "shipping": "shipping"
    },

    index: function() {
        var shippingModel = new Checkout.Models.Shipping(),
            shippingView = new Checkout.Views.Shipping({model: shippingModel});
    },

    shipping: function () {
    }
});

$(function(){
    Checkout.Router = new Router();
    Backbone.history.start({pushState: true});
});
