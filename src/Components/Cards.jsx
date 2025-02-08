const Cards = (props) => {
  // console.log("props", obj);
  return (
    <>
      <h3>{props.objs.name}</h3>
      <h2>{props.objs.age}</h2>
    </>
  );
};

export default Cards;
