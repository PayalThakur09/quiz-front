import QuizPage from './Components/index';
import axios from 'axios';

export default async function Home() {
  // Define a function to fetch questions

  async function getData() {
    const response = await axios.get("http://localhost:8003/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //console.log('response', response)
    // return response.text();
    return response.data;
  }

  const questions = await getData()

  //console.log('questions???', questions)
  
  return (
    <QuizPage questions={questions} />
  );
}
