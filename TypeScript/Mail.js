"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
//Exportamos clase Mail
var Mail = /** @class */ (function () {
    function Mail(tipo, dirección) {
        this._tipo = tipo;
        this._dirección = dirección;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        //Getters
        get: function () {
            return this._tipo;
        },
        //Setters
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direcci\u00F3n", {
        get: function () {
            return this._dirección;
        },
        set: function (value) {
            this._dirección = value;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
