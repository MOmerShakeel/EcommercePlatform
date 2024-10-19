import "../ProductList/ProductList.css"

function ProductList(){
    return (
    <>
    <div className="productlist-main">
        <div className="productlist-featured-section">
            <ul>
                <li>
                    Product 1
                </li>
                <li>
                    Product 2
                </li>
                <li>
                    Product 3
                </li>
            </ul>
        </div>
        <div className="productlist-viewmore-button">
            <button>View More</button>
        </div>
    </div>
    </>
);
}

export default ProductList;