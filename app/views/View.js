Checkout.Views.Shipping = Backbone.View.extend({

    tagName: 'section',

    className: 'cho-shipping',

    template: __templates.shipping,

    initialize: function () {
        this.render();
    },

    render: function() {
        $('#app').html(this.$el);
    }
});
