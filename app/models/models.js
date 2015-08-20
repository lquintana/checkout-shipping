Checkout.Models.Shipping = Backbone.Model.extend({
    url: '/shipping',
    initialize: function () {
        var that = this;
        this.fetch({
            success: function() {
                console.log('shipping fetched');
                that.trigger('shipping.modelFetched');
            }
        });
    }
});

Checkout.Models.Address = Backbone.Model.extend({
    url: '/address',
    initialize: function (method) {

        console.log('method', method.type);

        var that = this;
        this.fetch({
            success: function() {
                console.log('address fetched');
                that.trigger('address.modelFetched');
            }
        });
    }
});


Checkout.Models.ShippingOptions = Backbone.Model.extend({
    url: '/shipping_options',
    initialize: function () {
        var that = this;
        this.fetch({
            success: function() {
                console.log('shipping options fetched');
                that.trigger('shippingoptions.modelFetched');
            }
        });
    }
});
