
export async function getQuestion() {
    const response = await fetch("http://localhost:8003/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return response.json()
  }