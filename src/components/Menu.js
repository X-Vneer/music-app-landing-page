export default function Menu(propes) {
  return (
    <div>
      <ul className="menu" style={propes.style}>
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#search">Search</a>
        </li>
        <li>
          <a href="#download">Download</a>
        </li>
      </ul>
    </div>
  );
}
