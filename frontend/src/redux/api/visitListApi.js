import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const visitListApi = createApi({
    reducerPath: "visitListApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["VisitList"],
    endpoints: (builder) => ({

        addNewVisitList: builder.mutation({
            query: (body) => ({
                url: "/visitlist/add",
                method: "POST",
                body,
            }),
            invalidatesTags: ["VisitList"],
        }),

        getVisitList: builder.query({
            query: () => "/visitlist/me",
            providesTags: ["VisitList"],
        }),

        removeFromVisitList: builder.mutation({
            query: (visitId) => ({
                url: `/visit/${visitId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["VisitList"],
        }),

    })
});



export const { useAddNewVisitListMutation, useGetVisitListQuery, useRemoveFromVisitListMutation } = visitListApi;