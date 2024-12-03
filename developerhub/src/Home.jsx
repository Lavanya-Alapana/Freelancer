import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>

           
            <header className="navbar bg-dark text-light">
            <div className="container d-flex justify-content-between align-items-center" >
                <div className="d-flex align-items-center">
                        <i className="fas fa-code"></i> 
                        <h1 className="h4 mb-0">Developer Hub</h1> 
                </div>
            
                <div>
                    <a href="/register" className="btn btn-light me-2">Register</a>
                    <a href="/login" className="btn btn-light">Login</a>
                </div>
            </div>

        </header>
         <main className="bg-secondary text-white min-vh-100 d-flex align-items-center justify-content-center ">
          <div className="text-center"> 
                <h1>Developers Hub</h1>
                <p>Create a developer profile/portfolio,share posts and get help from other developers</p>
                <div>
                <Link to="/register">
        <button className="bg-primary">SignUp</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
              
                </div>

          </div>
         </main> 

        </>
    )
}

export default Home;