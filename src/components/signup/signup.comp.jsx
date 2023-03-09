import React, { useState } from "react";

function SignupComp() {
  const [email, setEmail] = useState(null)
  const [department, setDepartment] = useState(null)
  const [password, setPassword] = useState("")


  return <div className="">
    <div className="">
      <h2>
        SRM HUB Mobile Interface coming soon... <br></br>
        To use the application open it in desktop or tablet.
      </h2>
    </div>
    <div className="">
      <div>
        <div className="">
          {/* <img src={Logo1} className="" /> */}
        </div>
        <h1>
          Welcome to the<br></br>SRM HUB
        </h1>
      </div>
      <div className=""> &copy; Copyrights All Rights Reserved </div>
    </div>
    <div className="">
      <h1>Sign Up</h1>
      <div className="">
        <p>Enter the following details to request access in the portal</p>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <label>Email</label>
            <input type="email" placeholder="Ex. abc@srmist.edu.in" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="">
            <label>Department</label>
            <input type="String" placeholder="Ex. CTech, CSBS, etc" onChange={(e) => setDepartment(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/login">Already have Access? Login</Link>
      </div>
      <div className="">
        <button onClick={() => { handleSignup() }}>Sign Up</button>
      </div>
    </div>
  </div>;
}

export default SignupComp;
