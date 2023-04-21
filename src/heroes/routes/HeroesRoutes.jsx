import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPages } from "../pages/DcPages";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DcPages />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="/" element={<Navigate to={"marvel"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
