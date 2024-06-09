// Participant.js
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";

const Participant = ({ participant }) => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={`https://via.placeholder.com/300x200?text=${participant.name}`}
        alt={participant.name}
      />
      <CardContent>
        <Typography variant="h6">{participant.name}</Typography>
        <IconButton onClick={toggleAudio}>
          {audioEnabled ? <Mic /> : <MicOff />}
        </IconButton>
        <IconButton onClick={toggleVideo}>
          {videoEnabled ? <Videocam /> : <VideocamOff />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Participant;
