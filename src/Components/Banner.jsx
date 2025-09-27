import vector1 from "../assets/vector1.png";
import image from "../assets/image.png";

const Banner = ({ title, count, fromColor, toColor }) => (
  <div
    className={`relative rounded-md p-7 text-white h-[150px] bg-gradient-to-r ${fromColor} ${toColor} flex flex-col items-center justify-center overflow-hidden`}
  >
    <img src={vector1} alt="vector left" className="absolute left-0 top-0 h-full" />
    <img src={image} alt="image right" className="absolute right-0 top-0 h-full" />
    <p>{title}</p>
    <h1 className="text-3xl font-bold">{count}</h1>
  </div>
);

export default Banner;
