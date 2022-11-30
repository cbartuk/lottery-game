/* eslint-disable jsx-a11y/anchor-is-valid */

// const name = "John";
// const surname = "Doe";

// const isLoggedIn = true;

function Header(props) {
  return (
    <>
      <h1 className="h5 text-secondary text-center mb-2">
        {/* Hoş geldiniz, {name} {surname} */}
        {/* {isLoggedIn && `Hoş geldiniz, ${name} ${surname}`} */}
        {props.isLoggedIn
          ? `Hoş geldiniz, ${props.name} ${props.surname}`
          : "Lütfen giriş yapın."}
      </h1>
      {/* <p className="text-center">{!isLoggedIn && "Lütfen giriş yapın."}</p> */}
      <hr />
      <nav className="nav justify-content-center">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Header;
