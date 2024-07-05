// src/components/TaskItem.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/taskslice';
import { ListItem, ListItemText, IconButton, TextField, MenuItem, Box, Collapse } from '@mui/material';
import { Delete, Edit, CheckCircle } from '@mui/icons-material';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleEditTask = () => {
    if (editedTask.trim()) {
      dispatch(editTask({ id: task.id, text: editedTask, priority: editedPriority }));
      setIsEditing(false);
    }
  };

  return (
    <Collapse in={!task.completed} timeout="auto">
      <ListItem>
        {isEditing ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
            <TextField
              fullWidth
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEditTask()}
              variant="outlined"
            />
            <TextField
              select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
            <IconButton onClick={handleEditTask}>
              <CheckCircle style={{color:"#00e676"}}/>
            </IconButton>
          </Box>
        ) : (
          <ListItemText
            primary={task.text}
            secondary={`Priority: ${task.priority}`}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTask(task.id))}
          />
        )}
        <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
          <Delete  style={{color:"red"}}/>
        </IconButton>
        <IconButton edge="end" onClick={() => setIsEditing(!isEditing)}>
          <Edit style={{color:"#cddc39"}}/>
        </IconButton>
      </ListItem>
    </Collapse>
  );
};

export default TaskItem;
