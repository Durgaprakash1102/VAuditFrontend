import React, { useState } from 'react';
import { TextField, Button, Typography, Avatar, Container, Grid, Box, Paper } from '@mui/material';

const Myprofile = () => {
  // Initial profile data
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    companyName: 'Example Inc.',
  });

  // Edit mode state
  const [isEditing, setIsEditing] = useState(false);

  // Local state for form data
  const [formData, setFormData] = useState({ ...profile });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({ ...profile });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Avatar
            alt="User Avatar"
            src="https://www.bootdey.com/img/Content/avatar/avatar8.png"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">User Profile</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
            {isEditing ? (
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Company Name"
                  name="companyName"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: '20px', marginLeft: '10px' }}
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </Box>
            ) : (
              <Box style={{ textAlign: 'center' }}>
                <Typography variant="h6">Name: {profile.name}</Typography>
                <Typography variant="body1">Email: {profile.email}</Typography>
                <Typography variant="body1">Company: {profile.companyName}</Typography>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Myprofile;
