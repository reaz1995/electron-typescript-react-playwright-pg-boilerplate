import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import electronLogo from "../../../static/electron.svg";

export default function Greetings(): JSX.Element {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
      }}
      maxWidth="md"
      sx={{ mt: 8 }}
    >
      <Grid container justifyContent="center">
        <Box component="img" src={electronLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        Electron boilerplate with:
      </Typography>
      <List style={{margin:'15px'}}>
        <ListItem disablePadding>
          <ListItemText primary="TypeScript" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="React" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="MUI" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="postgres" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="React" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="playwright" />
        </ListItem>
      </List>
    </Container>
  );
}
