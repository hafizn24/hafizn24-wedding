import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WeddingInvitationTemplate from '../components/WeddingInvitationTemplate';
import { loadInvitationConfig } from '../utils/configLoader';

function InvitationPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        const loadedConfig = await loadInvitationConfig(slug);
        setConfig(loadedConfig);
        
        // Update document title
        document.title = loadedConfig.title;
      } catch (err) {
        console.error('Error loading invitation:', err);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadConfig();
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-center flex-col gap-2">
        <h5 className="text-lg font-semibold text-red-500">
          Error: {error}
        </h5>
        <p className="text-sm text-slate-600">
          Redirecting to home...
        </p>
      </div>
    );
  }

  if (!config) {
    return null;
  }

  return (
    <div>
      <WeddingInvitationTemplate config={config} />
    </div>
  );
}

export default InvitationPage;
