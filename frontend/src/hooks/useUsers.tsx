
import api from "@/api/axios"
import { useQuery } from "@tanstack/react-query"


export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const {data} = await api.get("/users")
            return data
        }
    })
}