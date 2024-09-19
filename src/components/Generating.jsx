import { loading } from '../assets'

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base transition-transform duration-300 ease-in-out hover:bg-n-8 hover:scale-105`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="loading" />
      Ai is generating
    </div>
  );
};

export default Generating;
