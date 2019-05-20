import React, { Component } from 'react'
class AddPerson extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          id:'',  
         firstName: '',
         lastName: '',
         idCard: '',
      }
    }
    
    handleChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPerson(this.state)
    }
  render() {
    return (
       <div className='contatiner-fluid' style={{marginTop:40,direction:'rtl'}}>
          <div className='row justify-content-center'>
            <div className="col-lg-3"> 
             <form onSubmit={this.handleSubmit} className='from-inline'>
                <div className="form-group">
                    <input id='firstName' type="text" onChange={this.handleChange} className='form-control' placeholder='نام'/>
                </div>
                <div className="form-group">
                    <input id='lastName' type="text" onChange={this.handleChange} className='form-control' placeholder=' نام خانوادگی'/>
                </div>
                <div className="form-group">
                    <input id='idCard' type="text" onChange={this.handleChange} className='form-control' placeholder='شماره ملی'/>
                </div>
                    <button className="btn btn-primary">اضافه به لیست</button>
            </form>
           </div>
          </div>
       </div>
    )
  }
}

export default AddPerson
