import DisplayTodos from "~/components/display-todos";
import CreateTodos from "~/components/create-todos";
import { useRouteData, createRouteData } from "solid-start";

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch("/api/todo");
    return await response.json();
  });
}

export default function Home() {

  const todos = useRouteData()
  console.log(routeData)

  return (
    <main>
      <DisplayTodos todos={todos()}/>
      <CreateTodos callback={(todos) => console.log(todos)}/>
    </main>
  );
}
