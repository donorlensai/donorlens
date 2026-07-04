declare module "node:assert/strict" {
  const assert: {
    deepEqual(actual: unknown, expected: unknown): void;
    equal(actual: unknown, expected: unknown): void;
    throws(fn: () => unknown, error?: RegExp): void;
  };
  export default assert;
}

declare module "node:crypto" {
  export function createPublicKey(input: unknown): unknown;
  export function randomUUID(): string;
  export function verify(
    algorithm: string,
    data: Uint8Array,
    key: unknown,
    signature: Uint8Array
  ): boolean;
}

declare module "node:http" {
  export type IncomingMessage = {
    headers: Record<string, string | string[] | undefined>;
    method?: string;
    url?: string;
  };
  export type ServerResponse = {
    statusCode: number;
    setHeader(name: string, value: string): void;
    end(body?: string): void;
  };
  export function createServer(
    handler: (request: IncomingMessage, response: ServerResponse) => void
  ): {
    listen(port: number, host: string, callback?: () => void): void;
  };
}

declare module "node:test" {
  export default function test(
    name: string,
    fn: () => void | Promise<void>
  ): void;
}

declare const Buffer: {
  from(input: string, encoding?: string): Uint8Array & {
    toString(encoding?: string): string;
  };
};

declare const process: {
  env: Record<string, string | undefined>;
};
