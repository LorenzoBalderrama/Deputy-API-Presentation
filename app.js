// app.js
const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Get all team members
app.get('/team-members', (req, res) => {
  res.json(data.getTeamMembers());
});

// Add a new team member
app.post('/team-members', (req, res) => {
  const newMember = req.body;
  data.addTeamMember(newMember);
  res.json({ message: 'Team member added successfully' });
});

// Update a team member
app.put('/team-members/:id', (req, res) => {
  const memberId = req.params.id;
  const updatedMember = req.body;
  data.updateTeamMember(memberId, updatedMember);
  res.json({ message: 'Team member updated successfully' });
});

// Delete a team member
app.delete('/team-members/:id', (req, res) => {
  const memberId = req.params.id;
  data.deleteTeamMember(memberId);
  res.json({ message: 'Team member deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
