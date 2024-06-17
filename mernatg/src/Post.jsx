import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap'; // Importing Row and Col from Bootstrap

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: auto; /* Changed height to auto */
  margin: 20px auto;

`;

const Image = styled.img`
  width: 100%;
  height: 210px;
`;

const Content = styled.div`
  padding: 20px;
  word-wrap: break-word;
  overflow: hidden;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #757575;
  overflow: hidden;
  word-wrap: break-word;
`;

const CategoryIcon = styled.span`
  margin-right: 5px;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 25px;
  color: #333;
  word-wrap: break-word;
  overflow: hidden;
`;

const Description = styled.p`
  color: #757575;
  overflow: hidden;
  font-size: 15px;
  word-wrap: break-word;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-family: sans-serif;
  font-size: 20px;
  word-wrap: break-word;
  overflow: hidden;
`;

const Views = styled.div`
  margin-top: 10px;
  color: #757575;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const ViewIcon = styled.span`
  margin-right: 5px;
`;

const CardComponent = ({suitcase, image, category, categoryIcon, title, description,button,buttoncolor,buttoncontent, authorImage,date,location, authorName, views, viewIcon, emoji, uppertitle }) => {

  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [csb,setcsb]=useState(true);
  const [hb,sethb]=useState(true);
  const [flb,setflb]=useState(true);
  const [cpb,setcpb]=useState(true);
  const[lb,setlb]=useState(true);
  const[sb,setsb]=useState(true);
 

  function closeModal() {
    setIsModalOpen(false);
  }
  function Signin(e){
    e.preventDefault()
    setcsb(false);
    sethb(false);
    setflb(false);
    setcpb(false);
    setlb(false);
    setsb(false);

  }
  function freeacc(e){
    e.preventDefault()
    setcsb(true);
    sethb(true);
    setflb(true);
    setcpb(true);
    setlb(true);
    setsb(true);


  }
  function handlewrite(){
    setIsModalOpen(true);
  }
  
  return (
    <>
    <Col xs={19} md={12} lg={11} atyle={{height:'500px',padding:'100px'}}> {/* Using Col component for responsiveness */}
      <Card>
       {image && <Image src={image} alt="Card Image" />}
        <Content>
          <Category>
            <CategoryIcon>{categoryIcon}</CategoryIcon>
            {category}
          </Category>
          <div style={{ display: 'flex' }}><p style={{ fontSize: '39px' }}>{emoji}{uppertitle}</p></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <Title>{title}</Title>
            <i className="fa-solid fa-ellipsis" style={{ fontSize: '20px' }}></i></div>
          <Description>{description}</Description>
          {(location&&date) && (<div style={{display:'flex',gap:'100px'}}><div style={{display:'flex',gap:'5px',alignItems:'center'}}><i class="fa fa-calendar" aria-hidden="true"></i><span style={{fontWeight:'bolder'}}>{date}</span></div>
            <div style={{display:'flex',gap:'5px',alignItems:'center'}}> <i class="fa fa-map-marker" aria-hidden="true"></i><span style={{fontWeight:'bolder'}}>{location}</span></div>
          </div>)}
          {(suitcase&&location) && (<div style={{display:'flex',gap:'100px'}}><div style={{display:'flex',gap:'5px',alignItems:'center'}}><i class="fas fa-suitcase" aria-hidden="true"></i><span style={{fontWeight:'bolder'}}>{suitcase}</span></div>
            <div style={{display:'flex',gap:'5px',alignItems:'center'}}> <i class="fa fa-map-marker" aria-hidden="true"></i><span style={{fontWeight:'bolder'}}>{location}</span></div>
          </div>)}
          {button &&(
            <div>
              <button style={{width:'100%',backgroundColor:'transparent',border:'1px solid black',color:buttoncolor,marginTop:'10px',borderRadius:'7px',height:'40px'}}>{buttoncontent}</button>
            </div>
          )
          }
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Author>
              <AuthorImage src={authorImage} alt="Author" />
              <AuthorName>{authorName}</AuthorName>
            </Author>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Views>
                <ViewIcon><i class="fa-solid fa-eye"></i>
                </ViewIcon>
                {views} views
              </Views>
              <button style={{ border: 'none', borderRadius: '3px', cursor: 'pointer', width: '50px', height: '40px' }}><i className="fas fa-share-alt" style={{ fontSize: '20px' }}></i></button>
            </div>
          </div>
        </Content>
      </Card>
      {
    IsModalOpen? (<>
     <div className="navbar-modal">
          <div className="navbar-modal-content">
           
            <span className="navbar-close-button" onClick={closeModal}>&times;</span>
            <div style={{height:'900px'}}>
           {hb? ( <p style={{margin:'0px',fontWeight:'bold',fontSize:'25px'}}>Create Account</p>
           ):
           (
            <p style={{margin:'0px',fontWeight:'bold',fontSize:'25px'}}>Sign in</p>
           )
            }
            <form>
            
              <div style={{display:'flex',gap:'100px'}}>
              <div className="div-form">
              
              {flb && (<div className="navbar-form-group">
                
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              )}
              <div className="navbar-form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="navbar-form-group">
                <input type="password" name="password" placeholder="Password" />
               </div>
                {cpb && ( <div className="navbar-form-group">
                 <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                
                 </div>)}
                 
                 { csb ? (<div style={{display:'flex',justifyContent:'space-between'}}><button type="submit" style={{backgroundColor:'#2F6CE5',borderRadius:'10px',color:'white',height:'50px',marginTop:'10px',border:'none'}}>Create Account</button><button style={{backgroundColor:'transparent',border:'none',color:'blue'}} onClick={Signin}>Or,Sign In</button></div>):
               
               (<div style={{display:'flex',justifyContent:'space-between'}}><button type="submit" style={{backgroundColor:'#2F6CE5',borderRadius:'10px',color:'white',height:'50px',marginTop:'10px',border:'none'}}>Welcome Back!</button><button style={{backgroundColor:'transparent',border:'none',color:'blue'}} onClick={freeacc}>Or,Create</button></div>
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
             {sb && ( <p className="navbar-terms">By signing up, you agree to our Terms & conditions, Privacy policy</p>)
          }
              
              </div>
              
              </div>
              
              
                  
          
              </div>
             
            </form>
            </div>
            
        </div>
        </div>
    
    </>):(<></>)
  }
    <div className="write-icon" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button className="write-circle-button" onClick={handlewrite}>
              <i className="fas fa-pencil-alt" style={{ color: 'white' }}></i>
            </button>
          </div>
    </Col>
   
    </>
  
  );
};

export default CardComponent;
