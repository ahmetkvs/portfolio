function Skill({ heading, message }) {
  return (
    <div>
      <h1 className="text-2xl mb-6 text-violet-600">{heading}</h1>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

export default Skill;
