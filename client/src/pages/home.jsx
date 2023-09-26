export default function Home() {
  return (
    <div className="content">
      {resultedSearchTerm && (
        <div className="result-bar">
          <div className="results">
            <span>
              Results for "{resultedSearchTerm}": {products?.length}
            </span>
          </div>
          <div className="sort-by">
            <label>Sort By: </label>
            <button>Default</button>
          </div>
        </div>
      )}
      {products?.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </div>
  );
}
