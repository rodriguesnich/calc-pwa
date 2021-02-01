import './style.css'

function Screen() {
  return (
    <div className="Screen container">
      <input className="operation" value="2323" type="number" readOnly />
      <input className="result" value="46" type="number" readOnly />
    </div>
  );
}

export default Screen;
