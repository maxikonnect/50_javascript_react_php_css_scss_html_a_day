import ReactLogo from "../logo.svg"
export default function Header(){
    return(
        <header className="header">
            <nav>
                <img src={ReactLogo} alt="react logo" />
                <span>React Logo</span>
            </nav>
        </header>
    )
}