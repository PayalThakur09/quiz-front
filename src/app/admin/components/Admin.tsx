"use client"
import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { postQuestion } from '../api/postQuestion';
import axios from 'axios';

export const Admin = () => {
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [answer, setAnswer] = useState('')

    async function handleAddQuestion(e: any){
      e.preventDefault()
      await postQuestion({
        question,answer,
        option1,option2,option3,option4
      })
      
    alert('Question added successfully!');
  };

    return (
        <Container>
          <h1>Add Questions</h1>

         <form onSubmit={handleAddQuestion} method="POST">

        <TextField label="Question" name="question" value={question} variant="outlined" onChange={(e: any) => setQuestion(e.target.value)} fullWidth margin="normal"/>
        <TextField label="Option 1" name="option1" value={option1} variant="outlined" onChange={(e: any) => setOption1(e.target.value)} fullWidth margin="normal"/>
        <TextField label="Option 2" name="option2" value={option2} variant="outlined" onChange={(e: any) => setOption2(e.target.value)} fullWidth margin="normal"/>
        <TextField label="Option 3" name="option3" value={option3} variant="outlined" onChange={(e: any) => setOption3(e.target.value)} fullWidth margin="normal"/>
        <TextField label="Option 4" name="option4" value={option4} variant="outlined" onChange={(e: any) => setOption4(e.target.value)} fullWidth margin="normal"/>
        <TextField label="Correct Answer" name="answer" value={answer} variant="outlined" onChange={(e: any) => setAnswer(e.target.value)} fullWidth margin="normal"/>
  
        <Button variant="contained" color="primary"
          type='submit'>
          Add Question
        </Button>
        </form> 
        
      </Container>
    )
}

export default Admin;