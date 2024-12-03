import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
