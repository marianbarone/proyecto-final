(()=>{"use strict";var t={913:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={mongodb:{connectionString:"mongodb://localhost:27017/ecommerce"}}},598:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},130:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function c(t){try{i(r.next(t))}catch(t){u(t)}}function a(t){try{i(r.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(583)),a=function(){function t(){}return t.prototype.addProduct=function(t){return r(this,void 0,void 0,(function(){var e,n,r,u;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),console.log("entre al try del container"),e=Math.random().toString(36).substring(2),n=Date.now().toString(36),r=e+n,[4,c.default.doc("".concat(r)).create({title:t.title,description:t.description,code:t.code,thumbnail:t.thumbnail,price:t.price,stock:t.stock})];case 1:return[2,o.sent()];case 2:return u=o.sent(),console.log(u),[3,3];case 3:return[2]}}))}))},t.prototype.getAll=function(){return r(this,void 0,void 0,(function(){var t,e;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,c.default.get()];case 1:return t=n.sent(),[2,t.docs.map((function(t){return{id:t.id,timestamp:t.data().timestamp,nombre:t.data().nombre,descripcion:t.data().descripcion,codigo:t.data().codigo,foto:t.data().foto,precio:t.data().precio,stock:t.data().stock}}))];case 2:return e=n.sent(),console.log(e),[2,[]];case 3:return[2]}}))}))},t.prototype.getById=function(t){return r(this,void 0,void 0,(function(){var e,n,r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,c.default.doc("".concat(t)).get()];case 1:return e=o.sent(),n=e.data(),console.log(n),[2,n];case 2:return r=o.sent(),console.log(r),[2,!1];case 3:return[2]}}))}))},t.prototype.updateById=function(t,e,n){return r(this,void 0,void 0,(function(){var r,u;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n.name=e.name?e.name:n.name,n.description=e.description?e.description:n.description,n.code=e.code?e.code:n.code,n.thumbnail=e.thumbnail?e.thumbnail:n.thumbnail,n.price=e.price?Number(e.price):Number(n.price),n.stock=e.stock?Number(e.stock):Number(n.stock),[4,c.default.doc("".concat(t)).update({name:n.name,description:n.description,code:n.code,thumbnail:n.thumbnail,price:n.price,stock:n.stock})];case 1:return r=o.sent(),console.log(r),[2,r];case 2:return u=o.sent(),console.log(u),[2,!1];case 3:return[2]}}))}))},t.prototype.deleteById=function(t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.default.doc("".concat(t)).delete()];case 1:return e=r.sent(),console.log(e),[2,!0];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}}))}))},t}();e.default=a},258:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function c(t){try{i(r.next(t))}catch(t){u(t)}}function a(t){try{i(r.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(117)),a=u(n(821)),i=function(){function t(){}return t.prototype.createCart=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("entre al try del container"),[4,c.default.create({products:t.products})];case 1:return[2,n.sent()];case 2:return e=n.sent(),console.log(e),[2,!1];case 3:return[2]}}))}))},t.prototype.addProduct=function(t,e){return r(this,void 0,void 0,(function(){var r,u,i,s,l,d,f;return o(this,(function(o){switch(o.label){case 0:r=n(13).ObjectID,u=new r(t),i=new r(e),o.label=1;case 1:return o.trys.push([1,7,,8]),[4,c.default.findById({_id:u})];case 2:return s=o.sent(),[4,a.default.findById({_id:i})];case 3:return l=o.sent(),console.log("selectedCart",s),console.log("productToAdd",l),s&&l?[4,c.default.findOneAndUpdate({selectedCart:s},{$addToSet:{products:l}})]:[3,5];case 4:return d=o.sent(),console.log("updatedDocument",d),[3,6];case 5:console.log("Lo sentimos, no pudimos agregar el producto"),o.label=6;case 6:return[3,8];case 7:return f=o.sent(),console.log(f),[2,!1];case 8:return[2]}}))}))},t.prototype.getAllProducts=function(t){return r(this,void 0,void 0,(function(){var e,r,u;return o(this,(function(o){switch(o.label){case 0:e=n(13).ObjectID,r=new e(t),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,c.default.find({_id:r}).populate({path:"products",select:"timestamp title description code thumbnail price stock"})];case 2:return[2,o.sent()];case 3:return u=o.sent(),console.log(u),[2,[]];case 4:return[2]}}))}))},t.prototype.getCartById=function(t){return r(this,void 0,void 0,(function(){var e,r,u;return o(this,(function(o){switch(o.label){case 0:e=n(13).ObjectID,r=new e(t),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,c.default.findById({_id:r}).populate({path:"products",select:"timestamp title description code thumbnail price stock"})];case 2:return[2,o.sent()];case 3:return u=o.sent(),console.log(u),[2,[]];case 4:return[2]}}))}))},t.prototype.deleteCartById=function(t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.default.findByIdAndDelete(t)];case 1:return e=r.sent(),console.log(e),[2,!0];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}}))}))},t.prototype.deleteProductById=function(t,e){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.default.findByIdAndUpdate(t,{$pull:{productos:e}})];case 1:return[2,r.sent()];case 2:return n=r.sent(),console.log(n),[2,!1];case 3:return[2]}}))}))},t}();e.default=i},22:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function c(t){try{i(r.next(t))}catch(t){u(t)}}function a(t){try{i(r.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n(913)),a=u(n(185)),i=u(n(821));!function(){r(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,a.default.connect(c.default.mongodb.connectionString)];case 1:return t=e.sent(),console.log(t),[3,3];case 2:return e.sent(),console.log("Fallo la conexion con mongoose"),[3,3];case 3:return[2]}}))}))}();var s=function(){function t(){}return t.prototype.addProduct=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("entre al try del container"),[4,i.default.create({title:t.title,description:t.description,code:t.code,thumbnail:t.thumbnail,price:t.price,stock:t.stock})];case 1:return[2,n.sent()];case 2:return e=n.sent(),console.log(e),[3,3];case 3:return[2]}}))}))},t.prototype.getById=function(t){return r(this,void 0,void 0,(function(){var e,r;return o(this,(function(o){switch(o.label){case 0:return e=n(13).ObjectID,r=new e(t),[4,i.default.find({_id:r})];case 1:return[2,o.sent()]}}))}))},t.prototype.getProducts=function(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,i.default.find()];case 1:return[2,e.sent()];case 2:return t=e.sent(),console.log("No existen productos",t),[3,3];case 3:return[2]}}))}))},t.prototype.deleteById=function(t){return r(this,void 0,void 0,(function(){var e,r;return o(this,(function(o){switch(o.label){case 0:return e=n(13).ObjectID,r=new e(t),[4,i.default.deleteOne({_id:r})];case 1:return[2,o.sent()]}}))}))},t.prototype.updateProduct=function(t){return r(this,void 0,void 0,(function(){var e,r;return o(this,(function(o){switch(o.label){case 0:return e=n(13).ObjectID,r=new e(t),[4,i.default.updateOne({_id:r})];case 1:return[2,o.sent()]}}))}))},t}();e.default=s},526:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function c(t){try{i(r.next(t))}catch(t){u(t)}}function a(t){try{i(r.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.deleteProductFromCart=e.addProductToCart=e.getCartProducts=e.deleteCart=e.createCart=void 0;var u=n(971);e.createCart=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r,c;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),console.log("entre al try del controller"),n=t.body,console.log("cartData",n),[4,u.CartDao.createCart(n)];case 1:return r=o.sent(),e.status(201).send("Carrito creado con éxito, id:".concat(r.id)),[2,r];case 2:return c=o.sent(),console.log("Lo sentimos hubo un error ".concat(c)),[3,3];case 3:return[2]}}))}))},e.deleteCart=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=Number(t.params.id),[4,u.CartDao.deleteCart(n)];case 1:return o.sent()?e.status(200).send("Carrito eliminado"):e.status(503).send("No se pudo encontrar el carrito"),[3,3];case 2:return r=o.sent(),console.log("Lo sentimos hubo un error ".concat(r)),[3,3];case 3:return[2]}}))}))},e.addProductToCart=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r,c,a;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=t.params.id,r=t.params.id_prod,[4,u.CartDao.addProduct(n,r)];case 1:return c=o.sent(),console.log(n),console.log(r),console.log(c),c?(e.status(400).send("No se pudo encontrar el producto"),[2,c]):(e.status(201).send("Producto agregado al carrito con éxito"),[2,c]);case 2:return a=o.sent(),console.log("Lo sentimos hubo un error ".concat(a)),[3,3];case 3:return[2]}}))}))},e.getCartProducts=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r,c;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=t.params.id,[4,u.CartDao.getAllProducts(n)];case 1:return(r=o.sent())?e.status(200).send(r):e.status(400).send("Lo siento no pudimos encontrar el carrito con el id: ".concat(n)),[3,3];case 2:return c=o.sent(),console.log("Lo sentimos hubo un error ".concat(c)),[3,3];case 3:return[2]}}))}))},e.deleteProductFromCart=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r,c;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=t.params.id,r=t.params.id_prod,[4,u.CartDao.deleteProductById(n,r)];case 1:return o.sent()?e.status(200).send("Producto del carrito eliminado con éxito"):e.status(400).send("Lo sentimos no pudimos encontrar el producto"),[3,3];case 2:return c=o.sent(),console.log("Lo sentimos hubo un error ".concat(c)),[3,3];case 3:return[2]}}))}))}},295:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function c(t){try{i(r.next(t))}catch(t){u(t)}}function a(t){try{i(r.throw(t))}catch(t){u(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.deleteById=e.updateProduct=e.getById=e.addProductsController=e.getProducts=void 0;var u=n(971);e.getProducts=function(t,e){return r(void 0,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.ProductDao.getProducts()];case 1:return t=r.sent(),e.json(t),[3,3];case 2:return n=r.sent(),console.log("No existen productos",n),[3,3];case 3:return[2]}}))}))},e.addProductsController=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=t.body,console.log(u.ProductDao),[4,u.ProductDao.addProduct(n)];case 1:return r=o.sent(),console.log(r),r?e.status(201).json({msg:"El producto se creo de manera exitosa",data:r}):e.status(400).json("No se pudo agregar el producto"),[3,3];case 2:return o.sent(),console.log("Ocurrio un error al agregar el producto"),[3,3];case 3:return[2]}}))}))},e.getById=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return n=t.params.id,[4,u.ProductDao.getById(n)];case 1:return(r=o.sent())?e.send(r):e.status(404).json({error:"Producto no encontrado!"}),[2]}}))}))},e.updateProduct=function(t,e){return r(void 0,void 0,void 0,(function(){var n,r,c;return o(this,(function(o){switch(o.label){case 0:return n=t.params.id,r=t.body,[4,u.ProductDao.getById(n)];case 1:return(c=o.sent())?[4,u.ProductDao.updateById(n,r,c)]:[3,3];case 2:return o.sent(),e.json({msg:"El producto con el id ".concat(n," fue actualizado con exito")}),[3,4];case 3:e.status(404).json({error:"Producto no encontrado"}),o.label=4;case 4:return[2]}}))}))},e.deleteById=function(t,e){return r(void 0,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return n=t.params.id,[4,u.ProductDao.deleteById(n)];case 1:return r.sent()?e.json("Producto eliminado"):e.status(404).json({error:"Producto no encontrado!"}),[2]}}))}))}},558:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return t.call(this)||this}return o(e,t),e}(u(n(598)).default);e.default=new c},34:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return t.call(this)||this}return o(e,t),e}(u(n(258)).default);e.default=new c},971:function(t,e,n){var r,o,u=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),c=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&u(e,t,n);return c(e,t),e},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};switch(Object.defineProperty(e,"__esModule",{value:!0}),e.CartDao=e.ProductDao=void 0,i(n(142)).default.config(),e.ProductDao=r,e.CartDao=o,process.env.DATABASE){case"firebase":Promise.resolve().then((function(){return a(n(928))})).then((function(t){return e.ProductDao=r=t})),Promise.resolve().then((function(){return a(n(558))})).then((function(t){return e.CartDao=o=t}));break;case"mongodb":Promise.resolve().then((function(){return a(n(500))})).then((function(t){return e.ProductDao=r=t.default})),Promise.resolve().then((function(){return a(n(34))})).then((function(t){return e.CartDao=o=t.default}));break;default:e.ProductDao=r=n(500),e.CartDao=o=n(34)}},928:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return t.call(this)||this}return o(e,t),e}(u(n(130)).default);e.default=new c},500:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return t.call(this)||this}return o(e,t),e}(u(n(22)).default);e.default=new c},457:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.db=void 0;var o=r(n(509)),u=n(487);console.log(u),o.default.initializeApp({credential:o.default.credential.cert(u),databaseURL:"https://nodeecommerce-ab326.firebaseio.com"}),e.db=o.default.firestore(),console.log(e.db),console.log("Se ha establecido la conexion con Firebase"),e.default=o.default},912:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return n()}},117:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(185)),u=o.default.Schema,c=new o.default.Schema({timestamp:{type:Date,default:Date.now()},products:[{type:u.Types.ObjectId,ref:"Product"}]});e.default=o.default.model("Cart",c)},821:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(185)),u=new o.default.Schema({timestamp:{type:Date,default:Date.now()},title:{type:String,default:"No title"},description:{type:String,default:"No description"},code:{type:String,default:"No code"},thumbnail:{type:String,default:"No thumbnail"},price:{type:Number,default:1},stock:{type:Number,default:0}});e.default=o.default.model("Product",u)},583:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(457)).default.firestore().collection("products");e.default=o},479:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=n(295),u=n(526),c=n(860),a=r(n(912)),i=(0,c.Router)();i.get("/products",o.getProducts),i.get("/products/:id",o.getById),i.post("/products",a.default,o.addProductsController),i.put("/products/:id",a.default,o.updateProduct),i.delete("/products/:id",a.default,o.deleteById),i.post("/cart",u.createCart),i.delete("/cart/:id",u.deleteCart),i.get("/cart/:id/products",u.getCartProducts),i.post("/cart/:id/products/:id_prod",u.addProductToCart),i.delete("/cart/:id/products/:id_prod",u.deleteProductFromCart),t.exports=i},728:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(860)),u=n(479);r(n(142)).default.config();var c=(0,o.default)();c.use(o.default.json()),c.use(o.default.urlencoded({extended:!0})),c.use("/api",u),c.use((function(t,e,n){var r={error:"-2",descripcion:"ruta: ".concat(t.url," método: ").concat(t.method," no implementado")};e.status(404).json(r),n()})),c.listen(4e3,(function(){return console.log("Server listening on port: ".concat(4e3))})).on("error",(function(t){return console.log("Oh no! Something is broken on the server: ".concat(t))}))},142:t=>{t.exports=require("dotenv")},860:t=>{t.exports=require("express")},509:t=>{t.exports=require("firebase-admin")},13:t=>{t.exports=require("mongodb")},185:t=>{t.exports=require("mongoose")},487:t=>{t.exports=JSON.parse('{"type":"service_account","project_id":"nodeecommerce-ab326","private_key_id":"1780493c8a14cb020924708463374c56a0a3c42c","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRKp1WOCCK78M8\\nSf3Y+SYecE3AQ+00J2k+fPkk+TtDk6qGXTFAjM322JvPqhY2PD2vxfSjbSwpamhG\\n8TJdm7wb1EaEcGpcK/chgP1F/60BKQWMivHnxS183k+HErjWkuQZKjADshBinJ5A\\ny2DhsucFDU7iM/Wpp5sbM6oG62mKs4llNUlmEPRJcJC0R8r4XCsM3KiaF771Q2Gb\\njy6nUJtHJAYfV6+SHyoDYj0GzIp9zwvF9ACo49XS+dM5DO9jfI08WlBNZIyGDtLs\\nlL+uIQm71wiOjP3EBQGHkz3ZDLoKjoQrZm0UPnoj+5LCt/cvwEO+p/ENo7jBTpOg\\nm75jparVAgMBAAECggEAAgNyTTjYErVCovpvv+uswK1UFr+acae+SPSYzA985/IL\\nYnO2dCu/y5Wzi4zTZAsv29lGDGI+Q5DLQ3ii9zNqx4QJOlsIzqB5fAh6+taSArsb\\n7ZgbxNgySlIXDkuPLsK40TSJl/OHUKbVdxabEGZX1/UYTADmfmTpvNXZnOD1BMx1\\nWRTD/ICdGTv7DLLGPUHN7Lq/Frymu+iFMjPD4G0Dwkr8SI1mZnQMDBIPNIOWvbV5\\nTVJjo2EGfLAF190VALly6LsWy8Ia04gUUCHtLpYvXYTr4mZqMxb0VtTrBvIaxM+b\\ncu+zVg16jNVmstg9BuR98ACY4IB5ZC2OCzu8NxvNoQKBgQDE7Bc3+1PtMrM3GgfO\\ncMJh9ZKMK36znyTFGJlqw3dzzNHRprVWiA94mnb/VgJ2P4P+aZzc0TaEJF8AOzMy\\ndoXwplghh63nmj7QC4GiOgFRebXqzdYYOZAJkxeVFkyY6aOt4tCI45fWIazAV11v\\nw8p9Hs5da7jNe8FzDVl/uo6oeQKBgQC8t5tfolTwCcMvKsZXNIIT2ozoee+nM2he\\nWZJUB6VIV3igLu/PFTNRn4ZXKEH7GDZ9gZotw8a0DRaXUYPhB08laBqJN80Chivd\\npQU6CQB4+auQSPAuDw92L0VYQOIBVBFYzlEY7IyPpNIxQkDv3m/Ey6IhQ3kr3Mz+\\njtCfTY42PQKBgQCEy30g6GCBbZZDi09GXO4Ip1UrJ02rDZ/7NgqHX8dXFQFNczGI\\nZ/qe5vNmXvcMDOsTDt+UXZV46RoTitiMqDbMwTBfdCLHM1I2c/v4jUtESWJvNF2z\\nOmYyvrnBdSc0WyJg6bqdBXXoFg9sKb4913fehn69qx4Vm+YpkxAOvZzkaQKBgFXs\\nRwrY71FHMJ42HI4x8xO1CzkB47K9/kQPBkfKH1/7q4lLNZaUsYP1XQYr5za7BHxK\\nWPeDTuJFn0aQL7pySH/gkUxuoqIGksxcyS9uT8/E5W9RNkHSS5jk1u7iw8QVEbzc\\nWyI8+ZahVa5l2wkbvsncaVo5zV7CLnescKJHfnuFAoGAe2hWraxf/3WrYXWvUwEE\\nwgWyYYSKgqQjmWSc+1eQAmSgjKaXw2gSEk1P+bK6/e9/5SlwDf6X4WOR+IwJ7Ql2\\nh9QGmAPpVTK4Ml4hRb2QjhXlfCuDli+WUhjVG8T+wqCqihEFyynaQMWchxapLBdr\\n3vZT3o+/8sFCd+hvzAi4epQ=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-yz8l7@nodeecommerce-ab326.iam.gserviceaccount.com","client_id":"108572125430898665670","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yz8l7%40nodeecommerce-ab326.iam.gserviceaccount.com"}')}},e={};!function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r].call(u.exports,u,u.exports,n),u.exports}(728)})();