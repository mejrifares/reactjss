// import React, { Component } from 'react'

// class Form extends Component {
//     render() {
//         return (
//             <div>
//               <h1>nice man</h1>
//             </div>
//         )
//     }
// }

// export default Form
import React, { Component } from 'react'
import "../components/Form.css"
function Form() {
  return (
    <div>
      <div className="style">

        <form>
          <div>
            <img className="imgstyle" src="/img/user.log.png"/>
          </div>
          <div>
            <h1 className="h1style">Log In Here</h1>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name=""placeholder="Enter Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name=""placeholder="Enter Password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>

    </div>
  )
}


export default Form



