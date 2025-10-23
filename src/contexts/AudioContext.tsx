import { createContext, useContext, useState, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider
      value={{ isPlaying, volume, isMuted, togglePlay, setVolume, toggleMute }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};
