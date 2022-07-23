import React from 'react';
import { useState } from 'react';

// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firestoreApp from './firestoreApp';

import { useCollectionData } from 'react-firebase-hooks/firestore';


const App = () => {

  const [bigCount, setBigCount] = useState(0);
  const globalStatsRef = firestoreApp.collection('game-stats').doc('globalStats');

  // async function oneTimeGet(ref){
  //   const doc = await ref.get();
  //   if (!doc.exists) {
  //     console.log('No such document!');
  //   } else {
  //     return doc.data();
  //   }
  // }

  let newCount = 0;
  globalStatsRef.onSnapshot((doc) => {
    newCount = doc.data().bigCount;
    setBigCount(newCount);
  }, err => {
    console.log('Encountered error fetching data: ' + err);
  });

  const LickCounter = (props) => {
    return(
      <div className="font-bold text-3xl p-4 text-center">{props.count}</div>
    );
  };

  function incrementLicks(){
    const newCount = bigCount + 1;
    const data = { bigCount: newCount};
    globalStatsRef.set(data);
  }

  function decrementLicks(){
    const newCount = bigCount - 1;
    const data = { bigCount: newCount};
    globalStatsRef.set(data);
  }


  return (
    <>
      <div className="font-bold text-4xl p-[2em] mx-auto text-red-600">
        How many licks does it take to get to the center of a tootsie pop?
      </div>

      <img className=" max-w-xs mx-auto" src="src\tootsieroll-owl.png"></img>

      <div className="h-8"></div>

      <LickCounter count={bigCount}></LickCounter>

      <div className="h-4"></div>

      <div className="container flex mx-auto space-x-48 justify-center">
        <button onClick={incrementLicks} className="text-3xl bg-slate-600 rounded-xl p-6">More Licks</button>
        <button onClick={decrementLicks} className="text-3xl bg-slate-600 rounded-xl p-6">Less Licks</button>
      </div>
    </>
  );
};

export default App;
