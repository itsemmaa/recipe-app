import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import SavedPage from "./pages/SavedPage";
import AddPage from "./pages/AddPage";
import { RecipeProvider } from "./context/RecipeContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState("search");

  const renderPage = () => {
    switch (currentPage) {
      case "search":
        return <Search />;
      case "savedPage":
        return <SavedPage />;
      case "addPage":
        return <AddPage />;
      default:
        return <Search />;
    }
  };

  return (
    <RecipeProvider>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()} 
    </RecipeProvider>
  );
};

export default App;
