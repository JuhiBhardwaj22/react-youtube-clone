import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { WatchPage } from "./components/body/bodyMainContainer/WatchPage";
import { BodyMainContainer } from "./components/body/bodyMainContainer/BodyMainContainer";

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body />,
  children:[{
    path:'/',
    element :<BodyMainContainer />
  },
  {
    path:'watch',
    element :<WatchPage />
  },
]
}])

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}/>
      <Footer />
    </div>
  );
}

export default App;
