import './style.css'

function Button(props) {
  return (
    <button className="Button" value={props.value}>{props.content}</button>
  );
}

export default Button;
