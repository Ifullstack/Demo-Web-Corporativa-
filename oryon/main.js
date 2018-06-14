(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section/section.component */ "./src/app/components/section/section.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/servicios/servicios.component */ "./src/app/pages/servicios/servicios.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_administrador_administrador_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/administrador/administrador.component */ "./src/app/pages/administrador/administrador.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar2/navbar2.component */ "./src/app/components/navbar2/navbar2.component.ts");
/* harmony import */ var _pages_startup_registro_startup_registro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/startup-registro/startup-registro.component */ "./src/app/pages/startup-registro/startup-registro.component.ts");
/* harmony import */ var _pages_entidad_registro_entidad_registro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/entidad-registro/entidad-registro.component */ "./src/app/pages/entidad-registro/entidad-registro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Rutas

// Componentes















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__["ServiciosComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"],
                _pages_administrador_administrador_component__WEBPACK_IMPORTED_MODULE_13__["AdministradorComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_navbar2_navbar2_component__WEBPACK_IMPORTED_MODULE_15__["Navbar2Component"],
                _pages_startup_registro_startup_registro_component__WEBPACK_IMPORTED_MODULE_16__["StartupRegistroComponent"],
                _pages_entidad_registro_entidad_registro_component__WEBPACK_IMPORTED_MODULE_17__["EntidadRegistroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["APP_ROUTES"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/servicios/servicios.component */ "./src/app/pages/servicios/servicios.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_startup_registro_startup_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/startup-registro/startup-registro.component */ "./src/app/pages/startup-registro/startup-registro.component.ts");
/* harmony import */ var _pages_entidad_registro_entidad_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/entidad-registro/entidad-registro.component */ "./src/app/pages/entidad-registro/entidad-registro.component.ts");

// Pages








var ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'contacto', component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_1__["ContactoComponent"] },
    { path: 'blog', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
    { path: 'servicios', component: _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_3__["ServiciosComponent"] },
    { path: 'corporacion', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"] },
    { path: 'startup', component: _pages_startup_registro_startup_registro_component__WEBPACK_IMPORTED_MODULE_7__["StartupRegistroComponent"] },
    { path: 'entidad', component: _pages_entidad_registro_entidad_registro_component__WEBPACK_IMPORTED_MODULE_8__["EntidadRegistroComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#texto3 {\r\n    font-style: italic bold;\r\n    color: rgb(202, 135, 9);\r\n}\r\n\r\n#texto3:hover {\r\n    cursor: pointer;\r\n    color: rgb(255, 174, 0);\r\n}\r\n\r\n#icons i:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n#icons i {\r\n    margin-left: 10px;\r\n}\r\n\r\n#footer {\r\n    margin-top: 20px;\r\n}\r\n\r\n#card:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n#card {\r\n    margin-top: 10px;\r\n}\r\n\r\n.card-body2 {\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffa84c+0,ffa84c+0,ffa84c+1,fff9f4+10,fff9f4+93,ff7b0d+100 */\r\n    background: rgb(255, 168, 76);\r\n    /* Old browsers */\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(135deg, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 1%, rgba(255, 249, 244, 1) 10%, rgba(255, 249, 244, 1) 93%, rgba(255, 123, 13, 1) 100%);\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n}\r\n\r\n#contacto {\r\n    background-color: rgb(223, 148, 8);\r\n}\r\n\r\n#forgot:hover {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"card border-warning text-dark text-center\">\n\n    <div class=\"bg-dark text-center\">\n        <div class=\"row bg-dark\">\n            <div class=\"col bg-dark\">\n                <div class=\"card-header bg-dark text-white\">\n                    <h5 class=\"card-title\">ORYON UNIVERSAL ltd</h5>\n                </div>\n                <div class=\"card-body bg-dark text-white\">\n\n                    <h6 id=\"texto3\" class=\"card-text\">DIRECCIÓN:</h6>\n                    <h6 id=\"texto3\" class=\"card-text\">ESTA ES MI DIRECCIÓN</h6>\n                    <h6 id=\"texto3\" class=\"card-text\">EMAIL:</h6>\n                    <h6 id=\"texto3\" class=\"card-text\">ESTE ES MI EMAIL</h6>\n                    <hr>\n                    <h6 routerLinkActive [routerLink]=\"['/servicios']\" id=\"texto3\">CONSULTORÍA ESTRATEGIA Y DESARROLLO DE NEGOCIO</h6>\n                    <h6 routerLinkActive [routerLink]=\"['/servicios']\" id=\"texto3\">CONSULTORíA Y SERVICIOS CORPORATE VENTURING</h6>\n                    <h6 routerLinkActive [routerLink]=\"['/servicios']\" id=\"texto3\">CONSULTORíA TECNOLOGÍCA</h6>\n                    <a><h6 id=\"texto3\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">POLÍTICA DE PRIVACIDAD</h6></a>\n\n                    <h6 id=\"texto3\" data-toggle=\"modal\" data-target=\"#exampleModalLong2\">POLÍTICA DE COOKIES</h6>\n                   \n                    <h6 id=\"texto3\">&copy;ORYON UNIVERSAL ltd. All rights reserved.</h6>\n                    <div id=\"icons\" style=\"color:rgb(223, 148, 8)\">\n                        <i class=\"fab fa-facebook-square fa-2x\"></i>\n                        <i class=\"fab fa-linkedin fa-2x\"></i>\n                        <i class=\"fab fa-twitter-square fa-2x\"></i>\n\n                    </div>\n                </div>\n\n            </div>\n            <div id=\"login\" class=\"col bg-dark\">\n                <div id=\"card\" class=\"card \" style=\"width: 16rem;\">\n                    <img class=\"card-img-top\" src=\"assets/img/inversor.png\">\n                    <div class=\"card-body card-body2\">\n                        <form class=\"form-horizontal form-material \">\n                            <div class=\"form-group\">\n                                <div>\n                                    <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Username\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div>\n                                    <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div>\n                                    <a class=\"text-dark pull-right text-center\"><i id=\"forgot\" class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a> </div>\n                            </div>\n                            <div class=\"form-group text-center\">\n                                <div class=\"col-xs-6\">\n                                    <button id=\"contacto\" class=\"btn btn-block text-uppercase btn-rounded\" type=\"submit\">Ingresar</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n\n    </div>\n    <!-- Button trigger modal -->\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">POLÍTICA DE PRIVACIDAD</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>\n                    El presente Política de Privacidad establece los términos en que Oryon Universal usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.\n\n                    Información que es recogida\n                    \n                    Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.\n                    \n                    Uso de la información recogida\n                    \n                    Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.\n                    \n                    Oryon Universal está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.\n              </p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">CERRAR</button>\n             \n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal fade\" id=\"exampleModalLong2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">POLÍTICA DE COOKIES</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                        Cookies\n                        <br>\n                        Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.\n                        \n                        Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente, visitas a una web . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.\n                        <br>\n                        Enlaces a Terceros\n                        <br>\n                        Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de click en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.\n                        \n                        Control de su información personal\n                        <br>\n                        En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.\n                        \n                        Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.\n                        \n                        Oryon Universal Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">CERRAR</button>\n                  \n                </div>\n              </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video_background {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    position: relative;\r\n    margin-left: 0px;\r\n}\r\n\r\n#bloque {\r\n    margin-top: -300px;\r\n    position: relative;\r\n}\r\n\r\n#container {\r\n    width: 110%;\r\n    margin-left: -40px;\r\n}\r\n\r\n#texto {\r\n    margin-top: 50px;\r\n    color: rgb(223, 148, 8);\r\n}\r\n\r\n#texto2 {\r\n    font-style: italic;\r\n}\r\n\r\n#icons i:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n#icons i {\r\n    margin-left: 10px;\r\n}\r\n\r\n#nosotros {\r\n    margin-top: 20px;\r\n    background-color: rgb(223, 148, 8);\r\n}\r\n\r\nbutton:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#back {\r\n    z-index: -1;\r\n    position: relative;\r\n    width: 300px;\r\n    height: 600px;\r\n    margin-left: 915px;\r\n}\r\n\r\n#back2 {\r\n    width: 100% -webkit-fit-content;\r\n    width: 100% -moz-fit-content;\r\n    width: 100% fit-content;\r\n    height: 100px;\r\n    /*margin-left: -100px;*/\r\n    margin-bottom: -270px;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"row container-fluid\">\n\n    <div id=\"container\" class=\"col-12 container-fluid\">\n\n        <video autoplay=\"autoplay\" loop=\"loop\" id=\"video_background\" preload=\"auto\">\n          \n                    <source src=\"assets/video/oryonC.mp4\" type=\"video/mp4\"/>\n        </video>\n        <div id=\"bloque\" class=\"text-center\">\n            <h4 id=\"texto\" class=\"stroke\">\n                <h1> ORYON UNIVERSAL </h1>\n\n                <h5 id=\"texto2\"> Somos una consultora de innovación que conecta startups y corporaciones <br> interesadas en la innovación incremental o disruptiva.</h5>\n            </h4>\n\n            <div class=\"text-center\" id=\"icons\" style=\"color:rgb(223, 148, 8)\">\n                <i class=\"fab fa-facebook-square fa-2x\"></i>\n                <i class=\"fab fa-linkedin fa-2x\"></i>\n                <i class=\"fab fa-twitter-square fa-2x\"></i>\n\n            </div>\n            <button id=\"nosotros\" type=\"button\" class=\"btn text-center\">SOBRE NOSOTROS</button>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<app-header></app-header>\n<!--<app-navbar></app-navbar>-->\n<br>\n<app-section></app-section>\n\n<br><br><br><br><br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar a {\r\n    color: rgb(223, 148, 8);\r\n    box-shadow: 5px black;\r\n}\r\n\r\n#navbar {\r\n    /*margin-left: 700px;*/\r\n    margin-bottom: -100px;\r\n    position: relative;\r\n}\r\n\r\n#logo {\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 10px;\r\n}\r\n\r\n#navbar a:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n#navbar li a:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-light bg-transparent\">\n    <img id=\"logo\" src=\"assets/img/logoTest.png\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">ORYON UNIVERSAL</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/servicios']\">SERVICIOS </a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/blog']\">BLOG</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/contacto']\">CONTACTO</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav {\r\n    background-color: rgb(223, 148, 8);\r\n}\r\n\r\n#nav a {\r\n    color: white;\r\n}\r\n\r\n#nav a:hover {\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img src=\"assets/img/logoTest.png\" width=\"40\" height=\"40\">\n    </a>\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">ORYON UNIVERSAL</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/servicios']\">SERVICIOS</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/blog']\">BLOG</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/contacto']\">CONTACTO</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar2/navbar2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar2/navbar2.component.ts ***!
  \*********************************************************/
/*! exports provided: Navbar2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar2Component", function() { return Navbar2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Navbar2Component = /** @class */ (function () {
    function Navbar2Component() {
    }
    Navbar2Component.prototype.ngOnInit = function () {
    };
    Navbar2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar2',
            template: __webpack_require__(/*! ./navbar2.component.html */ "./src/app/components/navbar2/navbar2.component.html"),
            styles: [__webpack_require__(/*! ./navbar2.component.css */ "./src/app/components/navbar2/navbar2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Navbar2Component);
    return Navbar2Component;
}());



/***/ }),

/***/ "./src/app/components/section/section.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/section/section.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n#card {\r\n    margin-top: 10px;\r\n}\r\n\r\n.card-body {\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffa84c+0,ffa84c+0,ffa84c+1,fff9f4+10,fff9f4+93,ff7b0d+100 */\r\n    background: rgb(255, 168, 76);\r\n    /* Old browsers */\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(135deg, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 1%, rgba(255, 249, 244, 1) 10%, rgba(255, 249, 244, 1) 93%, rgba(255, 123, 13, 1) 100%);\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n}\r\n\r\n#contacto {\r\n    background-color: rgb(223, 148, 8);\r\n}\r\n\r\n#section {\r\n    margin-top: 100px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\nbutton:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#icons i:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n#icons i {\r\n    margin-left: 10px;\r\n}\r\n\r\n#face {\r\n    margin-left: 80px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#parrafo {\r\n    color: rgb(156, 101, 5);\r\n    font-size: 17px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-style: italic;\r\n}\r\n\r\n#banner1 {\r\n    margin-top: 30px;\r\n}\r\n\r\n#barca {\r\n    opacity: 0.8;\r\n}\r\n\r\n#titleB {\r\n    color: rgba(255, 168, 76, 1);\r\n}\r\n\r\n#textoB {\r\n    color: rgb(253, 227, 171);\r\n    border-color: 5px black;\r\n}\r\n\r\n#video_background {\r\n    width: 350px;\r\n    height: 200px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#videoC {\r\n    margin-top: 50px;\r\n}\r\n\r\n#lateral {\r\n    color: rgb(223, 148, 8);\r\n    font-style: italic;\r\n    border-radius: 20px;\r\n}\r\n\r\n#madridT {\r\n    color: rgb(223, 148, 8);\r\n}\r\n\r\n#videoText {\r\n    color: rgb(223, 148, 8);\r\n}"

/***/ }),

