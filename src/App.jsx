const App = () => {

  return (
    <>
      <div className="font-bold text-4xl p-[2em] mx-auto text-red-600">
        How many licks does it take to get to the center of a tootsie pop?
      </div>
      <img className="max-w-sm mx-auto" src="https://www.pinclipart.com/picdir/big/567-5677775_freetoedit-tootsieroll-owl-how-many-licks-does-it.png"></img>
      <div className="h-8"></div>
      <div className="font-bold text-3xl p-4 text-center">9001</div>
      <div className="container w-screen mx-auto flex space-x-48 justify-center">
        <button className="text-3xl bg-slate-600 rounded-xl p-6">More Licks</button>
        <button className="text-3xl bg-slate-600 rounded-xl p-6">Less Licks</button>
      </div>
    </>
);
};

export default App;
