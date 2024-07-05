import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To-Do List
        </Typography>
        <TaskInput />
        <TaskList />
      </Box>
    </Container>
  );
};

export default App;
