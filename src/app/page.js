import HomePage from "./components/HomePage/homePage";
import Navbar from "./components/shared-component/navbar/navbar";
import TopNav from "./components/shared-component/topNav";

export default function Home() {
  return (
    <div>
      <TopNav/>
      <Navbar/>
      <HomePage/>
    </div>
  );
}
