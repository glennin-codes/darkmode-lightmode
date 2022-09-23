// import logo from "../images/logo512.png"
import './styles/header.css';
 import logo from"../logo.svg"
export default function Header(props){
    return (
          <header className={props.darkMode? 'dark':'app--header'}>
                    <img
                         src={logo}
                         alt="app logo"
                         className="app--logo"
                    />
                    <h1 className="app--name">Meme generator</h1>
                    <h2 className="app--title"><a href="/blogs/">blogs</a></h2>
                    <h2 className="app--title"><a href="./complexStateArrays.js">sites</a></h2>
                    <h2 className="app--title"><a href="/about us/">obout us</a></h2>
               
                    <h4 className="project--info">project-003</h4>
                    <div className='toggle'>
                         <p className='toggle--light' onClick={props.toggleDarkMode}>Light Mode</p>
                        <div 
                             className='toggle--slyder'
                             onClick={props.toggleDarkMode}>
                        <div className='toggle--slyder--circle'></div>
                        </div>
                        <p className='toggle--dark' onClick={props.toggleDarkMode}>Dark Mode</p>
                    </div>
          </header>
     )
}
