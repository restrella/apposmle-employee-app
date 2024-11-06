import { NavigateBeforeTwoTone } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/auth";

const NavBar = ({ onLogout }) => {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant={"h6"}
            component={"div"}
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}>
            Employee App
          </Typography>
          <div>
            {currentUser ? (
              <>
                <Typography
                  component={"span"}
                  variant={"body"}
                  sx={{ marginRight: 2 }}>
                  Welcome {currentUser.username}
                </Typography>
                <Button color={"inherit"} onClick={onLogout}>
                  logout
                </Button>
              </>
            ) : (
              <>
                <Button color={"inherit"} LinkComponent={Link} to={"/register"}>
                  Register
                </Button>
                <Button color={"inherit"} LinkComponent={Link} to={"/login"}>
                  Login
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
