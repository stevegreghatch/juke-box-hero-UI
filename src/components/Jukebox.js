import React, { useState } from 'react';

const Jukebox = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div>
      <h1>Ragtime Jukebox</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.title}>
            <button onClick={() => setCurrentTrack(track.file_url)}>
              {track.title} - {track.composer}
            </button>
          </li>
        ))}
      </ul>
      {currentTrack && <audio controls src={currentTrack} autoPlay />}
    </div>
  );
};

export default Jukebox;