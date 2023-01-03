import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import "./App.css";

function App() {
  return (
    <div id="devmain">
      <Sidebar>
        <BrowserRouter>
        <Routes>
          <Route key="homepage"
                path="/"
                element={<DynamicItem page="homepage" />}/>
            {dummyData &&
            dummyData.map((item:any, index: number) => (
              <>
              <Route 
                key={index}
                path={item.path}
                element={<DynamicItem page={item.name} content={item.content}/>} />
              </>
            ))}
        </Routes>
        </BrowserRouter>
      </Sidebar>
    </div>
  );
}


export default App;
