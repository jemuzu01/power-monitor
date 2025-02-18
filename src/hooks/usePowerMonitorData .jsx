import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot,orderBy } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';  // Assuming Firestore is initialized here
import { getStartTime } from '../utils/getTime';
import dayjs from 'dayjs';

const usePowerMonitorData = (data) => {
  const [documents, setDocuments] = useState([]);


  useEffect(() => {
   
    const updatedDate = dayjs(data?.currentDate).hour(23).minute(59).second(59);
    const date = new Date(updatedDate);
    
    const endTime = getStartTime(data?.timeRange,date);
    const startTime =updatedDate.toDate();
 
    const q = query(
      collection(firestore, "power_monitor"),
      where("department", "==", data?.department),
      where("dateTime", "<=", startTime),
      where("dateTime", ">=", endTime),
      orderBy("dateTime")
    );
 

    const unsubscribe = onSnapshot(q, (monitorSnapshot) => {
       const docs = [];
       monitorSnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
       });
 
       if (data?.monitor === "POWER") {
          const powerValues = docs.map(doc => ({ Output: doc.power,dateTime:doc?.dateTime.toDate() }));
          setDocuments(powerValues);
       }
       if (data?.monitor === "VOLTAGE") {
          const voltageValues = docs.map(doc => ({ Output: doc.voltage,dateTime:doc?.dateTime.toDate() }));
          setDocuments(voltageValues);
       }
       if (data?.monitor === "CURRENT") {
          const currentValues = docs.map(doc => ({ Output: doc.current,dateTime:doc?.dateTime.toDate() }));
          setDocuments(currentValues);
       }
    });
 
    // Cleanup the listener when the component unmounts or dependencies change
    return () => unsubscribe();
 }, [data]); // Dependency on `data`
 

  return documents;
};

export default usePowerMonitorData;
