import React from 'react'

export default function Question(props) {
   return (
    <a target="_blank" href={props.link} class="list-group-item d-flex justify-content-between align-items-center">
    <a >{props.title}</a>
    <p style={{color:"blue"}}  >#{props.tag}</p> 
    <span class="badge badge-secondary badge-pill">
      <img  src={props.logo} width={"20px"} alt='leetcode'/>
    </span>
    </a>
  )
}
