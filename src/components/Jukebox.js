import React, { useState } from 'react';

const Jukebox = () => {
  const [artist, setArtist] = useState('Scott Joplin');
  const [trackName, setTrackName] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [bpm, setBpm] = useState(null);
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAudioMetadata = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/process_audio?artist=${artist}&track_name=${trackName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        console.error("Error from server:", data.error);
        return;
      }
      console.log("Data retrieved from backend");
      setCurrentTrack(data.pre_signed_url);
      setBpm(data.bpm);
      setKey(data.key);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="artist" style={{ marginRight: '10px' }}>Artist:</label>
        <input
          list="artists"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <datalist id="artists">
          <option value="Scott Joplin" />
        </datalist>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="track" style={{ marginRight: '10px' }}>Track:</label>
        <input
          list="tracks"
          value={trackName}
          onChange={(e) => setTrackName(e.target.value)}
        />
        <datalist id="tracks">
          <option value="The Entertainer" />
          <option value="Maple Leaf Rag" />
        </datalist>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={fetchAudioMetadata} disabled={loading}>
          {loading ? 'Processing...' : 'Fetch Audio Metadata'}
        </button>
      </div>
      {currentTrack && <audio id="audio-player" controls src={currentTrack} autoPlay />}
      {bpm && <p id="bpm">Bpm: {bpm}</p>}
      {key && <p id="key">Key: {key}</p>}
    </div>
  );
};

export default Jukebox;