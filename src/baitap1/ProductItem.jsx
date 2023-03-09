import React from 'react'

function ProductItem() {
  return (
    <div className="card bg-light border-0 h-100">
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="fab fa-bootstrap"></i></div>
        <h2 className="fs-4 fw-bold">Feature boxes</h2>
        <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
      </div>
    </div>
  )
}

export default ProductItem