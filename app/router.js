var Router = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        // SMTH
    }
});

$(function(){
    Checkout.router = new Router();
    Backbone.history.start({pushState: true});
});
