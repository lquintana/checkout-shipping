var Router = Backbone.Router.extend({

    routes: {
        "": "index",
        "shipping/method/:method": "shippingMethods",
        "shipping/options/:id": "shippingOptions"
    },

    'index': function() {
        var shippingModel = new Checkout.Models.Shipping(),
            shippingView = new Checkout.Views.Shipping({model: shippingModel});
    },

    'shippingMethods': function (method) {
        if (method !== 'localpickup') {
            var addressModel = new Checkout.Models.Address({'type': method}),
                addressView = new Checkout.Views.Address({model: addressModel});
                // customShippingView = new Checkout.Views.CustomShipping();
        }
    },

    shippingOptions: function (id) {
        console.log('options', id);

        var optionsModel = new Checkout.Models.ShippingOptions(),
            customShippingView = new Checkout.Views.CustomShipping({model: optionsModel});
    }
});

$(function(){
    Checkout.Router = new Router();
    Backbone.history.start();
});
