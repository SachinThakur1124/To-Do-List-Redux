import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { Box, Stack,Typography } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>Task List</Typography>
      <Stack
        direction="column"
        spacing={2}
      >
        {tasks.map(task => (
          <Box key={task.id} p={2} boxShadow={{ xs: 0, sm: 2, md: 5 }} borderRadius={4} bgcolor="backgorund.paper">
            <TaskItem task={task}/>
          </Box>
        ))}
      </Stack>
    </Box>
  )
};

export default TaskList;
