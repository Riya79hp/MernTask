import React, { useState } from 'react';
import Like from './like.png'
const Navbar = () => {
   const[isloggedin,setIsloggedin]=useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [csb,setcsb]=useState(true);
    const [hb,sethb]=useState(true);
    const [flb,setflb]=useState(true);
    const [cpb,setcpb]=useState(true);
    const[lb,setlb]=useState(true);
    const[sb,setsb]=useState(true);
    const[tcsb,settcsb]=useState(true);
  function Handlecreate_acc(){
    setIsModalOpen(false)
    setIsloggedin(false);
  }
    function handleClick() {
    
      setIsModalOpen(true);
    }
  
    function closeModal() {
      setIsModalOpen(false);
    }
    function signin(){
      settcsb(false);
      setcsb(false);
      sethb(false);
      setflb(false);
      setcpb(false);
      setlb(false);
      setsb(false);

    }
    function freeacc(){
      settcsb(true);
      setcsb(true);
      sethb(true);
      setflb(true);
      setcpb(true);
      setlb(true);
      setsb(true);

    }
  return (
    <>
      <div className="navbar-div">
        <img 
          src="https://atghelp.wordpress.com/wp-content/uploads/2017/02/logo-in.png?w=774&h=178&crop=1" 
          alt="Logo"
          className='navbar-logo-img'
        />
        <div className='navbar-search'>
         <i className="fa fa-search"></i>
        <input type="search" className='navbar-search-search'placeholder="Search for your favorite groups in ATG"/>
        </div>
    
         {isloggedin ? <> <button style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} onClick={handleClick}>
            <div style={{display:'flex',gap:'5px',fontWeight:'bold'}}>Create account, <span style={{color: 'blue',fontWeight:'bold'}}>It's Free</span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
          </button>
          </>:
          <>
          <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
            <img src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsEHSzyt4wYw7ptWWaMAzMgdXhKBQ1639EW4vFNz8qvkQriMDxN9-r13uHnnrlcOIvzLfIy9m3rfdxuJZUsXgUuvKQ7HuTg1aZLRLjt1J1NR7rhCwGSCTA0wnD0my2RRboMuadNltmVye1bX3IxOOxYwPjWLQPUPZH2I1LgjbGMHegrHrwvtf4Tnpfqpea1a9s5CVNjUrNsJxeZNQkq--flCe0O5iPf6Xx3-02iloN7X5Zo~wgtknpmNFpEKDUMY3IxQvxbqFlDFN7W6rQ9Im7Fch~cZQdN4fcbL~oVkOIDEt4UKIB4TyxyoJWk5-sQdj32k3vqcViHEsxkwjrvAeA__" style={{width:'30px',height:'30px',borderRadius:'100%'}}></img>
            Siddharth Goyal

          <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          
          </>
          
          }
        
        
      </div>

      {isModalOpen && (
        <div className="navbar-modal">
          <div className="navbar-modal-content">
           
            <span className="navbar-close-button" onClick={closeModal}>&times;</span>
            <div className="navbar-modal-header">
              <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now <span role="img" aria-label="emoji">🤘</span></p>
            </div>
            <div style={{height:'500px'}}> <div style={{display:'flex',justifyContent:'flex-end',marginBottom:'0px',height:'35px'}}>
             {tcsb? ( <p style={{fontFamily:'sans-serif',fontSize:'14px'}}>Already Have an account? <span style={{color:'blue'}}> <button style={{backgroundColor:'transparent',border:'none',color:'blue'}} onClick={signin}>Sign In</button></span></p>
           ):
           (<p style={{fontFamily:'sans-serif',fontSize:'14px'}}>Don't have an account? <span style={{color:'blue'}}><button style={{backgroundColor:'transparent',border:'none',color:'blue'}} onClick={freeacc}>Create One its free</button></span></p>
)}
            
            </div>
           {hb? ( <p style={{margin:'0px',fontWeight:'bold',fontSize:'25px'}}>Create Account</p>
           ):
           (
            <p style={{margin:'0px',fontWeight:'bold',fontSize:'25px'}}>Sign in</p>
           )
            }
            <form>
            
              <div style={{display:'flex',gap:'100px'}}>
              <div style={{marginTop:'20px'}}>
              
              {flb && (<div className="navbar-form-group">
                
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
              </div>
              )}
              <div className="navbar-form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="navbar-form-group">
                <input type="password" name="password" placeholder="Password" required />
                 </div>
                {cpb && ( <div className="navbar-form-group">
                 <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
                
                 </div>)}
                 
                 { csb ? (<button type="submit" className="navbar-create-account-button" onClick={Handlecreate_acc}>Create Account</button>):
               
               (<button type="submit" className="navbar-create-account-button" onClick={Handlecreate_acc}>Sign In</button>
               )
                }
                 <div className="navbar-social-signup">
            {lb ? (
              <>
              <button className="navbar-social-button facebook"><img src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" style={{width:'40px',height:'20px'}}></img>Sign up with Facebook</button>
              <button className="navbar-social-button google"><div style={{width:'20px',height:'20px'}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" style={{width:'100%',height:'100%',backgroundSize:'cover',overflow:'hidden'}}></img></div>Sign up with Google</button>
              </>):
            (<>
              <button className="navbar-social-button facebook"><img src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" style={{width:'40px',height:'20px'}}></img>Sign in with Facebook</button>
              <button className="navbar-social-button google"><div style={{width:'20px',height:'20px'}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" style={{width:'100%',height:'100%',backgroundSize:'cover',overflow:'hidden'}}></img></div>Sign in with Google</button>
              </>)
            }
              </div>
              
              </div>
              
              <div>
              <img src={Like} className='navbar-like-img-div'></img>
                  
           {sb && ( <p className="navbar-terms">By signing up, you agree to our Terms & conditions, Privacy policy</p>)
          }
              </div>
              </div>
             
            </form>
            </div>
            
        </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
