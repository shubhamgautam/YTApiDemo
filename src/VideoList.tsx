import React from 'react';

interface VideoListProps {
  videos: any[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <div key={video.id.videoId}>{video.snippet.title}</div>;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;