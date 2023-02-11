import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="text-center p-10">
          <h2 className="text-center capitalize font-bold tracking-wider text-2xl text-sky-800 mb-6">
            no tours left
          </h2>
          <button
            className="capitalize px-2 bg-sky-500 text-white rounded"
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