/***/ "./src/app/components/section/section.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/section/section.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"section\" class=\"container text-center\">\n    <!--<img id=\"back\" src=\"assets/img/back.jpg\">-->\n    <div id=\"tarjetas\" class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col\" text-center>\n                <div id=\"card\" class=\"card text-center \" style=\"width: 20rem;\">\n                    <img class=\"card-img-top\" src=\"assets/img/corporacion.jpg\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">SOY UNA GRAN CORPORACIÓN</h5>\n\n                        <button [routerLink]=\"['/corporacion']\" id=\"contacto\" class=\"btn\">Contáctanos</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col\" text-center>\n\n                <div id=\"card\" class=\"card text-center\" style=\"width: 20rem;\">\n                    <img class=\"card-img-top\" src=\"assets/img/emprendedor.png\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">SOY UNA STARTUP</h5>\n\n                        <button [routerLink]=\"['/startup']\" id=\"contacto\" class=\"btn\">Contáctanos</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col\" text-center>\n\n                <div id=\"card\" class=\"card text-center\" style=\"width: 20rem;\">\n                    <img class=\"card-img-top\" src=\"assets/img/inversor.png\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">SOY UN INVERSOR O ENTIDAD DE INVERSIÓN</h5>\n                        <button [routerLink]=\"['/entidad']\" id=\"contacto\" class=\"btn\">Contáctanos</button>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n        <div class=\"container-fluid animated fadeInUp\">\n            <div id=\"banner1\" class=\"card text-white \">\n                <img id=\"barca\" class=\"card-img\" src=\"assets/img/barca.jpg\">\n                <div class=\"card-img-overlay text-center\">\n                    <h2 id=\"titleB\" class=\"card-title\">ORYON UNIVERSAL</h2>\n                    <p id=\"textoB\" class=\"card-text text-uppercase font-weight-bold  border-dark\">\n                        Es una Consultora de Innovación que conecta Startups y Corporaciones interesadas en la innovación incremental o disruptiva. Oryon selecciona, acompaña, acelera e impulsa a las mejores Startups con el fin último de presentarlas y conectarlas a organizaciones\n                        y/o instituciones (corporate venturing). </p>\n\n                </div>\n            </div>\n        </div>\n\n        <div id=\"videoC\" class=\"container\">\n            <div class=\"row\">\n                <div id=\"lateral\" class=\"col align-self-start shadow-lg p-3 mb-5 bg-dark rounded text-uppercase font-weight-bold animated fadeInLeft \">\n                    <p>\n                        Toda compañía con voluntad de reinventarse para mantener una ventaja competitiva que garantice la sostenibilidad de su crecimiento, debería contemplar una estrategia de innovación que le permita capturar los procesos disruptivos que redefinen los modelos\n                        de negocio. Para ello una corporación puede y debe usar ideas y propuestas tanto internas como externas, así como caminos internos y externos al mercado, procurando estar siempre actualizados tecnológicamente.\n                    </p>\n                </div>\n                <div class=\"col align-self-center shadow-lg p-3 mb-5 bg-white rounded animated fadeInUp\">\n                    <h5 id=\"videoText\">VIDEO CORPORATE</h5>\n                    <video id=\"video_background\" controls class=\"border border-warning\">\n          \n                                <source  id=\"video\" src=\"assets/video/oryon.mp4\" type=\"video/mp4\" />\n                        </video>\n                </div>\n                <div id=\"lateral\" class=\"col align-self-end shadow-lg p-3 mb-5 bg-dark rounded text-uppercase font-weight-bold animated fadeInRight\">\n                    En esta línea, el corporate venturing permite tender puentes entre startups y corporaciones de manera que la empresa no quede fuera de juego en esta época en la que los procesos disruptivos están al orden del día.Así pues el Corporate Venturing forma\n                    parte de de la estrategia de innovación global y consiste en una fórmula según la cual la corporación colabora con Startups a través de un amplio rango de herramientas y modelos que aportan resultados increíblemente positivos para\n                    ambos lados de la ecuación.\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h2 id=\"madridT\" class=\"card-title text-uppercase font-weight-bold\">CORPORATE VENTURING</h2>\n                <p id=\"madridT\" class=\"card-text text-uppercase font-weight-bold\">El corporate venturing es más relevante que nunca porque permite apalancar las capacidades de startups y corporaciones de manera que extrae lo mejor de cada mundo: modelos de negocio \"frescos\", tecnología e innovación por parte de las\n                    startups y la experiencia de las corporaciones que permite escalar las soluciones y procesos para alcanzar nuevos mercados.</p>\n            </div>\n            <img class=\"card-img-bottom\" src=\"assets/img/madrid.jpg\">\n        </div>"

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/components/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.css */ "./src/app/components/section/section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/administrador/administrador.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/administrador/administrador.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/administrador/administrador.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/administrador/administrador.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  administrador works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/administrador/administrador.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/administrador/administrador.component.ts ***!
  \****************************************************************/
