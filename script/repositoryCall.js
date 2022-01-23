async function repository(repo)
{
    try
    {
        let response = await fetch(repo)

        let data = await response.json()

        return data
    }
    catch (error)
    {
        console.log("error:",error)

    }
}


export default repository 