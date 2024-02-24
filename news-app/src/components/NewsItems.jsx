import React from 'react'

const NewsItems = ({title,description,src,url}) => {
  return (
    <>
 <div class="card mb-3 bg-dark text-light" style={{maxWidth:'100%'}}>
  <div class="row g-0">
    <div class="col-md-4" >
      <img src={src} class="img-fluid rounded-start"  alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={url} className='btn btn-primary'>Read More</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default NewsItems;