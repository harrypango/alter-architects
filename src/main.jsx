import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects, About, Contact, Gallery } from "./pages/index";
import App from "./App";
import "./index.css";
import { thumbnails } from "./pages/home/thumbnails";

const projectRoutes = thumbnails.map((project) => {
  const path = `/gallery/:project-${project.id}`;
  return <Route path={path} element={<Gallery />} />;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />}>
          {projectRoutes}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
