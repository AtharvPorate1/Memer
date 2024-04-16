import { useState, useEffect } from 'react';
import './MemesApp.css';

const MemeCard = ({ meme, onLike, onNext }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      onLike(meme);
      setLiked(true);
    }
  };

  const handleNext = () => {
    onNext();
    setLiked(false); // Reset liked status when moving to the next meme
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = meme.url;
    link.download = `${meme.title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="meme-card">
      <div className="meme-container">
        <img src={meme.url} alt={meme.title} />
      </div>
      <div className="meme-actions">
        <button onClick={handleLike} disabled={liked}>
          {liked ? 'Liked!' : 'Like'}
        </button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

const MemesApp = () => {
  const [meme, setMeme] = useState(null);
  const [likedMemes, setLikedMemes] = useState([]);

  const fetchMeme = async () => {
    try {
      const response = await fetch('https://meme-api.com/gimme');
      const data = await response.json();
      setMeme(data);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

  const handleNextMeme = () => {
    fetchMeme();
  };

  const handleLikeMeme = (likedMeme) => {
    setLikedMemes([...likedMemes, likedMeme]);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="memes-app">
      {meme && (
        <MemeCard
          meme={meme}
          onLike={handleLikeMeme}
          onNext={handleNextMeme}
        />
      )}
      <div className="liked-memes">
        <h2>My Liked Memes</h2>
        <ul>
          {likedMemes.map((likedMeme, index) => (
            <li key={index}>
              <img src={likedMeme.url} alt={likedMeme.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemesApp;
