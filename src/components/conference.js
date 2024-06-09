// Participant.js
import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from '@mui/material';
import { Mic, MicOff, Videocam, VideocamOff } from '@mui/icons-material';

const Participant = ({ participant }) => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [streamStarted, setStreamStarted] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    if (streamStarted) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => {
          setMediaStream(stream);
          setAudioEnabled(true);
          setVideoEnabled(true);
        })
        .catch(error => {
          console.error('Error accessing media devices:', error);
        });
    } else {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        setMediaStream(null);
        setAudioEnabled(false);
        setVideoEnabled(false);
      }
    }
  }, [streamStarted]);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
  };

  const toggleCamera = () => {
    // Logic to toggle camera
    if (mediaStream) {
      const videoTrack = mediaStream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setVideoEnabled(videoTrack.enabled);
    }
  };

  const toggleMicrophone = () => {
    // Logic to toggle microphone
    if (mediaStream) {
      const audioTrack = mediaStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setAudioEnabled(audioTrack.enabled);
    }
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
        {streamStarted ? (
          <>
            <IconButton onClick={toggleAudio}>
              {audioEnabled ? <Mic /> : <MicOff />}
            </IconButton>
            <IconButton onClick={toggleVideo}>
              {videoEnabled ? <Videocam /> : <VideocamOff />}
            </IconButton>
            <IconButton onClick={toggleCamera}>
              {videoEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
            </IconButton>
            <IconButton onClick={toggleMicrophone}>
              {audioEnabled ? 'Turn Off Microphone' : 'Turn On Microphone'}
            </IconButton>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={() => setStreamStarted(true)}>
            Start Streaming
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Participant;
