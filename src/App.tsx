import { Button, useTheme } from "@mui/material";
import Landing from "./components/main/landing";

function App() {
  const theme = useTheme()
  return (
    <div className="w-[100vw]">
      <Landing />
    </div>
  );
}
export default App;
