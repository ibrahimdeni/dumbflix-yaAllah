// import React from 'react'
// import {
// //   FaEnvelope,
// //   FaFemale,
// //   FaMale,
// //   FaMapMarked,
// //   FaPhone,
// //   FaRegMoneyBillAlt,
//   FaUserCircle,
// } from "react-icons/fa";

// import Card from 'react-bootstrap/Card';

// function TextExample() {
//   return (
//     <div className='bg-danger pt-5' style={{height:"100%"}}>
//         <Card style={{ width: '50%' }} className="bg-dark text-light mx-auto pt-5">

//         <div className="d-flex">
//             <div style={{width:"65%"}}>
//             <Card.Body>
//                 <Card.Title style={{marginTop:"-25px"}} className="mb-2">Personal Info</Card.Title>

//                 <div className='d-flex' style={}>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>

//                 <div className='d-flex'>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>

//                 <div className='d-flex'>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>

//                 <div className='d-flex'>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>

//                 <div className='d-flex'>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>

//                 <div className='d-flex'>
//                     <FaUserCircle className='text-danger my-auto fs-1'/>
//                     <div className='ms-3 mt-3'>
//                     <h5>hello</h5 >
//                     <p className="text-muted">Full Name</p>
//                     </div>      
//                 </div>               
//                 <Card.Link href="#">Card Link</Card.Link>
//                 <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//             </div>

//             <div style={{width:"35%", marginTop:"-10px"}} className="bg-primary">
//                 <h2>hello</h2>
//             </div>

//         </div>
//         </Card>
//     </div>
//   );
// }

// export default TextExample;

import React from 'react'
import {
  FaEnvelopeSquare,
  FaFemale,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaTicketAlt,
  FaUserCircle,
} from "react-icons/fa";
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileUser from '../images/profileUser.png'
const initialUser = {
  email: "",
  password: "",
  fullname: "",
  gender: "",
  phone: "",
  address: ""
}
function Profile() {

  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState(initialUser)

  const user = JSON.parse(localStorage.getItem('user'))

  const navigate = useNavigate()

  useEffect(()=> {
    if(user){
      setIsLogin(true)
      setUserData({
        ...userData,
        email: user?.email,
        password: user?.password,
        fullname: user?.fullname,
        gender: user?.gender,
        phone: user?.phone,
        address: user?.address
      })
    }
    else{
      setIsLogin(false)
      setUserData(initialUser)
      navigate('/')
    }
  }, [user, isLogin])
  

  return (
    <div style={{width:"100%", height:"100%"}} className="bg-dark">
        <Container>
        <Row className="justify-content-center">
        <Col md={8} className="mt-5 mb-5">
            <Card className="rounded shadow border-0 bg-dark text-white p-5">
            <div className="d-flex justify-content-between">
                <div className="me-5">
                <h3>Personal Info</h3>
                <div className="mt-3">
                    {/* Full Name */}
                    <div className="d-flex mb-3 align-items-start">
                    <FaUserCircle className="me-3 fs-1" style={{color:"red"}} />
                    <div>
                        <h5>{userData.fullname}</h5>
                        <p className="text-muted">Full Name</p>
                    </div>
                    </div>
                    {/* Email */}
                    <div className="d-flex mb-3 align-items-start">
                    <FaEnvelopeSquare className="me-3 fs-1" style={{color:"red"}} />
                    <div>
                        <h5>{userData.email}</h5>
                        <p className="text-muted">Email Address</p>
                    </div>
                    </div>
                    {/* Status */}
                    <div className="d-flex mb-3 align-items-start">
                    <FaTicketAlt className="me-3 fs-1" style={{color:"red"}}/>
                    <div>
                        <h5>{userData.status}Active</h5>
                        <p className="text-muted">Status</p>
                    </div>
                    </div>
                    {/* Gender */}
                    <div className="d-flex mb-3 align-items-start">
                    {userData.gender === "Male" ? (
                        <FaMale className="me-3 fs-1" style={{color:"red"}}/>
                    ) : (
                        <FaFemale className="me-3 fs-1" style={{color:"red"}}/>
                    )}
                    <div>
                        <h5>{userData.gender}</h5>
                        <p className="text-muted">Gender</p>
                    </div>
                    </div>
                    {/* Phone */}
                    <div className="d-flex mb-3 align-items-start">
                    <FaPhone className="me-3 fs-1" style={{color:"red"}}/>
                    <div>
                        <h5>{userData.phone}</h5>
                        <p className="text-muted">Phone Number</p>
                    </div>
                    </div>
                    {/* Address */}
                    <div className="d-flex mb-3 align-items-start">
                    <FaMapMarkerAlt className="me-3 fs-1" style={{color:"red"}}/>
                    <div>
                        <h5>{userData.address}</h5>
                        <p className="text-muted">Address</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                <img className='rounded' src={profileUser} alt="nophoto" height={400}/>
                <Button
                    style={{backgroundColor:"red"}}
                    variant="danger"
                    className="changePhotoBtn mt-2 btn-md px-2 py-1 ms-1 fw-bold" 
                >
                    Change Photo
                </Button>
                </div>
            </div>
            </Card>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Profile