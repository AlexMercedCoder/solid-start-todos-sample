import { For } from "solid-js"

export default function DisplayTodos(props){
    return <div>
        <ul>
            <For each={props.todos}>
                {todo => <li>{todo.message} - {todo.done ? "done" : "not done"}</li>}
            </For>
        </ul>
    </div>
}