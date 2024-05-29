'use client'
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

const QuizPage = ({questions}: any) => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setIsCorrectAnswer(false);
    }
  };
  
  console.log(currentQuestion , '')

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Quiz App
      </Typography>
      {(isCorrectAnswer && questions) ? (
        <div>
          <Typography variant="h5" gutterBottom>
            Question {currentQuestion + 1}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            {questions.length > 0 && questions[currentQuestion].question}
          </Typography>

          <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                   variant="outlined"
                  onClick={() =>handleOptionClick(questions[currentQuestion].option1)}
                >
                  {questions[currentQuestion].option1}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() =>handleOptionClick(questions[currentQuestion].option2)}
                >
                  {questions[currentQuestion].option2}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() =>handleOptionClick(questions[currentQuestion].option3)}
                >
                  {questions[currentQuestion].option3}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() =>handleOptionClick(questions[currentQuestion].option4)}
                >
                  {questions[currentQuestion].option4}
                </Button>
              </Grid>
          </Grid>
        </div>
      ) : (
        <Typography variant="h5" align="center" gutterBottom>
          Quiz completed! Your score is {score}
        </Typography>
      )}
    </Container>
  );
};

export default QuizPage;

