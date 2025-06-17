import "./Button.css";
function Button({ name }) {
  return (
    <>
      <a className="custom-button" href="#">
        {name}
      </a>
    </>
  );
}

export default Button;
