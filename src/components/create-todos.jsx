import { createRouteAction } from "solid-start";

export default function CreateTodos(props) {
  // generate form and what happens when form is submitted
  const [_, { Form }] = createRouteAction(async (formData) => {
    // CREATE REQUEST BODY
    const body = JSON.stringify({
      message: formData.get("message"),
      done: false,
    });
    // CREATE NEW TODO
    const response = await fetch("/api/todo", {
      method: "POST",
      body,
    });
    // response payload
    const todos = await response.json();

    // pass todos to parents callback
    props.callback(todos);
  });

  return (
    <Form>
      <input type="text" name="message" />
      <input type="submit" value="create new todo" />
    </Form>
  );
}
