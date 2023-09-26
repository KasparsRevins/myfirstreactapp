import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/Login" class="nav-link">Login</Link>
        </li>
        <li class="nav-item">
        <Link to="/Register" class="nav-link">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header