/*! exports provided: AdministradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorComponent", function() { return AdministradorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdministradorComponent = /** @class */ (function () {
    function AdministradorComponent() {
    }
    AdministradorComponent.prototype.ngOnInit = function () {
    };
    AdministradorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administrador',
            template: __webpack_require__(/*! ./administrador.component.html */ "./src/app/pages/administrador/administrador.component.html"),
            styles: [__webpack_require__(/*! ./administrador.component.css */ "./src/app/pages/administrador/administrador.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdministradorComponent);
    return AdministradorComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#col-9 {\r\n    margin-top: 20px;\r\n}\r\n\r\n#col-3 {\r\n    margin-top: 20px;\r\n}\r\n\r\n#nav {\r\n    margin-top: 20px;\r\n    color: rgb(230, 138, 40);\r\n}\r\n\r\n#nav2 {\r\n    color: rgb(230, 138, 40);\r\n}\r\n\r\n#nav2:hover {\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n#title {\r\n    color: rgb(230, 138, 40);\r\n}\r\n\r\n#article {\r\n    margin-top: 20px;\r\n}\r\n\r\n#card:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n#card {\r\n    margin-top: 10px;\r\n}\r\n\r\n.card-body {\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffa84c+0,ffa84c+0,ffa84c+1,fff9f4+10,fff9f4+93,ff7b0d+100 */\r\n    background: rgb(255, 168, 76);\r\n    /* Old browsers */\r\n    /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(135deg, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 0%, rgba(255, 168, 76, 1) 1%, rgba(255, 249, 244, 1) 10%, rgba(255, 249, 244, 1) 93%, rgba(255, 123, 13, 1) 100%);\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n}"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div id=\"col-9\" class=\"col-9\">\r\n            <div id=\"article\" class=\" text-center\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"assets/img/corp.jpg\">\r\n                    <div class=\"card-body\">\r\n                        <h5 id=\"title\" class=\"card-title text-uppercase\">Importancia del Corporate Venturing hoy en día</h5>\r\n                        <p class=\"card-text\"> Este es un blog de ejemplo para dar información acerca de nuestros servicios</p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"article\" class=\" text-center\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"assets/img/corp2.jpg\">\r\n                    <div class=\"card-body\">\r\n                        <h5 id=\"title\" class=\"card-title text-uppercase\">Convierte tu empresa en líder del sector</h5>\r\n                        <p class=\"card-text\"> Este es un blog de ejemplo para dar información acerca de nuestros servicios</p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"article\" class=\" text-center\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"assets/img/corp3.jpg\">\r\n                    <div class=\"card-body\">\r\n                        <h5 id=\"title\" class=\"card-title text-uppercase\">\r\n                            Cómo conectamos startups desde Barcelona & Madrid a todo el mundo\r\n                        </h5>\r\n                        <p class=\"card-text\"> Este es un blog de ejemplo para dar información acerca de nuestros servicios</p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!--col-9-->\r\n\r\n        <div id=\"col-3\" class=\"col-3 text-center\">\r\n            <h3 id=\"title\">ÚLTIMOS POST</h3>\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"assets/img/corp.jpg\">\r\n                <div class=\"card-body\">\r\n                    <p class=\"card-text text-uppercase\">\r\n                        Importancia del Corporate Venturing hoy en día\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!--col-3-->\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<nav id=\"nav\" aria-label=\"Page navigation example\">\r\n    <ul class=\"pagination justify-content-end\">\r\n        <li class=\"page-item\">\r\n            <a id=\"nav2\" class=\"page-link\" tabindex=\"-1\">Anterior</a>\r\n        </li>\r\n        <li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n        <li class=\"page-item\"><a class=\"page-link\">3</a></li>\r\n        <li class=\"page-item\">\r\n            <a id=\"nav2\" class=\"page-link\">Siguiente</a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n\r\n<br><br><br><br>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapC {\r\n    margin-top: 20px;\r\n}\r\n\r\n#formC {\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\r\n\r\n<div id=\"formC\" class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h3>Formulario de Contacto</h3>\r\n            <br>\r\n            <form>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputEmail4\">Nombre</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Nombre\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputPassword4\">Apellidos</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Apellidos\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputAddress\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"inputAddress\" placeholder=\"e mail\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputAddress2\">Empresa</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\">\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"inputCity\">Motivo de Contacto</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputCity\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-2\">\r\n                        <label for=\"inputZip\">Teléfono</label>\r\n                        <input type=\"tel\" class=\"form-control\" id=\"inputZip\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"form-check\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\r\n                        <label class=\"form-check-label\" for=\"gridCheck\">\r\n                              Acepto la Política de Privacidad\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-dark\">Enviar</button>\r\n            </form>\r\n\r\n\r\n        </div>\r\n        <!--col-12-->\r\n    </div>\r\n    <!--row-->\r\n</div>\r\n<!--container-->\r\n\r\n<div id=\"mapC\" class=\"container-fluid text-center\">\r\n    <div class=\"row text-center\">\r\n        <div class=\"col-8 \">\r\n            <h4>Nuestra Ubicación</h4>\r\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.8580717776767!2d2.2003548147455847!3d41.42059950189959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a334e993f513%3A0xa322672ff22c6f4b!2sRambla+de+Guip%C3%BAscoa%2C+Barcelona!5e0!3m2!1sit!2ses!4v1528956026607\"\r\n                width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>\r\n            </iframe>\r\n        </div>\r\n        <!--col-6-->\r\n        <div class=\"col-4\">\r\n            <h5>SUSCRÍBETE A NUESTRA NEWSLETTER</h5>\r\n            <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Tu email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n            <div class=\"input-group mb-3\">\r\n\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\r\n                    </div>\r\n                </div>\r\n                &nbsp;\r\n                <h6>Acepto la Política de Privacidad</h6>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-dark\">Enviar</button>\r\n        </div>\r\n    </div>\r\n    <!--row-->\r\n</div>\r\n\r\n<br><br><br><br>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/pages/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/pages/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/pages/entidad-registro/entidad-registro.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/entidad-registro/entidad-registro.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#contacto {\r\n    background-color: rgb(223, 148, 8);\r\n    margin-top: 20px;\r\n}\r\n\r\n#img {\r\n    border-radius: 20px;\r\n}\r\n\r\n#form {\r\n    margin-top: 50px;\r\n}\r\n\r\n#headerImg {\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/pages/entidad-registro/entidad-registro.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/entidad-registro/entidad-registro.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<div class=\"card mb-3 text-center animated fadeIn\">\n    <img id=\"headerImg\" class=\"card-img-top\" src=\"assets/img/inversora.jpg\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title text-weight-bold\">SOY UNA ENTIDAD INVERSORA O INVERSOR</h3>\n        <!--<p class=\"card-text\">\n            Si eres una startup y necesitas Asesoramiento, Acompañamiento o Inversión. Contáctanos!!\n        </p>-->\n\n    </div>\n</div>\n<hr>\n\n<div class=\"container-fluid text-center animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <img id=\"img\" class=\"card-img-top\" src=\"assets/img/inver.jpg\">\n        </div>\n        <div class=\"col\">\n\n            <form id=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Nombre:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Apellidos:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Nombre de Empresa:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"E-Mail:\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput2\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Teléfono:\">\n                </div>\n                <br>\n                <select class=\"custom-select\">\n                            \n                            <option selected>Tipo de inversor:</option>\n                            <option value=\"1\">Family Office</option>\n                            <option value=\"2\">Venture Capital</option>\n                            <option value=\"1\">Fondo de Inversión</option>\n                            <option value=\"2\">Business Angel</option>\n                </select>\n                <br> <br>\n                <select class=\"custom-select\">\n                            \n                    <option selected>En qué estás interesado?</option>\n                    <option value=\"1\">Consultoría</option>\n                    <option value=\"2\">Inversiones</option>\n                </select>\n                <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Otros:\">\n                <br>\n                <button id=\"contacto\" class=\"btn btn-lg btn-block\">Enviar</button>\n            </form>\n\n        </div>\n    </div>\n\n    <br><br><br><br>\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/entidad-registro/entidad-registro.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/entidad-registro/entidad-registro.component.ts ***!
  \**********************************************************************/
/*! exports provided: EntidadRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntidadRegistroComponent", function() { return EntidadRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntidadRegistroComponent = /** @class */ (function () {
    function EntidadRegistroComponent() {
    }
    EntidadRegistroComponent.prototype.ngOnInit = function () {
    };
    EntidadRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entidad-registro',
            template: __webpack_require__(/*! ./entidad-registro.component.html */ "./src/app/pages/entidad-registro/entidad-registro.component.html"),
            styles: [__webpack_require__(/*! ./entidad-registro.component.css */ "./src/app/pages/entidad-registro/entidad-registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntidadRegistroComponent);
    return EntidadRegistroComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#contacto {\r\n    background-color: rgb(223, 148, 8);\r\n    margin-top: 20px;\r\n}\r\n\r\n#img {\r\n    border-radius: 20px;\r\n}\r\n\r\n#form {\r\n    margin-top: 50px;\r\n}\r\n\r\n#headerImg {\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/pages/registro/registro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/registro/registro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<div class=\"card mb-3 text-center animated fadeIn\">\n    <img id=\"headerImg\" class=\"card-img-top\" src=\"assets/img/empresa.jpg\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title text-weight-bold\">SOY UNA GRAN CORPORACIÓN</h3>\n        <p class=\"card-text\">\n            Si eres una Empresa y necesitas de nuestros Servicios contacta con nosotros.\n        </p>\n\n    </div>\n</div>\n<hr>\n\n<div class=\"container-fluid text-center animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <img id=\"img\" class=\"card-img-top\" src=\"assets/img/mapa.png\">\n        </div>\n        <div class=\"col\">\n\n            <form id=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Nombre:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Apellidos:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"E-Mail:\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput2\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Teléfono:\">\n                </div>\n                <br>\n                <select class=\"custom-select\">\n                            <option selected>En qué estás interesado?</option>\n                            <option value=\"1\">Consultoría de Desarrollo de Negocio</option>\n                            <option value=\"2\">Corporate Venturing</option>\n                            <option value=\"3\">Consultoria Estratégica</option>\n                            <option value=\"3\">Consultoria de Innovación</option>\n                            <option value=\"3\">Consultoria Tecnológica</option>\n                    </select>\n                <br>\n                <button id=\"contacto\" class=\"btn btn-lg btn-block\">Enviar</button>\n            </form>\n\n        </div>\n    </div>\n\n    <br><br><br><br>\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistroComponent = /** @class */ (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/pages/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/pages/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nosotros {\r\n    background-color: rgb(223, 148, 8);\r\n    color: white;\r\n}\r\n\r\n#nosotros:hover {\r\n    box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.24), 0 15px 30px 0 rgba(0, 0, 0, 0.16);\r\n    color: black;\r\n}\r\n\r\n#botonHerra:hover {\r\n    box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.24), 0 15px 30px 0 rgba(0, 0, 0, 0.16);\r\n    color: black;\r\n}\r\n\r\n#card:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n#cardBloque {\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#img {\r\n    opacity: 0.7;\r\n}\r\n\r\n#title {\r\n    color: rgb(223, 148, 8);\r\n    margin-top: 150px;\r\n    font-weight: 900;\r\n}\r\n\r\n#texto {\r\n    color: rgb(223, 148, 8);\r\n    font-style: italic;\r\n}\r\n\r\n#card-text {\r\n    margin-top: 5px;\r\n}\r\n\r\n#sections {\r\n    margin-top: 10px;\r\n}\r\n\r\n#title2 {\r\n    color: rgb(223, 148, 8);\r\n    margin-top: 50px;\r\n    font-weight: 900;\r\n}\r\n\r\n#tarjetas {\r\n    margin-top: 30px;\r\n}\r\n\r\n#mercado {\r\n    margin-top: 20px;\r\n}\r\n\r\n#trophy {\r\n    color: blue;\r\n}\r\n\r\n#herra {\r\n    margin-bottom: 40px;\r\n    margin-left: 970px;\r\n}\r\n\r\n#imgTecno {\r\n    height: 400px;\r\n}\r\n\r\n#App {\r\n    margin-top: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#App h3 {\r\n    color: rgb(223, 148, 8);\r\n}\r\n\r\n#texto3:hover {\r\n    color: rgb(223, 148, 8);\r\n}\r\n\r\n#icons i:hover {\r\n    color: rgb(255, 174, 0);\r\n    cursor: pointer;\r\n}\r\n\r\n#icons i {\r\n    margin-left: 10px;\r\n}\r\n\r\n#footer {\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<img class=\"card-img-top animated fadeIn\" src=\"assets/img/emprendedor2.jpg\" alt=\"Card image cap\">\n<div id=\"cardBloque\" class=\"card-deck\">\n    <div id=\"card\" class=\"card animated fadeInLeft\">\n        <img class=\"card-img-top\" src=\"assets/img/consultoria.png\">\n        <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">CONSULTORÍA ESTRATEGIA Y DESARROLLO DE NEGOCIO</h5>\n            <p class=\"card-text\">\n                Ofrecemos servicios a Pymes y grandes a Empresas. Acompañamiento en la definición de la Estrategia Empresarial.\n            </p>\n        </div>\n        <div class=\"card-footer text-center\">\n            <button (click)=\"activarConsultoria()\" id=\"nosotros\" type=\"button\" class=\"btn text-center\">QUIERO CONOCER MÁS</button>\n        </div>\n    </div>\n    <div id=\"card\" class=\"card animated fadeInLeft\">\n        <img class=\"card-img-top\" src=\"assets/img/consultoria2.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">CONSULTORÍA Y SERVICIOS CORPORATE VENTURING</h5>\n            <p class=\"card-text\">\n                Ofrecemos Servicios de Emprendimiento Competitivo “EXTERNAL CORPORATE VENTURING”\n            </p>\n        </div>\n        <div class=\"card-footer text-center\">\n            <button (click)=\"activarVenturing()\" id=\"nosotros\" type=\"button\" class=\"btn text-center\">QUIERO CONOCER MÁS</button>\n        </div>\n    </div>\n    <div id=\"card\" class=\"card animated fadeInLeft\">\n        <img class=\"card-img-top\" src=\"assets/img/consultoria3.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body text-center\">\n            <h5 class=\"card-title\">CONSULTORÍA TECNOLÓGICA\n            </h5>\n            <p class=\"card-text\">\n                Ofrecemos Servicios de Consultoría Tecnológica\n            </p>\n        </div>\n        <div class=\"card-footer text-center\">\n            <button (click)=\"activarTecno()\" id=\"nosotros\" type=\"button\" class=\"btn text-center\">QUIERO CONOCER MÁS</button>\n        </div>\n    </div>\n</div>\n\n<hr>\n\n<div id=\"sections\" class=\"animated fadeInDownBig\" *ngIf=\"consultoria\">\n    <div class=\"card text-orange\">\n        <img id=\"img\" class=\"card-img\" src=\"assets/img/back.jpg\">\n        <div class=\"card-img-overlay\">\n            <h5 id=\"title\" class=\"card-title\">CONSULTORÍA ESTRATEGIA Y DESARROLLO DE NEGOCIO</h5>\n            <p id=\"texto\" class=\"card-text\">\n                Ofrecemos servicios a Pymes y grandes a Empresas.<br> Acompañamiento en la definición de la Estrategia Empresarial.\n            </p>\n        </div>\n    </div>\n\n    <div id=\"mercado\" class=\"card-group animated fadeInDown\">\n        <div class=\"card text-center\">\n            <img class=\"card-img-top\" src=\"assets/img/mapa.png\">\n            <div class=\"card-body text-center\">\n                <h3 class=\"card-title\">\n                    Estudios de Mercado\n                </h3>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-chart-pie fa-lg\"></i> Análisis de Mercado\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-chart-pie fa-lg\"></i> Estudio de la Competencia\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-chart-pie fa-lg\"></i> Definición Valor Competerial\n                </h5>\n\n            </div>\n        </div>\n        <div class=\"card text-center animated fadeIn\">\n            <img class=\"card-img-top\" src=\"assets/img/negocio.jpg\">\n            <div class=\"card-body text-center\">\n                <h3 class=\"card-title text-center\">\n                    Business plan\n                </h3>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-briefcase fa-lg\"></i> Pitch - Deck\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-briefcase fa-lg\"></i> Canvas\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-briefcase fa-lg\"></i> Plan Financiero\n                </h5>\n\n            </div>\n        </div>\n        <div class=\"card text-center animated fadeIn\">\n            <img class=\"card-img-top\" src=\"assets/img/map.jpg\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">\n                    Acompañamiento\n                </h3>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-hands-helping fa-lg\"></i> Estrategia\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-hands-helping fa-lg\"></i> MKT\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-hands-helping fa-lg\"></i> Tecnología\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-hands-helping fa-lg\"></i> Comercial\n                </h5>\n                <h5 id=\"card-text\" class=\"card-text text-center\">\n                    <i id=\"pie\" class=\"fas fa-hands-helping fa-lg\"></i> Financiero\n                </h5>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div *ngIf=\"venturing\" id=\"sections\" class=\"animated fadeInDown\">\n    <div class=\"card text-orange\">\n        <img id=\"img\" class=\"card-img\" src=\"assets/img/emprendedor2.png\">\n        <div class=\"card-img-overlay\">\n            <h5 id=\"title2\" class=\"card-title\">CONSULTORÍA Y SERVICIOS CORPORATE VENTURING</h5>\n            <p id=\"texto\" class=\"card-text\">\n                Ofrecemos Servicios de Emprendimiento Competitivo <br> “EXTERNAL CORPORATE VENTURING”\n            </p>\n        </div>\n    </div>\n\n    <div id=\"tarjetas\" class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm\">\n\n                <div id=\"card1\" class=\"card text-white bg-dark mb-3 text-center\" style=\"max-width: 18rem;\">\n                    <div class=\"card-header\">EXTERNAL CORPORATE VENTURING</div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"></h5>\n                        <p class=\"card-text\">\n                            Búsqueda de nuevos Talentos y Nuevos Modelos de Negocios.\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-sm\">\n\n                <div id=\"card2\" class=\"card text-white bg-dark mb-3 text-center\" style=\"max-width: 18rem;\">\n                    <div class=\"card-header\">EXTERNAL CORPORATE VENTURING</div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"></h5>\n                        <p class=\"card-text\">\n                            Desarrollo de Nuevas herramientas para abrir paso a nuevos Productos y/o Mercados.\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"col-sm\">\n\n                <div id=\"card3\" class=\"card text-white bg-dark mb-3 text-center\" style=\"max-width: 18rem;\">\n                    <div class=\"card-header\">EXTERNAL CORPORATE VENTURING</div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"></h5>\n                        <p class=\"card-text\">\n                            Análisis de las nuevas Tecnologías para desarrollar nuevas líneas de Negocio.\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"card-columns\">\n        <div class=\"card border-primary\">\n            <img class=\"card-img-top\" src=\"assets/img/obj.jpg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-bullseye fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Definición de Objetivos</h5>\n\n            </div>\n        </div>\n        <div class=\"card border-primary p-3\">\n            <img class=\"card-img-top\" src=\"assets/img/diag.jpg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-user-md fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Diagnóstico Empresarial</h5>\n\n            </div>\n        </div>\n        <div class=\"card border-primary\">\n            <img class=\"card-img-top\" src=\"assets/img/pro.jpg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-search-plus fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Identificación de Àreas Pro-Incubación </h5>\n            </div>\n        </div>\n        <div class=\"card border-primary bg-primary text-white text-center p-3 animated flash\">\n            <blockquote class=\"blockquote mb-0\">\n                <h3>FASES <br>CORPORATE VENTURING</h3>\n            </blockquote>\n        </div>\n        <div class=\"card border-primary text-center\">\n            <img class=\"card-img-top\" src=\"assets/img/opor.jpg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-signal fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Descubrimiento de Oportunidades de <br> Crecimiento en el Sector</h5>\n            </div>\n        </div>\n        <div class=\"card border-primary\">\n            <img class=\"card-img-top\" src=\"assets/img/forma.jpeg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-chalkboard-teacher fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Formación de Menturing Strategy</h5>\n            </div>\n        </div>\n        <div class=\"card border-primary p-3 text-right\">\n            <img class=\"card-img-top\" src=\"assets/img/herra.jpg\">\n            <div class=\"card-body border-primary text-center\">\n                <i id=\"trophy\" class=\"fas fa-wrench fa-2x\"></i>\n                <br>\n                <h5 class=\"card-title\">Identificación de Herramientas </h5>\n                <div class=\"card-footer text-center\">\n                    <button id=\"botonHerra\" (click)=\"activarHerramientas()\" type=\"button\" class=\"btn btn-primary text-center btn-sm\">QUIERO CONOCER MÁS</button>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n\n    <div *ngIf=\"herramientas\" id=\"herra\" class=\"card text-center animated fadeInDownBig\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"assets/img/herra.jpg\">\n        <i id=\"trophy\" class=\"fas fa-wrench fa-2x text-center\"></i>\n        <h5 class=\"card-header text-center\">Identificación de Herramientas</h5>\n        <div class=\"card-body text-center text-white bg-dark\">\n\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Hakatons</h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Retos</h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Descubrimiento </h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Incubación </h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Patnership </h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Adquisición </h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Formación </h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Aceleración</h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Ventur Client</h6>\n            <i class=\"fas fa-toolbox\"></i>\n            <h6 class=\"card-title\">Ventur Bulding</h6>\n        </div>\n    </div>\n\n\n\n</div>\n\n<div *ngIf=\"tecno\" id=\"App\" class=\"container-fluid animated fadeInDown\">\n\n    <div class=\"card mb-3\">\n        <img id=\"imgTecno\" class=\"card-img-top\" src=\"assets/img/tecno.jpg\">\n        <div class=\"card-body text-center\">\n            <h3 class=\"card-title\">CONSULTORÍA TECNOLÓGICA</h3>\n\n            <h5 class=\"card-text\">\n                Ofrecemos Servicios de Consultoría Tecnológica &nbsp; <i id=\"trophy\" class=\"fas fa-check\"></i>\n            </h5>\n\n            <h5 class=\"card-text\">\n                Desarrollo de Software a Medida &nbsp; <i id=\"trophy\" class=\"fas fa-check\"></i>\n            </h5>\n\n            <h5 class=\"card-text\">\n                Sistemas &nbsp;<i id=\"trophy\" class=\"fas fa-check\"></i>\n            </h5>\n            <div id=\"app\" class=\"card-deck\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"assets/img/web.jpg\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">\n                            Desarrollo Web<br> ( CMS - Webs Apps)\n                        </h5>\n\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"assets/img/app.jpg\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">\n                            Desarrollo de Apps<br>( Nativas e Híbridas )\n                        </h5>\n\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"assets/img/cons.jpg\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">\n                            Consultoría Informática\n                        </h5>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br><br><br><br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.ts ***!
  \********************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent() {
        this.consultoria = false;
        this.venturing = false;
        this.herramientas = false;
        this.tecno = false;
    }
    ServiciosComponent.prototype.ngOnInit = function () {
    };
    ServiciosComponent.prototype.activarConsultoria = function () {
        this.consultoria = !this.consultoria;
        this.tecno = false;
        this.venturing = false;
    };
    ServiciosComponent.prototype.activarVenturing = function () {
        this.venturing = !this.venturing;
        this.consultoria = false;
        this.tecno = false;
    };
    ServiciosComponent.prototype.activarHerramientas = function () {
        this.herramientas = !this.herramientas;
    };
    ServiciosComponent.prototype.activarTecno = function () {
        this.tecno = !this.tecno;
        this.consultoria = false;
        this.venturing = false;
    };
    ServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/pages/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/pages/servicios/servicios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/pages/startup-registro/startup-registro.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/startup-registro/startup-registro.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#contacto {\r\n    background-color: rgb(223, 148, 8);\r\n    margin-top: 20px;\r\n}\r\n\r\n#img {\r\n    border-radius: 20px;\r\n}\r\n\r\n#form {\r\n    margin-top: 50px;\r\n}\r\n\r\n#headerImg {\r\n    height: 500px;\r\n}"

/***/ }),

/***/ "./src/app/pages/startup-registro/startup-registro.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/startup-registro/startup-registro.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar2></app-navbar2>\n<div class=\"card mb-3 text-center animated fadeIn\">\n    <img id=\"headerImg\" class=\"card-img-top\" src=\"assets/img/emprendedor3.jpeg\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title font-weight-bold\">SOY UNA STARTUP</h3>\n        <p class=\"card-text font-italic\">\n            Si eres una startup y necesitas Asesoramiento, Acompañamiento o Inversión. Contáctanos!!\n        </p>\n\n    </div>\n</div>\n<hr>\n\n<div class=\"container-fluid text-center animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <img id=\"img\" class=\"card-img-top\" src=\"assets/img/startup2.jpg\">\n        </div>\n        <div class=\"col\">\n\n            <form id=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Nombre:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Apellidos:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Nombre del Proyecto:\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"E-Mail:\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"formGroupExampleInput2\"></label>\n                    <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Teléfono:\">\n                </div>\n                <br>\n                <select class=\"custom-select\">\n                            \n                            <option selected>En qué estás interesado?</option>\n                            <option value=\"1\">Asesoramiento</option>\n                            <option value=\"2\">Acompañamiento o Inversión</option>\n                            \n                    </select>\n                <br>\n                <button id=\"contacto\" class=\"btn btn-lg btn-block\">Enviar</button>\n            </form>\n\n        </div>\n    </div>\n\n    <br><br><br><br>\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/startup-registro/startup-registro.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/startup-registro/startup-registro.component.ts ***!
  \**********************************************************************/
/*! exports provided: StartupRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupRegistroComponent", function() { return StartupRegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartupRegistroComponent = /** @class */ (function () {
    function StartupRegistroComponent() {
    }
    StartupRegistroComponent.prototype.ngOnInit = function () {
    };
    StartupRegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-startup-registro',
            template: __webpack_require__(/*! ./startup-registro.component.html */ "./src/app/pages/startup-registro/startup-registro.component.html"),
            styles: [__webpack_require__(/*! ./startup-registro.component.css */ "./src/app/pages/startup-registro/startup-registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartupRegistroComponent);
    return StartupRegistroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\ORYON\oryon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map