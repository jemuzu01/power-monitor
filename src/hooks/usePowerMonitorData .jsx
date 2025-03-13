import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot,orderBy } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';  // Assuming Firestore is initialized here
import { getStartTime } from '../utils/getTime';
import dayjs from 'dayjs';

const usePowerMonitorData = (data) => {
  const [documents, setDocuments] = useState([]);


  useEffect(() => { 

    const q = query(
      collection(firestore, "power_monitor"),
      where("department", "==", data?.department),
      orderBy("dateTime")
    );
       const unsubscribe = onSnapshot(q, (monitorSnapshot) => {


      const updatedDate = dayjs(data?.currentDate)

      const now = dayjs();
      const isSameDay = updatedDate.isSame(now, "day");

    
      const date = isSameDay ? new Date(now) : new Date(updatedDate);
      
      const formattedTime = getStartTime(data?.timeRange,date);

       const allDocs = [];
       monitorSnapshot.forEach((doc) => {
         allDocs.push({ id: doc.id, ...doc.data() });
       });
   
   
       let docs = isSameDay
       ? allDocs.filter(doc => doc?.dateTime.toDate() >= formattedTime)  // Filter for today
       : allDocs.filter(doc => {
         const docDate = doc?.dateTime.toDate();
         return docDate >= date && docDate <= formattedTime;
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
   }, [data?.department, data?.monitor,data]);
 

  return documents;
};

export default usePowerMonitorData;
