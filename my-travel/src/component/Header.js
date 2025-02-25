import chef from "../assets/images/chef.png"
import '../styles/style.scss'

export default function Header(){
    return (
        <header className="nav-header">
            <nav className="nav-menu">
                <img src={chef} alt="chef Claude" />
                <h1>chef claude</h1>
            </nav> 
        </header>
    )
}