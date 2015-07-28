Checkout.Models.Shipping = Backbone.Model.extend({
    url: '/shipping',
    initialize: function () {
        var that = this;
        this.fetch({
            success: function() {
                that.trigger('shipping.modelFetched');
            }
        });
    }
});

Checkout.Models.Address = Backbone.Model.extend({
    url: '/address',
    initialize: function () {
        var that = this;
        this.fetch({
            success: function() {
                that.trigger('address.modelFetched');
            }
        });
    }
});
