
import Navbar from '../features/navbar/Navbar';
import ProductDetail from '../features/product/components/ProductDetail';
import Product from '../features/product/components/ProductList';

function Home() {
return (
    <div>
    <Navbar>
        <Product></Product>
        {/* <Checkout></Checkout> */}
        <ProductDetail/>
    </Navbar>
    </div>
);
}
export default Home;