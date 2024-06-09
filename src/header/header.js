import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Conference
          </Typography>

          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Signup
          </Button>
          <Button
            component={RouterLink}
            to="/live"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Live
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
