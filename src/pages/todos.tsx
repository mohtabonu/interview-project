import type React from "react";
import { useTodos } from "@/hooks/use-todos";
import { Search } from "lucide-react";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import { useToggleTodoComplete } from "@/hooks/use-todo";

export const Todos: React.FC = () => {
  const { data: todos, isLoading } = useTodos();
  const { mutate: toggleComplete } = useToggleTodoComplete();

  const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {isLoading ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
              <h1>Loading...</h1>
            </div>
          ) : todos!.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
              <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                No items found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            todos!.map((item) => (
              <div
                onClick={(e) => {
                    e.stopPropagation;
                    navigate(`/${item.id}`)
                }}
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h1>{item.title}</h1>
                    <Button onClick={() => toggleComplete(item)}>{item.completed ? "completed" : 'uncompleted'}</Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
