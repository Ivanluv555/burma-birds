import { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import BirdGrid from './components/BirdGrid';
import BirdDetail from './components/BirdDetail';
import { birds } from './data/birds';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBird, setSelectedBird] = useState(null);
  const [cardPosition, setCardPosition] = useState(null);

  const filteredBirds = useMemo(() => {
    if (!searchQuery.trim()) {
      return birds;
    }

    const query = searchQuery.toLowerCase();
    return birds.filter((bird) =>
      bird.name.toLowerCase().includes(query) ||
      bird.scientific_name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBirdClick = (bird, rect) => {
    setCardPosition(rect);
    setSelectedBird(bird);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedBird(null);
    setCardPosition(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Hero>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
      </Hero>

      <main className="flex-grow bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <BirdGrid birds={filteredBirds} onBirdClick={handleBirdClick} />
        </div>
      </main>

      <Footer />

      {selectedBird && (
        <BirdDetail
          bird={selectedBird}
          onClose={handleCloseDetail}
          initialPosition={cardPosition}
        />
      )}
    </div>
  );
}

export default App;
