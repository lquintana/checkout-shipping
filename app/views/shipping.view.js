Checkout.Views.Shipping = Backbone.View.extend({

    tagName: 'div',

    className: 'cho-shipping',

    template: __templates.shipping.main,

    events: {
        'change [data-js="shipping"]' : 'showShippingInfo'
    },

    initialize: function (options) {
        var that = this;
        this.model.on('shipping.modelFetched', function () {
            console.log('fetched');
            that.render();
        });
    },

    render: function() {

        console.log('model attributes', this.model.attributes);

        var tmpl = this.template(this.model.attributes);

        this.$el.html(tmpl);

        $('#app').html(this.$el);
    },

    showShippingInfo: function () {
        var addressModel = new Checkout.Models.Addresses();
        new Checkout.Views.CustomShipping(addressModel);
        console.log('do sth');
    }
});
