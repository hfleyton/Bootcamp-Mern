const deleteMovie = async (data) => {
    console.log(data)
    try{
        const res = await fetch("/api/deleteMovie", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) throw new Error(res.text);
    const json = await res.json();
    console.log(json)
    return { success : true, data : json};
    } catch (e) {
        console.error(e);
        return { success : false, data : e.message };
    }
};

export default deleteMovie;