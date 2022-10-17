import './login.css'
import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from '../../../context/AuthContext'

const Register = () => {
  const { getLoggedIn } = useContext(AuthContext);
    const history = useNavigate()
    const [getotp,setGetotp]=useState("");
    const [ user, setUser] = useState({
        name: "",
        email:"",
        phoneno:"",
        otp:"",
        password:"",
        passwordVerify: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    async function signup() {
      try {
        const { name, email,phoneno, password,passwordVerify } = user
        await axios.post("/auth/register",user);
        await getLoggedIn();
        history("/");
      } catch (err) {
        console.error(err);
      }
    }
    
    async function getotpfrombackend() {
      try {
      const {email} = user;
       // console.log(email);
      await axios.post("/auth/getotp",{"email":email})
      .then(res => {
        const data = res.data
        setGetotp(data);
        // console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
      // setGetotp(otpgeted);
      } catch (err) {
        console.error(err);
      }
    }

    const register = () => {
      // console.log(user);
        const { name, email,phoneno,otp, password,passwordVerify } = user
        // console.log(otp-'0');
        // console.log(getotp);
        if(otp-'0'!==getotp&&getotp!==""){
          alert("Invalid Phone OTP");  
        }
        else if(phoneno.length!==10){
          alert("Invalid Phone Number");
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
          alert("Invalid Email");
        }
        else if(!((password === passwordVerify))){
          alert("Password Does not Match")
        }
        else if(name&& email && phoneno && password && (password === passwordVerify)){
            signup();
        } else {
            alert("Please fill all the fields")
        }
      }

   return (
    <div><div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center  mt-5">New User !</h2>
        <div className="text-center mb-5 ">Let's Join us</div>
        <div className="card my-5">

          <div className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://img.icons8.com/color/344/test-account.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" name="name" 
            value={user.name} 
            placeholder="Enter Your Name" 
            onChange={ handleChange }/>
            </div>
            
            <div className="mb-3 row">
              <input  className="form-control col mx-3" type="text" name="email"
             value={user.email}
              placeholder="Enter Your Email"
               onChange={ handleChange }/>
               <button type="button"onClick={()=>{getotpfrombackend()}} class="btn btn-outline-secondary mx-2 col col-lg-2">OTP</button>
            </div>
            
            <div className="mb-3">
              <input className="form-control" type="text" name="otp"
              value={user.otp}
              placeholder="Enter Your OTP"
               onChange={handleChange}/>
            </div>  

            <div className="mb-3">
              <input  className="form-control" type="tel" name="phoneno"
             value={user.phoneno}
              placeholder="Enter Your Phone Number"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control" type="password" name="password"
             value={user.password}
              placeholder="Enter Your Password"
               onChange={ handleChange }/>
            </div>
            <div className="mb-3">
              <input className="form-control"type="password" name="passwordVerify"
             value={user.passwordVerify}
              placeholder="Re-enter Password" 
              onChange={ handleChange }/>
            </div>
            <div className="text-center"><button className="btn btn-color px-5 mb-5 w-100" onClick={register}>Register</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
              Registered? <a href="/login" className="text-dark fw-bold"> Login</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    </div>
  )
}

export default Register