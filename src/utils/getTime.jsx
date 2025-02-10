
import { Timestamp } from 'firebase/firestore';

export const getStartTime = (range, date) => {
  const now = new Date(); 
  
  let startTime;

  switch (range) {
    case '24h': // 24 hours ago
      startTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Subtract 24 hours from the given date
      break;
    case '3m': // 3 months ago
      startTime = new Date(now.setMonth(now.getMonth() - 3)); // Subtract 3 months from the given date
      break;
    case '7d': // 7 days ago
      startTime = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // Subtract 7 days from the given date
      break;
    case '1m': // 1 minute ago
      startTime = new Date(now.getTime() - 1 * 60 * 1000); // Subtract 1 minute from the given date
      break;
    default:
      startTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Default to 24 hours ago if no range is provided
  }

  console.log("endtime", startTime);
  return Timestamp.fromDate(startTime); // Convert start time to Firestore Timestamp
};
