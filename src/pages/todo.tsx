import { Button } from "@/components";
import type React from "react";
import { useLocation } from "react-router-dom";

export const Todo: React.FC = () => {
  const location = useLocation();
  const item = {id: 1, title: "jkfdjk", completed: false}
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h1>{item.title}</h1>
                <Button>{item.completed ? "completed" : "uncompleted"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
