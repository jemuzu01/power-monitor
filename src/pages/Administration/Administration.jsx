import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'; 
import { Statistic } from '../../components/Statistic/Statistic';

export const Administration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "test")); // Replace with your collection name
        console.log("Firestore connected successfully!");
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} =>`, doc.data());
        });
      } catch (error) {
        console.error("Error connecting to Firestore:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <Statistic />
    </div>
  );
};


