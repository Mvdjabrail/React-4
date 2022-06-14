import products from './component/Product';
import Table from './component/Table';
function App() {
  return (<>
    {products.map((prod) => (
      <Table id={prod.id} left={prod.left} name={prod.name} price={prod.price} image={prod.image} />
    ))}
  </>
  );
}

export default App;
