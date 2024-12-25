import { baseApi } from "../../api";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleUser: build.query({
            query: (email) => ({
                url: `/get-user/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: '/create-user',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        addToWishList: build.mutation({
            query: (body) => ({
                url: '/add-to-wishlist',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        addToCart: build.mutation({
            query: (body) => ({
                url: '/add-cart',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        getWishlist: build.query({
            query: () => ({
                url: '/get-wishlist',
                method: 'GET',
            }),
            providesTags: ['user'],
        }),
        removeFromWishList: build.mutation({
            query: (body) => ({
                url: '/remove-from-wishlist',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        getCart: build.query({
            query: () => ({
                url: '/get-cart',
                method: 'GET',
            }),
            providesTags: ['user'],
        }),
        removeFromCart: build.mutation({
            query: (body) => ({
                url: '/remove-from-cart',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user'],
        }),
        getAllUsers: build.query({
            query: () => ({
                url: '/all-users',
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        changeUserRole: build.mutation({
            query: ({ id, role }) => ({
                url: `/change-role/${id}`,
                method: 'PATCH',
                body: { role },
            }),
            invalidatesTags: ['user'],
        }),
        banUser: build.mutation({
            query: (id) => ({
                url: `/ban-user/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['user'],
        }),
    })
})

export const { useCreateUserMutation, useGetSingleUserQuery, useAddToWishListMutation, useAddToCartMutation, useGetWishlistQuery, useRemoveFromWishListMutation, useGetCartQuery,
    useRemoveFromCartMutation, useGetAllUsersQuery, useChangeUserRoleMutation, useBanUserMutation } = userApi