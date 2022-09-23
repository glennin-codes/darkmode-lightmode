
import "./styles/home.css"
const Home=((props)=>{
   return (
       <div className={props.darkMode?'main--wrapper':'light'} >
           <main className="main--contents">
            <h2>hello world</h2>
           </main>
        
       </div>
   )
})
export default Home;