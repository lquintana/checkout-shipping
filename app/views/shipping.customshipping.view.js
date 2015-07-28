Checkout.Views.CustomShipping = Backbone.View.extend({

    tagName: 'div',

    className: 'cho-shipping',

    template: __templates.shipping.custom,

    events: {
        'change [data-js="shipping"]' : 'showShippingInfo'
    },

    initialize: function (options) {

        var that = this;

        this.model.on('address.modelFetched', function () {
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
        new Checkout.Views.Address(this.model.attributes);
    }
});
