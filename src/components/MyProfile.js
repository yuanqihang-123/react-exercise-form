import React, { Component } from 'react';
import './myProfile.less';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class MyProfile extends Component {

  state ={
    name:"zs",
    gender:"male",
    description:"gadg",
  }

  changeName(e){
      this.setState({
        name:e.target.value,
      })
  }

  changeDescription(e){
    this.setState({
      description:e.target.value,
    })
  }

  changeGender(e){
    this.setState({
        gender:e.target.value,
    })
  }

  submit(e){
    e.preventDefault()
    console.log(this.state.name)
    console.log(this.state.gender)
    console.log(this.state.description)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e)=>this.submit(e)}>
          <div className="form-group row">
            <label htmlFor="inputName3" className="col-sm-2 col-form-label">name</label>
            <div className="col-sm-10">
              <input type="name" className="form-control" id="inputName3" value={this.state.name} onChange={(e)=>this.changeName(e)}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputGender3" className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">

              <div className="input-group mb-3">
                
                <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon" onChange={(e)=>this.changeGender(e)}>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputDescription3" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="Description" className="form-control" id="inputDescription3" value={this.state.description} onChange={(e)=>this.changeDescription(e)}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary" disabled={this.state.name==""||this.state.description==""} >submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;


