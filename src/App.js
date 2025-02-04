import React from 'react';
import './App.css';
import Jukebox from './components/Jukebox';

const tracks = [
  { title: 'Maple Leaf Rag', composer: 'Scott Joplin', file_url: 'path/to/maple_leaf_rag.mp3' },
  { title: 'The Entertainer', composer: 'Scott Joplin', file_url: 'path/to/the_entertainer.mp3' },
  // Add more tracks as needed
];

function App() {
  return (
    <div className="App">
      <Jukebox tracks={tracks} />
    </div>
  );
}

export default App;