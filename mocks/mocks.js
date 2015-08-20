// ACA TENGO QUE PONER EL JSON QUE QUIERO QUE DEVUELVA

$.mockjax({
    url: '/item',
    proxy: 'responses/item.get.json'
});

$.mockjax({
    url: '/shipping_preferences',
    proxy: './mocks/responses/shipping_preferences.json'
});


// curl -X GET https://api.mercadolibre.com/items/MLB123456789/shipping_options?zip_code=13565905
$.mockjax({
    url: '/shipping',
    proxy: './mocks/responses/shipping.json'
});

$.mockjax({
    url: '/address',
    proxy: './mocks/responses/addresses.json'
});
