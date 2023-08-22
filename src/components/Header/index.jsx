const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Comprar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Alugar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sobre nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contato</a>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Encontre seu imóvel" aria-label="Search" />
            <button className="btn btn-primary" type="submit"><i className="bi bi-search m-2 fs-5"></i></button>
          </form>
        </div>
      </nav>
    </>
  )
}
export default Header