let teamMembers = [];

module.exports = {
  getTeamMembers: () => teamMembers,
  addTeamMember: (member) => teamMembers.push(member),
  updateTeamMember: (id, updatedMember) => {
    teamMembers[id] = updatedMember;
  },
  deleteTeamMember: (id) => {
    teamMembers.splice(id, 1);
  },
};