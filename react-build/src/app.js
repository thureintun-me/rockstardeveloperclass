function Element(props) {
  return (
    <div>
      <h1>React Build</h1>
      <ul>
        <li>Item One</li>
        <li>Item two</li>
        <li>Item three</li>
        <li>Item Four</li>
        <li>Item Five</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <Element content="A React Component" />,
  document.getElementById("app")
);
