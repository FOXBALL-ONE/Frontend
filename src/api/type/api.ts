import type {Method} from "./method.ts";

export abstract class API {
    protected constructor(
        public readonly endpoint: string,
        public readonly method: Method,
        public readonly params: URLSearchParams,
        public readonly headers?: Record<string, string>,
    ) {
    }
}
