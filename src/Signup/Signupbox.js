import "./Signupbox.css";
import Signupform from "./Signupform";
import Brandname from "./Brandname";

function Signupbox() {

  document.body.style.backgroundColor = "#161622";
  return (
    <div className="bname">
      <div className="brand">
        <Brandname></Brandname>
      </div>
      <div className="out">
        <div className="outline">
          <div className="sign">
            <h2>Create an account</h2>
          </div>
          <Signupform></Signupform>
        </div>
      </div>
    </div>
  );
}

export default Signupbox;