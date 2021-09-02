'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Teléfono = void 0;
//Exportamos clase Teléfono
var Teléfono = /** @class */ (function () {
  function Teléfono(tipo, número) {
    this._tipo = tipo;
    this._número = número;
  }
  Object.defineProperty(Teléfono.prototype, 'tipo', {
    //Getters
    get: function () {
      return this._tipo;
    },
    //Setters
    set: function (value) {
      this._tipo = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Teléfono.prototype, 'n\u00FAmero', {
    get: function () {
      return this._número;
    },
    set: function (value) {
      this._número = value;
    },
    enumerable: false,
    configurable: true,
  });
  return Teléfono;
})();
exports.Teléfono = Teléfono;
