import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ModelManager } from "./components/model-manager";
import { SettingsManager } from "./components/settings-manager";

function App() {
  return (
    <div className="w-96 p-4">
      <Header />
      <hr className="my-4" />
      <SettingsManager />
      <hr className="my-4" />
      <ModelManager />
      <hr className="my-4" />
      <Footer />
    </div>
  );
}

export default App;
