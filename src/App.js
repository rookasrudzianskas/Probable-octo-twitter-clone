import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">

    {/*    sidebar  */}
        <Sidebar />

    {/*    feed */}
        <Feed />
    {/*    widgets  */}

        <Widgets />
    </div>
  );
}

export default App;
