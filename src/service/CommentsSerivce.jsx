import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Comment'],
    endpoints: (build) => ({
        fetchAllComments: build.query({
            query: (limit = 5) => ({
                url: '/comments',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Comment']
        }),
        createComment: build.mutation({
            query: (comment) => ({
                url: '/comments',
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comment']
        }),
        updateComment: build.mutation({
            query: (comment) => ({
                url: `/comments/${comment.id}`,
                method: 'PUT',
                body: comment
            }),
            invalidatesTags: ['Comment']
        }),
        deleteComment: build.mutation({
            query: (comment) => ({
                url: `/comments/${comment.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Comment']
        })
    })
})