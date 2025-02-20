import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

const loadYouTubeAPI = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const YouTubeGrid = () => {
  const [players, setPlayers] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState({});
  const [fullscreenVideos, setFullscreenVideos] = useState({});
  const progressInterval = useRef(null);

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Music Video 1',
      duration: '3:45'
    },
    {
      id: 'JGwWNGJdvx8',
      title: 'Music Video 2',
      duration: '4:12'
    },
    {
      id: 'fJ9rUzIMcZQ',
      title: 'Music Video 3',
      duration: '3:28'
    },
    {
      id: '9bZkp7q19f0',
      title: 'Music Video 4',
      duration: '5:01'
    }
  ];

  useEffect(() => {
    if (!window.YT) {
      loadYouTubeAPI();
      window.onYouTubeIframeAPIReady = initializePlayers;
    } else {
      initializePlayers();
    }

    // Add fullscreen change event listener
    const fullscreenChangeHandler = () => {
      if (!document.fullscreenElement) {
        setFullscreenVideos({});
      }
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    };
  }, []);

  const initializePlayers = () => {
    videos.forEach(video => {
      const player = new window.YT.Player(`player-${video.id}`, {
        videoId: video.id,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onStateChange: (event) => handleStateChange(event, video.id)
        }
      });
      setPlayers(prev => ({ ...prev, [video.id]: player }));
    });
  };

  const handleStateChange = (event, videoId) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      Object.entries(players).forEach(([id, player]) => {
        if (id !== videoId && player.getPlayerState() === window.YT.PlayerState.PLAYING) {
          player.pauseVideo();
        }
      });
      
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      progressInterval.current = setInterval(() => {
        const player = players[videoId];
        if (player) {
          const currentTime = player.getCurrentTime();
          const duration = player.getDuration();
          setProgress(prev => ({
            ...prev,
            [videoId]: (currentTime / duration) * 100
          }));
        }
      }, 1000);
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }
  };

  const togglePlay = (videoId) => {
    const player = players[videoId];
    if (player) {
      if (player.getPlayerState() === window.YT.PlayerState.PLAYING) {
        player.pauseVideo();
        setActiveVideo(null);
      } else {
        player.playVideo();
        setActiveVideo(videoId);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    Object.values(players).forEach(player => {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
    });
  };

  const toggleFullscreen = (videoId) => {
    const container = document.getElementById(`container-${videoId}`);
    
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setFullscreenVideos(prev => ({ ...prev, [videoId]: true }));
      }).catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
      setFullscreenVideos(prev => ({ ...prev, [videoId]: false }));
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">
          Latest Releases
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              id={`container-${video.id}`}
              className="group relative rounded-xl overflow-hidden bg-gray-800"
            >
              <div className="aspect-video relative">
                <div id={`player-${video.id}`} className="w-full h-full" />
                
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded-md text-xs">
                  {video.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <button 
                    className="p-4 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/90"
                    onClick={() => togglePlay(video.id)}
                  >
                    {activeVideo === video.id ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                
                <div className="flex flex-col space-y-2">
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{ width: `${progress[video.id] || 0}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                      onClick={() => toggleFullscreen(video.id)}
                    >
                      {fullscreenVideos[video.id] ? (
                        <Minimize className="w-4 h-4" />
                      ) : (
                        <Maximize className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeGrid;