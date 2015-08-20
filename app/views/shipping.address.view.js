Checkout.Views.Address = Backbone.View.extend({

    tagName: 'div',

    className: 'cho-address',

    emptyAddressTemplate: __templates.shipping.address.empty,

    addressTemplate: __templates.shipping.address,

    initialize: function (model) {

        var that = this;

        this.model.on('address.modelFetched', function () {
            console.log('on addressModel fetched');
            that.render();
        });

    },

    render: function() {

        var that = this,
            model = this.model.get('addresses'),
            template;

        console.log('address model', model);

        if ( model.length ) {
            template = this.addressTemplate({addresses: model});
        } else {
            template = this.emptyAddressTemplate();
        }

        this.$el.html(template);

        $('#app').html(this.$el);
    }
});
