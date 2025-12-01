/**
 * Utility functions for generating Google Maps embed URLs for Indiana locations
 */

export function generateGoogleMapsEmbed(locationName: string, locationType?: string): string {
  // Clean up the location name for the search query
  const cleanLocationName = locationName.trim();
  
  // Create the full location string with proper formatting for Google Maps
  const fullLocation = locationType 
    ? `${cleanLocationName} ${locationType}, Indiana`
    : `${cleanLocationName}, Indiana`;
  
  // Encode the location for the URL
  const encodedLocation = encodeURIComponent(fullLocation);
  
  // Return the Google Maps embed URL with the specific location
  return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tIY1DTvOrpWJHjV3Ho&q=${encodedLocation}&zoom=14&maptype=roadmap`;
}

export function generateGoogleMapsEmbedLegacy(locationName: string, locationType?: string): string {
  // Alternative method using the older embed format (more reliable for some locations)
  const cleanLocationName = locationName.trim();
  const fullLocation = locationType 
    ? `${cleanLocationName} ${locationType}, Indiana`
    : `${cleanLocationName}, Indiana`;
  
  // Encode for legacy embed format
  const encodedLocation = encodeURIComponent(fullLocation);
  
  // Use the standard embed format that works without API key
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-86.2389!3d41.7033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedLocation}!5e0!3m2!1sen!2sus!4v1653000000000!5m2!1sen!2sus`;
}

export function generateSimpleGoogleMapsEmbed(locationName: string, locationType?: string): string {
  // Most reliable method - simple place search
  const cleanLocationName = locationName.trim();
  const searchQuery = locationType 
    ? `${cleanLocationName} ${locationType} Indiana`
    : `${cleanLocationName} Indiana`;
  
  const encodedQuery = encodeURIComponent(searchQuery);
  
  // Using Google Maps place search - most reliable method
  return `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
}