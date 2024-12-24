import "./App.css";

function App() {
  return (
    <>
      <div className="flex">
        <div className="bg-red-500 ">HI</div>
        <div className="bg-pink-500">HI</div>
        <div className="bg-yellow-500">HI</div>
        <div className="bg-green-500">HI</div>
        <div className="bg-orange-500">HI</div>
        <div className="bg-purple-500">HI</div>
      </div>
      <div className="grid grid-cols-4">
        <div className="bg-red-500 col-span-3">HI</div>
        <div className="bg-pink-500">HI</div>
        <div className="bg-yellow-500">HI</div>
        <div className="bg-green-500">HI</div>
        <div className="bg-orange-500">HI</div>
        <div className="bg-purple-500">HI</div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-1">
        <div className="bg-red-500 ">HI</div>
        <div className="bg-pink-500">HI</div>
        <div className="bg-yellow-500">HI</div>
        <div className="bg-green-500">HI</div>
        <div className="bg-orange-500">HI</div>
        <div className="bg-purple-500">HI</div>
      </div>
    </>
  );
}

export default App;
