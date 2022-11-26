// ~/ = /src/ , this configuration is in the jsoconfig.json
import Todo from "~/connection"
import {json} from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/todo
export async function GET(){
    // return all todos as json
    return json(await Todo.find({}).catch(error => handleError(error)))

}

export async function POST({request}){
   // get json body
    const body = await getJSONBody(request.body)
   // create new todo in database
   await Todo.create(body).catch(error => handleError(error))
   // return all todos as json
   return json(await Todo.find({}).catch(error => handleError(error)))
}