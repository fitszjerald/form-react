import React from 'react'

function Persons({persons,deleteperson}) {
    const personList = persons.map((person,index) =>{
        return(
                <tbody key={index}>
                        <tr>
                            <th>{index+1}</th>
                            <th>{person.firstName}</th>
                            <th>{person.lastName}</th>
                            <th>{person.idCard}</th>
                            <th><button onClick={()=>{deleteperson(index)}} className="btn btn-primary">حذف</button></th>
                        </tr>
                    </tbody>
                
        
        )
    })
  return (
    <div className='container' style={{marginTop:20,direction:"rtl"}}>
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>ردیف</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>کدملی</th>
                <th>حذف</th>
              </tr>
            </thead>     
            {personList}
          </table>
        </div>
      </div> 
      </div>
  )
}

export default Persons
