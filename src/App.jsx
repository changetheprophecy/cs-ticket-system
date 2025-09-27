import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import vector1 from "./assets/vector1.png";
import image from "./assets/image.png";
import Container from "./Components/Container";


const App = () => {
  return (
    <div>
      <Navbar />

      <Container>
      <div className="grid grid-cols-2 gap-[10px] mx-[40px] my-[50px]">
        {/* purple grid */}

       <div className="relative rounded-md p-7 text-white h-[150px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center overflow-hidden">
        {/* Left Stroke */}
        <img
          src={vector1}
          alt="vector left"
          className="absolute left-0 top-0 h-full"
        />

        {/* Right Stroke */}
        <img
          src={image}
          alt="image right"
          className="absolute right-0 top-0 h-full"
        />

        {/* Content */}
        <p>In-Progress</p>
        <h1 className="text-3xl font-bold">0</h1>
      </div>


      {/* green grid */}
       <div className="relative rounded-md p-7 text-white h-[150px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center overflow-hidden">
        {/* Left Stroke */}
        <img
          src={vector1}
          alt="vector left"
          className="absolute left-0 top-0 h-full"
        />

        {/* Right Stroke */}
        <img
          src={image}
          alt="image right"
          className="absolute right-0 top-0 h-full"
        />

        {/* Content */}
        <p>Resolved</p>
        <h1 className="text-3xl font-bold">0</h1>
      </div>
      </div>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
