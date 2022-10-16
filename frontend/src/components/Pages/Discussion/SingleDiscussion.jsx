import React from 'react'
export default function SingleDiscussion(props) {
  return (
   <div className="alert alert-dark my-4 row" role="alert">
         <div className='col'>
         <a href={'/discussion/'+props.link}><h5>{props.title}</h5></a>
            <p>Published On: {props.date}</p>
         </div>
         <div className='col'>
         <h6 style={{textAlign:"center", paddingTop:"20px"}}>{props.tags}</h6>
         </div>
            {/* <div className='col col-lg-2'>
              <img width={"84px"} src={props.imgurl} alt='tcs'/>
              </div> */}
        </div>
 
  )
}
