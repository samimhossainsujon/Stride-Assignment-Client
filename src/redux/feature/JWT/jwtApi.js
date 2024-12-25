import { baseApi } from "../../api";

const jwtApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createToken: build.mutation({
            query: (email) => ({
                url: '/authentication',
                method: 'POST',
                body: { email },
            }),
        }),
    })
})


export const { useCreateTokenMutation } = jwtApi