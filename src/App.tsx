import React, { useState, useEffect } from 'react';
import youtube from './youtube';
import VideoList from './VideoList';

const App: React.FC = () => {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async (term: string) => {
    const response = await youtube.get('/playlistItems');

    setVideos(response.data.items);
  };

  useEffect(() => {
    onTermSubmit('all');
  },[])

  return (
    <div>
      <h1>YouTube videos list</h1>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;