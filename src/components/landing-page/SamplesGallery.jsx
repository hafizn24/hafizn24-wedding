import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { colorTokens } from '../../theme/landing-page-theme';

export default function SamplesGallery() {
  const navigate = useNavigate();
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/config/invitations.config.json');
        if (!response.ok) throw new Error('Failed to load invitations');
        const data = await response.json();
        setInvitations(data.invitations || []);
      } catch (err) {
        console.error('Error fetching invitations:', err);
        setError('Failed to load sample invitations');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, []);

  const handleViewInvitation = (slug) => {
    navigate(`/${slug}`);
  };

  const themeColors = [
    { bg: '#d4e9c4', primary: '#526447' },
    { bg: '#ffdad9', primary: '#775757' },
    { bg: '#feffd6', primary: '#605f58' },
  ];

  return (
    <section
      id="samples"
      className="py-8 md:py-12 px-4"
      style={{
        backgroundColor: colorTokens.surfaceContainerLow,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Explore & Inspire"
          title="Beautiful Sample Invitations"
          description="Take a look at some of our most popular invitation templates to get inspired for your own design"
        />

        {/* Error State */}
        {error && (
          <div
            className="mb-4 p-4 rounded-lg text-sm"
            style={{
              backgroundColor: '#e8f5e9',
              color: '#2e7d32',
            }}
          >
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div
              className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
              style={{
                borderColor: colorTokens.primary,
              }}
            />
          </div>
        ) : invitations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {invitations.map((invitation, idx) => {
              const themeColor = themeColors[idx % themeColors.length];
              return (
                <div
                  key={invitation.slug}
                  className="h-full flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                  style={{
                    borderColor: `${colorTokens.outlineVariant}20`,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {/* Preview Image */}
                  <div
                    className="preview-image w-full h-64 flex items-center justify-center transition-transform duration-300 overflow-hidden relative"
                    style={{
                      background: `linear-gradient(135deg, ${themeColor.bg} 0%, ${themeColor.primary}15 100%)`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300"
                        style={{
                          backgroundColor: themeColor.primary,
                        }}
                      >
                        <Eye size={32} color="white" />
                      </div>
                      <p
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{
                          color: themeColor.primary,
                          opacity: 0.7,
                        }}
                      >
                        Preview
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-grow flex flex-col gap-2 p-4">
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{
                          color: colorTokens.onSurface,
                          fontFamily: '"Noto Serif", serif',
                        }}
                      >
                        {invitation.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: colorTokens.onSurfaceVariant,
                        }}
                      >
                        Beautiful invitation template to use as inspiration for your big day
                      </p>
                    </div>

                    <div className="flex gap-1 pt-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: themeColor.primary,
                        }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border-2"
                        style={{
                          backgroundColor: themeColor.bg,
                          borderColor: colorTokens.outlineVariant,
                        }}
                      />
                    </div>

                    <button
                      onClick={() => handleViewInvitation(invitation.slug)}
                      className="w-full py-2.5 font-semibold rounded-xl transition-all duration-300 mt-auto text-white"
                      style={{
                        backgroundColor: themeColor.primary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      View Sample
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <p style={{ color: colorTokens.onSurfaceVariant }}>
              No sample invitations available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
