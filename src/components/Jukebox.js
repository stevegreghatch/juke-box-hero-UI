import React, { useState } from "react";

const Jukebox = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { title: "Maple Leaf Rag", artist: "Scott Joplin", file_url: "track1.mp3" },
    { title: "The Entertainer", artist: "Scott Joplin", file_url: "track2.mp3" }
  ];

  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <button onClick={() => setCurrentTrack(track.file_url)}>
              {track.title} - {track.artist}
            </button>
          </li>
        ))}
      </ul>
      {currentTrack && <audio controls src={currentTrack} autoPlay />}
    </div>
  );
};

export default Jukebox;
