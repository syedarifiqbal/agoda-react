import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import Pagination from "../components/pagination/index";
import Product from "../components/product";
import { useSearchParams } from "react-router-dom";

export default function Products() {
    const { products, fetchProducts, totalProducts } = useContext(ProductContext);
    const [queryParams, setQueryParams] = useSearchParams();
    const [page, setPage] = useState(queryParams.page || 1);

    useEffect(() => {
        if (page > 1) {
            setQueryParams({ page })
        } else {
            setQueryParams({})
        }
        fetchProducts(page)
    }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Products ({totalProducts})</h2>
            <div className="row">
                {products.map(p => <Product product={p} key={p.id} />)}
            </div>
            {products.length > 0 ?
                <Pagination className="pagination" showTotal={(total, range) =>
                    `${range[0]} - ${range[1]} of ${total} items`
                }
                    total={totalProducts}
                    showPrevNextJumpers={false}
                    offset={0}
                    prevIcon="<<"
                    nextIcon=">>"
                    pageSize={12}
                    current={page}
                    onChange={page => setPage(page)}
                />
                : null}
        </main>
    );
}
