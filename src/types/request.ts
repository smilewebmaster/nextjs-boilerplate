//
// API HTTP Response, Request Query Types
// ...
//

export type THTTPResponse<T> = {
    data?: T
    error?: string
    success: boolean
}

export type THTTPRequestBody<T> = {
    query: T
}

//
// END
//
