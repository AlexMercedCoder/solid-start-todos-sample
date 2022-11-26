export function getJSONBody(body){
    return new Response(body, { headers: { 'Content-Type': 'application/json' }}).json()
}

export function handleError(error){
    console.log(error)
    return {error}
}