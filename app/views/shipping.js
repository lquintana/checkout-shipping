Checkout.Views.Shipping = Backbone.View.extend({

    tagName: 'div',

    className: 'cho-shipping',

    template: __templates.shipping.main,

    initialize: function (options) {

        var that = this;

        this.model.on('shipping.modelFetched', function () {
            console.log('on shipping fetched');
            that.render();
        });
    },

    render: function() {

        console.log('shipping model', this.model.get('methods'));

        var tmpl = this.template({shipping: this.model.get('methods')});

        this.$el.html(tmpl);

        $('#app').html(this.$el);
    }
});
