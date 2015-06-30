var Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        // SMTH
        var ItemView = new Checkout.Views.Shipping();

    }
});

$(function(){
    // Checkout.Router = new Router();
    Backbone.history.start({pushState: true});
});
