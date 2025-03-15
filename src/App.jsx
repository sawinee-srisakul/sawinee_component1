import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/CourseDetailPage' element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
