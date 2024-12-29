function ListGroup() {
  const items = ["New York", "Paris", "San Francisco", "Peshawar", "Swabi"];

  return (
    <>
      <h1>ListName</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}{" "}
      </ul>
    </>
  );
}

export default ListGroup;
