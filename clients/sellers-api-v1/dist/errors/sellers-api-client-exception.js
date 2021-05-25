"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellersApiClientException = void 0;
class SellersApiClientException extends Error {
    constructor(message) {
        super(message);
        this.name = 'SellersApiClientException';
    }
}
exports.SellersApiClientException = SellersApiClientException;
