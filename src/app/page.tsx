import Image from "next/image";
import Homepage from "./HomePage/page";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CarPage from "./carcard/CarPage";
import CarPagetwo from "./carcardtwo/CarPage";
import About from "./about/page";
import FourthPage from "./Components/FourthPage/page";
import ThirdPage from "./Components/ThirdPage/page";

<head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
</head>

export default function Home() {
  return (
    <div className="bg-gray-100 overflow-hidden">


<Homepage/>
<About/>

 
<CarPagetwo/>
<ThirdPage/>
<FourthPage/>

        </div>
  );
}
