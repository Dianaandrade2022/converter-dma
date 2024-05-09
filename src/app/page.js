"use client";
import React from "react";
import Chart from "./components/chart/chart";
import {
  IconButton,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #ff69b4, #800080)",
        padding:'25px'
      }}
    >
      <Paper elevation={3} className="p-6 rounded-lg shadow-lg bg-white">
        <IconButton 
        sx={{
          color:'white',
          float:'right',
          background:'red '
        }}
        aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom className="text-center text-purple-800">
          CURRENCY CONVERTER 
        </Typography>
        <Typography variant="p" gutterBottom className="text-center text-gray-300">
           1 dhs equals
        </Typography>
        <form className="p-24 bg-white rounded  rounded-lg">
          <div className="mb-4">
            <TextField label="" variant="outlined" fullWidth required />
          </div>
          <div className="mb-4">
            <TextField label="" variant="outlined" fullWidth required />
          </div>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            className="bg-purple-800 text-white"
          >
            Enviar
          </Button>
        </form>
        <Chart className="bg-pink-200"/>
      </Paper>
    </Container>
  );
};

