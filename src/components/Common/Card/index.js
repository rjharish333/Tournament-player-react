import React from 'react'
import "./index.css";

const Card = ({type, title, content}) => {
  return (
    <div class="card-item">
        <div class="text-wrapper-card">
            {
                type === "contact" &&
                <>
                <h2 class="small-title"><i class="icon fal fa-envelope icon"></i> {title}</h2>
                <a href={`mailto:${content}`}>{content}</a>
                </>
            }
        </div>
    </div>
  )
}

export default Card