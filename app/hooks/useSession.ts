import { fetchSession } from "@/lib/api/session";
import { useQuery } from "@tanstack/react-query";

export function useSession() {
    return useQuery({
        queryKey: ["session"],
        queryFn: fetchSession,
        retry: false,
        refetchOnWindowFocus: true,
    });
}