import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { Heading } from "../components";
import { Todo,Todos } from "../pages";

export const Routes = () => {
  return (
    <>
      <Heading />
      <Switch>
        <Route path="/" element={<Todos />} />
        <Route path="/:todoId" element={<Todo />} />

        <Route index path="*" element={<Navigate to="/" />} />
      </Switch>
    </>
  );
};