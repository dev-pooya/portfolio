const Title = ({ title }) => {
  return (
    <div className="title">
      <h1>
        {title} <span>{title}</span>
      </h1>
    </div>
  );
};

export default Title;
