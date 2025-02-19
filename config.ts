import { OpenAPIConfig, OpenAPI } from "./core/OpenAPI";

export const setApiConfig = (config: Partial<OpenAPIConfig>) => {
    Object.assign(OpenAPI, config);
};