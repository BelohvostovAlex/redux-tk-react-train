import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllComments: build.query({
            query: (limit = 5) => ({
                url: '/comments',
                params: {
                    _limit: limit
                }
            })
        })
    })
})