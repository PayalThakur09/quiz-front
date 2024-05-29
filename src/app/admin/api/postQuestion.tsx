
export async function postQuestion(data:any) {
    // const question = data.get("question").valueOf()
    // const options = data.get("options").valueOf()
    // const answer = data.get("answer").valueOf()
    console.log(data, 'data');
    const question = data.question;
    const option1 = data.option1;
    const option2 = data.option2;
    const option3 = data.option3;
    const option4 = data.option4;
    const answer = data.answer;
  
    const adddata = await fetch("http://localhost:8003/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question, option1, option2, option3, option4, answer
      })
    });
    return adddata.json()
  }
  
  