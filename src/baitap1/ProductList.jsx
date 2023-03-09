import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                {/* Page Features*/}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                    <ProductItem />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductList