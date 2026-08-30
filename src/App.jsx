import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvitationPage from './pages/InvitationPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="/:slug" element={<InvitationPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
