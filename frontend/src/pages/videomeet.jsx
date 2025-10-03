import React, { useRef, useState } from 'react'

import "../styles/videoComponent.css";

const server_url = "http://localhost:8000";

var connections = {};

const peerConfigConnections = {
    "iceServers": [
        { "urls": "stun:stun.1.google.com:19302" }
    ]
}

export default function VideoMeetComponent() {

    var socketRef = useRef();
    let socketIdRef = useRef();

    let localVideoRef = useeRef();

    let [videoAvailable, setVideoAvailable] = useState(true);

    let[audioAvailable, setAudioAvailable] = useState(true);

    let [video, setVideo] = useState();

    let [audio, setAudio] = useState();

    let [screen, setScreen] = useState();

    let [showModal, setModal] = useState();

    let [screenAvailable, setScreenAvailable] = useState();

    let [messages, setMessages] = useState([]);

    let [message, setMessage] = useState("");

    let [newMessages, setNewMessages] = useState(0);

    let [askForUserName, setAskForUserName] = useState(true);

    let [username, setUserName] = useState("");

    const videoRef = useRef([])

    let [videos, setVideos] = useState([])


    //TODO
    // if(isChrome() === false) {

    // }

  return (
    <div>
        {askForUserName === true ?
            <div>

                

            </div> : <></>
        }
    </div>
  )
}
