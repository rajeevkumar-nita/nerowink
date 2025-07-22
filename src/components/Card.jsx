const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left">
      <h4 className="text-lg font-semibold text-blue-700">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
