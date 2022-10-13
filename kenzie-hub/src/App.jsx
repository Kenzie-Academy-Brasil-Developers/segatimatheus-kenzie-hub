import "./App.css";
import RoutesMain from "./components/routes";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RoutesMain />
    </AuthProvider>
  );
}

export default App;
