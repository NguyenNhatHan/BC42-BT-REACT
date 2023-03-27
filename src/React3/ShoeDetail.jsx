import React from "react";

function ShoeDetail({ product, onClose }) {
    if (!product) {
        return null;
    }
    return (
        <>
            <div
                className="modal fade show"
                style={{ display: "block" }}
                tabIndex={-1}
            >
                <div className="card-body modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        <div className="text-center mt-3">
                            <h3>{product.name}</h3>
                            <img
                                src={product.image}
                                alt={product.name}
                                width="50%"
                                height="330px"
                            />
                        </div>
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Price:</td>
                                        <td>{product.price}$</td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td>
                                        <td>{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td>ShortDescription:</td>
                                        <td>{product.shortDescription}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity:</td>
                                        <td>{product.quantity}.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={onClose}>Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>
    );
}

export default ShoeDetail;