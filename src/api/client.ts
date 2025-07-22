import type {API} from "./type/api";
import {Method} from "./type/method";

export interface ApiUrlConfig {
    v2: {
        main: string;
    };

}

export class DefaultApiUrlConfig implements ApiUrlConfig {
    v2 = {
        main: "http://127.0.0.1:8080/",
    };
}

export class Client {

    private readonly token: string | undefined;

    private urlConfig: ApiUrlConfig;

    constructor(
        token?: string,
        apiUrlConfig: ApiUrlConfig = new DefaultApiUrlConfig(),
    ) {
        this.token = token;
        this.urlConfig = apiUrlConfig;
    }

    public async execute(api: API): Promise<Response> {
        let response: Response;
        // 拼接基础 URL 和 endpoint
        let url = `${this.urlConfig.v2.main}${api.endpoint}`;
        if (api.params) {
            url += `?${api.params.toString()}`;
        }

        let requestOptions: RequestInit = {
            headers: {
                ...api.headers,
                'Content-Type': 'application/json',
                'satoken': this.token || ''
            },
            credentials: 'include',
            redirect: 'follow'
        };

        switch (api.method) {
            case Method.GET:
                requestOptions.method = 'GET';
                response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.json();

            case Method.POST:
                requestOptions.method = 'POST';

                response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.json();
            case Method.PUT:
                requestOptions.method = 'PUT';
                response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.json();

            case Method.PATCH:
                requestOptions.method = 'PATCH';
                response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.json();

            case Method.DELETE:
                requestOptions.method = 'DELETE';
                response = await fetch(url, requestOptions);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.json();

            default:
                throw new Error(`Unsupported HTTP method: ${api.method}`);
        }
    }
}
