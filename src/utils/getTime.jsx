import { Timestamp } from 'firebase/firestore';

export const getStartTime = (range, date) => {
  let startTime;
  switch (range) {
    case '5s': // 5 seconds ago
      startTime = new Date(date.getTime() - 5000);
      break;
    case '30min': // 30 minutes ago
      startTime = new Date(date.getTime() - 30 * 60 * 1000);
      break;
    case '24h': // 24 hours ago
      startTime = new Date(date.getTime() - 24 * 60 * 60 * 1000);
      break;
    case '3m': // 3 months ago
      startTime = new Date(date.getTime()); // Clone date to avoid modifying original
      startTime.setMonth(startTime.getMonth() - 3);
      break;
    case '7d': // 7 days ago
      startTime = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
      case '1m': // 1 month ago
      startTime = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000); // Approx. 1 month ago
      break;   
    default:
      startTime = new Date(date.getTime() - 24 * 60 * 60 * 1000); // Default to 24 hours
  }

  return startTime; // Convert to Firestore Timestamp
};
