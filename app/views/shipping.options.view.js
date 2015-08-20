Checkout.Views.ShippingOptions = Backbone.View.extend({

    tagName: 'div',

    className: 'cho-shipping-options',

    template: __templates.shipping.options,

    initialize: function (model) {

        var that = this;

        this.model.on('shippingoptions.modelFetched', function () {
            console.log('on shippingoptions fetched');
            that.render();
        });

    },

    render: function() {

        var tmpl = this.template(this.model.attributes);

        this.$el.html(tmpl);

        $('#app').html(this.$el);
    }
});
