const SERVER_URL = "http://127.0.0.1:5000/calculate";

export async function calculations(bottom, top, partition) {
    const data = {
        bottom: bottom,
        top: top,
        partition: partition
    }
    const response = await fetch(SERVER_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    console.log(json)
    return json;
}