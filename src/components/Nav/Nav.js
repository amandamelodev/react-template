function Nav(){
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light p-3">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <a className="nav-link" href="#header">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#header">Sobre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#header">Produtos e Serviços</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#header">Contato</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;