import { useQuery } from "@tanstack/react-query";
import { http } from "@/services/http";
import type { Todo } from "@/types";

export const useTodos = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await http.get("/todos");
      return response.data as Todo[];
    },
  });
};