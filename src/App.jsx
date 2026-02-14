import CppCompilerLoading from "./components/loading";
import Error404 from "./components/Error404";
import { Routes, Route ,Link} from "react-router-dom";
import UnderConstruction from "./components/Underconstruct";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CppCompilerLoading />} />
      <Route path="/under-development" element={<UnderConstruction />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
