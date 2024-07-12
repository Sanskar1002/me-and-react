import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen flex-wrap gap-4">
        <Card item="MackBook" />
        <Card item="iphone" />
        <Card item="ipad" />
      </div>
    </>
  );
}

export default App;
