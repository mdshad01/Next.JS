import SlowRespnose2 from "@/components/SlowRespnose2";
import SlowRespnose3 from "@/components/SlowRespnose3";
import TodosList from "@/components/TodosList";
import { Suspense } from "react";

const Todos = async () => {
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={<div>Loading Todos....</div>}>
        <TodosList />
      </Suspense>
      <Suspense fallback={<div>Loading Data 1</div>}>
        <SlowRespnose2 />
      </Suspense>
      <Suspense fallback={<div>Loading Data 2</div>}>
        <SlowRespnose3 />
      </Suspense>
    </>
  );
};

export default Todos;
