import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot,orderBy } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';  // Assuming Firestore is initialized here
import { getStartTime } from '../utils/getTime';
import dayjs from 'dayjs';

const usePowerMonitorData = (data) => {
  const [documents, setDocuments] = useState([]);


  useEffect(() => {
    // Get the start time based on the selected range
    const updatedDate = dayjs(data?.currentDate).hour(0).minute(0).second(0);
         
    const startTime = new Date(updatedDate);
    
    const endTime = getStartTime(data?.timeRange);

    console.log(endTime)
 
 
    const q = query(
      collection(firestore, "power_monitor"),
      where("department", "==", data?.department),
      where("dateTime", ">=", endTime),  // Start of range
      // where("dateTime", "<=", endTime),    // End of range
      orderBy("dateTime") 
  );
 

    const unsubscribe = onSnapshot(q, (monitorSnapshot) => {
       const docs = [];
       monitorSnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
       });
 
       if (data?.monitor === "POWER") {
          const powerValues = docs.map(doc => ({ type: doc.power }));
          setDocuments(powerValues);
       }
       if (data?.monitor === "VOLTAGE") {
          const voltageValues = docs.map(doc => ({ type: doc.voltage }));
          setDocuments(voltageValues);
       }
       if (data?.monitor === "CURRENT") {
          const currentValues = docs.map(doc => ({ type: doc.current }));
          setDocuments(currentValues);
       }
    });
 
    // Cleanup the listener when the component unmounts or dependencies change
    return () => unsubscribe();
 }, [data]); // Dependency on `data`
 

  return documents;
};

export default usePowerMonitorData;
