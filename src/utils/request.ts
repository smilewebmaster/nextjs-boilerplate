//
// Generic HTTP Fetch Funtions
// ...
//

import { THTTPRequestBody, THTTPResponse } from '@app/types/request'

function assertPath(path: string) {
    const type = typeof path
    if (type !== 'string') {
        throw new TypeError(
            `The path should be a string, instead received a ${type}`
        )
    }
}

function requiredEnv(env: string) {
    throw new TypeError(`The ${env} environment variable is strictly required.`)
}

const HOST =
    process.env.NEXT_PUBLIC_BASE_API_URL ||
    requiredEnv('NEXT_PUBLIC_BASE_API_URL')

function initialize<T>(
    method: string | 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: THTTPRequestBody<T>,
    options?: Record<string, string>
): RequestInit {
    return {
        method,
        body: JSON.stringify(body),
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    }
}

interface IRequestArgs<B> {
    path: string | 'GET' | 'POST' | 'PUT' | 'DELETE'
    query?: THTTPRequestBody<B>
    method: string
    options?: Record<string, string>
}

async function request<B, R>(args: IRequestArgs<B>): Promise<THTTPResponse<R>> {
    const { method, query, path, options } = args
    const init = initialize<B>(method || 'GET', query, options)
    assertPath(args.path)
    const response = await fetch(`${HOST}/${path}`, init)
    const { data, error, success } =
        response.status !== 204
            ? await response.json()
            : {
                  data: 'No Data',
                  error: 'No Error',
                  success: true,
              }
    if (!success) throw new Error(error)
    return {
        data,
        error,
        success,
    }
}

export default request

//
// END
//
