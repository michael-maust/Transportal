import "./ExploreContainer.css";

const ExploreContainer = ({name}) => {
  return (
    <div className="container bg-red-400 text-blue-600">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
