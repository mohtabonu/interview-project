import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { http } from "@/services/http";
import type { Todo } from "@/types";

export const useTodo = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await http.get("/todos");
      return response.data as Todo[];
    },
  });
};


export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      const res = await fetch(`http://localhost:4000/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 10,
          title,
          completed: false,
        }),
      });
      const data: Todo = await res.json();
      return data;
    },

    onSuccess: (newTodo) => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["todo", newTodo.id],
      });
    },
  });
}

export function useToggleTodoComplete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todo: Todo) => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        }),
      });
      const data: Todo = await res.json();
      return data;
    },

    onSuccess: (updatedTodo) => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["todo", updatedTodo.id],
      });
    },
  });
}
