import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Home />
    </div>
  );
}
