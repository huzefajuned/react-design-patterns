import "./App.css";
import useProducts from "./hook/useProducts";

function App() {
  const { products, loading, error } = useProducts();


  
  if (loading) return <div>...loading ....</div>;
  if (error) null;

  return (
    <div className="bg-white p-2 rounded-xl">
      <h1 className="text-4xl pb-2 font-bold"> Custom Hooks Pattern... </h1>
      Products : {products?.length}
      <ul>
        {products.map((product) => (
          <div className="bg-transparent  text-gray-500 p-2 m-2">
            <h2> Title : {product.title} </h2>
            <h2> Descr : {product.description} </h2>
            <h2> category : {product.category} </h2>
            <h2>
              image : <img src={product.image} width={100} height={100} />{" "}
            </h2>
            <h2 className="text-black font-bold">Price : {product.price}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
