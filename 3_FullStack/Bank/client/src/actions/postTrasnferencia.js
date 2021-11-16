const abonoRetiro = async (data) => {
    console.log(data)
    try{
        const res = await fetch("http://localhost:8000/api/updateTransferencia", {
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

export default abonoRetiro;