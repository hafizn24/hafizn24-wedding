/**
 * Loads invitation config dynamically based on slug
 * @param {string} slug - The invitation slug
 * @returns {Promise<Object>} - The invitation config object
 */
export const loadInvitationConfig = async (slug) => {
  try {
    // First, load the main invitations config to validate the slug
    const invitationsResponse = await fetch('/src/config/invitations.config.json');
    if (!invitationsResponse.ok) {
      throw new Error('Failed to load invitations list');
    }
    const invitationsData = await invitationsResponse.json();

    // Find the invitation by slug
    const invitation = invitationsData.invitations.find(inv => inv.slug === slug);
    if (!invitation) {
      throw new Error(`Invitation with slug "${slug}" not found`);
    }

    // Load the specific invitation config
    const configResponse = await fetch(`/src/config/${invitation.configFile}`);
    if (!configResponse.ok) {
      throw new Error(`Failed to load config for slug "${slug}"`);
    }
    const configData = await configResponse.json();

    return configData;
  } catch (error) {
    console.error('Error loading invitation config:', error);
    throw error;
  }
};

/**
 * Gets all available invitation slugs
 * @returns {Promise<Array>} - Array of invitation objects with slug and title
 */
export const getAllInvitations = async () => {
  try {
    const response = await fetch('/src/config/invitations.config.json');
    if (!response.ok) {
      throw new Error('Failed to load invitations list');
    }
    const data = await response.json();
    return data.invitations;
  } catch (error) {
    console.error('Error loading invitations list:', error);
    throw error;
  }
};

export default {
  loadInvitationConfig,
  getAllInvitations,
};
