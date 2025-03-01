import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot,orderBy } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';  // Assuming Firestore is initialized here
import { getStartTime } from '../utils/getTime';
import dayjs from 'dayjs';

const useDashboardData = (data) => {
  const [stats, setStats] = useState([]);


  useEffect(() => {


   
    const startOfMonth = dayjs().startOf('month').toDate();
    const endOfMonth = dayjs().endOf('month').toDate();

    const q = query(
      collection(firestore, "power_monitor"),
      where("department", "==", data),
      where("dateTime", ">=", startOfMonth),
      where("dateTime", "<=", endOfMonth),
      orderBy("dateTime")
    );
 

    const unsubscribe = onSnapshot(q, (monitorSnapshot) => {
       const docs = [];
       monitorSnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
       });
          const powerValues = docs.map(doc => ({ power: doc.power,voltage: doc.voltage,current:doc.current,dateTime:doc?.dateTime.toDate() }));
          setStats(powerValues);
       
    });
 
    // Cleanup the listener when the component unmounts or dependencies change
    return () => unsubscribe();
 }, []); // Dependency on `data`
 

  return stats;
};

export default useDashboardData;
