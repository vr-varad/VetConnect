import {RotateLoader} from "react-spinners";

const override = {
  display: "block",
  margin: "40vh auto",
  borderColor: "black",
};

function Spinner() {

  return (
    <div className="sweet-loading">
      <RotateLoader
        color="#000"
        cssOverride={override}
        size={15}
        aria-label="ClipLoader"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;