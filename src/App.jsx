import React from 'react';
import { useState } from 'react';

const App = () => {

  const [bigCount, setBigCount] = useState(0);

  const LickCounter = (props) => {

    return(
      <div className="font-bold text-3xl p-4 text-center">{props.count}</div>
    );
  
  };

  function incrementLicks(){
    setBigCount(bigCount + 1);
  }

  function decrementLicks(){
    setBigCount(bigCount - 1);
  }


  return (
    <>
      <div className="font-bold text-4xl p-[2em] mx-auto text-red-600">
        How many licks does it take to get to the center of a tootsie pop?
      </div>

      <img className=" max-w-xs mx-auto" src="https://www.pinclipart.com/picdir/big/567-5677775_freetoedit-tootsieroll-owl-how-many-licks-does-it.png"></img>

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
