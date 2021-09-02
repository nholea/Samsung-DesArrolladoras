"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirección = void 0;
//Exportamos clase Dirección
var Dirección = /** @class */ (function () {
    function Dirección(calle, num, piso, letra, cp, población, provincia) {
        this._calle = calle;
        this._número = num;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._población = población;
        this._provincia = provincia;
    }
    Object.defineProperty(Dirección.prototype, "calle", {
        //Getters
        get: function () {
            return this._calle;
        },
        //Setter
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "n\u00FAmero", {
        get: function () {
            return this._número;
        },
        set: function (value) {
            this._número = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "cp", {
        get: function () {
            return this._cp;
        },
        set: function (value) {
            this._cp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "poblaci\u00F3n", {
        get: function () {
            return this._población;
        },
        set: function (value) {
            this._población = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dirección;
}());
exports.Dirección = Dirección;
