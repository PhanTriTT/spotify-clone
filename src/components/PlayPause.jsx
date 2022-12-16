import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

// eslint-disable-next-line no-confusing-arrow
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="text-gray-300" size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle className="text-gray-300" size={35} onClick={handlePlay} />
  );

export default PlayPause;
