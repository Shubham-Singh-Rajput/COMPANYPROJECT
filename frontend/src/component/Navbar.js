// import Token from './../Redux/Reducer/index';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Token from "./../Redux/Action/index";

const Navbar = () => {
  const GETTOKEN = useSelector((Token) => Token);
  const dispatch = useDispatch();
  const history = useHistory();
  const LOGOUT = () => {
    dispatch(Token.removeToken());
    history.push("/");
  };
  return (
    <>
      {GETTOKEN.length === 0 ? (
        <>
          <nav
            className="navbar navbar-light "
            style={{ background: "#e3f2fd" }}
          >
            <form className="container-fluid justify-content-space-between">
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={() => history.push("/")}
              >
                HOME
              </button>
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={() => history.push("/login")}
              >
                LOGIN
              </button>
            </form>
          </nav>
        </>
      ) : (
        <>
          <nav
            className="navbar navbar-light "
            style={{ background: "#e3f2fd" }}
          >
            <form className="container-fluid justify-content-space-between">
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={() => history.push("/")}
              >
                HOME
              </button>
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={() => history.push("/upload")}
              >
                UPLOAD
              </button>
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={() => history.push("/showdata")}
              >
                ShowFile
              </button>
              <button
                className="btn btn-outline-success me-2"
                type="button"
                onClick={LOGOUT}
              >
                LOGOUT
              </button>
            </form>
          </nav>
        </>
      )}
    </>
  );
};
export default Navbar;
