import logo from '../../assets/img/logo.svg'


import './style.css'

function Header() {
    return (
        <>

            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="linkedin.com/in/julia-santos22"> @juliasantos</a></p>
                </div>

            </header>
        </>

    )
}

export default Header
