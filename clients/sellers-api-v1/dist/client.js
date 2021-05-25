"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellersApiClient = void 0;
const api_model_1 = require("./api-model");
const common_1 = require("@bizon-sp-api-sdk/common");
const sellers_api_client_exception_1 = require("./errors/sellers-api-client-exception");
class SellersApiClient extends api_model_1.SellersApi {
    constructor(parameters) {
        const axiosInstance = common_1.createAxiosInstance(parameters);
        const configuration = new api_model_1.Configuration();
        const endpoint = common_1.endpoints.sandbox[parameters.region];
        if (!endpoint) {
            throw new sellers_api_client_exception_1.SellersApiClientException(`Unknown region : ${parameters.region}`);
        }
        super(configuration, endpoint, axiosInstance);
    }
}
exports.SellersApiClient = SellersApiClient;
