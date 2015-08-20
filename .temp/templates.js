this["__templates"] = this["__templates"] || {};
this["__templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<footer role=\"contentinfo\" class=\"nav-footer\">\n    <div class=\"nav-bounds\">\n        <!-- Logged in content (small devices) -->\n        <p class=\"nav-footer-user\">Username (<a href=\"https://www.mercadolibre.com/jms/mla/lgz/logout\" rel=\"nofollow\">Salir</a>)</p>\n        <!-- Not logged in content (small devices) -->\n        <!--\n        <p class=\"nav-footer-user\">\n            <a class=\"nav-footer-registration ch-btn-skin ch-btn-small\" href=\"https://registration.mercadolibre.com.ar/registration/\" rel=\"nofollow\">Regístrate</a>\n            <a href=\"https://www.mercadolibre.com/jms/mla/lgz/login\" rel=\"nofollow\">Ingresa</a>\n        </p>\n        -->\n\n        <!-- Each country has different copyrights. Check which copyright you need. -->\n        <div class=\"nav-footer-primaryinfo\">\n            <small class=\"nav-footer-copyright\">© 1999-YYYY MercadoLibre</small>\n\n            <nav class=\"nav-footer-navigation\">\n                <a href=\"http://www.mercadolibre.com.ar/seguro_terminos.html\">Términos y condiciones</a>\n                <a href=\"http://www.mercadolibre.com.ar/seguro_privacidad.html\">Políticas de privacidad</a>\n                <a href=\"http://ayuda.mercadolibre.com.ar/\">Ayuda</a>\n            </nav>\n\n            <a href=\"#\" class=\"nav-footer-change-device\">Versión clásica</a>\n        </div>\n\n        <p class=\"nav-footer-secondaryinfo\">CNPJ n.º 03.007.331/0001-41 / Avenida Marte, 489, Térreo, Parte A / Santana de Parnaíba-SP / CEP: 06541-005 - empresa do grupo MercadoLivre.</p>\n    </div>\n</footer>\n";
  },"useData":true});
this["__templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header role=\"banner\" class=\"nav-header nav-header-lite\">\n    <div class=\"nav-bounds\">\n        <a class=\"nav-logo\" href=\"/\" tabindex=\"1\">MercadoLibre - Donde compras y vendes de todo</a>\n        <!-- Menu - Switch checkbox (Small devices) -->\n        <input type=\"checkbox\" id=\"nav-header-menu-switch\"/>\n        <div class=\"nav-header-menu-wrapper\">\n            <!-- Menu - Hamburger (Small devices) -->\n            <label for=\"nav-header-menu-switch\" aria-controls=\"nav-header-menu\" data-fastClick tabindex=\"3\">\n                <i class=\"nav-header-menu-switch-icon\"></i>\n            </label>\n            <!-- Menu - Expandable (Logged in) -->\n            <nav id=\"nav-header-menu\">\n                <div class=\"nav-header-user\">\n                    <label for=\"nav-header-user-switch\" data-fastClick tabindex=\"4\">\n                        <!--[if lt IE 9]><a href=\"https://myaccount.mercadolibre.com.ar/summary/\" rel=\"nofollow\"><![endif]-->\n                        Username <i class=\"nav-icon-user\"></i>\n                        <!--[if lt IE 9]></a><![endif]-->\n                    </label>\n                    <input type=\"checkbox\" id=\"nav-header-user-switch\"/>\n                    <nav class=\"nav-header-user-layer\">\n                        <a href=\"https://myaccount.mercadolibre.com.ar/summary/\" rel=\"nofollow\">Mi cuenta</a>\n                        <a href=\"https://www.mercadolibre.com/jms/mla/lgz/logout\" rel=\"nofollow\">Salir</a>\n                    </nav>\n                </div>\n                <a href=\"http://ayuda.mercadolibre.com.ar/\"><i class=\"nav-icon-help\"><span>Ayuda</span></i></a>\n            </nav>\n        </div>\n    </div>\n</header>\n";
  },"useData":true});
this["__templates"]["shipping"] = this["__templates"]["shipping"] || {};
this["__templates"]["shipping"]["address"] = this["__templates"]["shipping"]["address"] || {};
this["__templates"]["shipping"]["address"]["empty"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2>Ingresa una direccion</h2>\n\n<input type=\"number\" name=\"zip_code\" value=\"\"/>\n<a href=\"/address/zipcode\">Buscar</a>\n";
  },"useData":true});
this["__templates"]["shipping"]["address"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <p>\n        <a href=\"#shipping/options/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            "
    + escapeExpression(((helper = (helper = helpers.street || (depth0 != null ? depth0.street : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"street","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"number","hash":{},"data":data}) : helper)))
    + " ("
    + escapeExpression(((helper = (helper = helpers.zip_code || (depth0 != null ? depth0.zip_code : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zip_code","hash":{},"data":data}) : helper)))
    + ")\n        </a>\n\n        <br />\n        "
    + escapeExpression(((helper = (helper = helpers.contact_data || (depth0 != null ? depth0.contact_data : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contact_data","hash":{},"data":data}) : helper)))
    + "\n        <br />\n        "
    + escapeExpression(((helper = (helper = helpers.phone_number || (depth0 != null ? depth0.phone_number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"phone_number","hash":{},"data":data}) : helper)))
    + "\n    </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h2>Elige una direccion</h2>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.addresses : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["__templates"]["shipping"]["custom"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"ch-box-lite\">\n</div>\n";
  },"useData":true});
this["__templates"]["shipping"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "    <li><a href=\"#shipping/method/localpickup\">Retiro en domicilio</a></li>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.shipping : depth0)) != null ? stack1.me : stack1)) != null ? stack1.sucursal : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li><a href=\"#shipping/method/me\">Envio domicilio</a></li>\n";
},"4":function(depth0,helpers,partials,data) {
  return "            <li><a href=\"#shipping/method/me_sucursal\">Retiro en domicilio</a></li>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "        <li><a href=\"#shipping/method/custom\">Envio domicilio</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h2>Formas de entrega</h2>\n\n<ul class=\"ch-form-options\" data-js=\"shipping\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.shipping : depth0)) != null ? stack1.local_pickup : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.shipping : depth0)) != null ? stack1.me : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.shipping : depth0)) != null ? stack1.custom : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</ul>\n";
},"useData":true});
this["__templates"]["shipping"]["options"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a href=\"#shipping/options/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h2>Elige una opcion de envio</h2>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.options : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});