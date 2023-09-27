import "./App.css";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import Nav from "./components/Nav/Nav";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Wallets from "./components/Wallets/Wallets";
import CryptoInfo from "./components/CryptoInfo/CryptoInfo";
import ScrollButton from "./components/ScrollButton/ScrollButton";

function App() {
  return (
    <>
      <Line />
      <Header />
      <Nav />
      <InfoBlock />
      <Wallets />
      <CryptoInfo />
      <ScrollButton />
    </>
  );
}

export default App;
