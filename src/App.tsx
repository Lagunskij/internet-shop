import React from 'react';
import './App.css';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMasage} from "./components/ErrorMasage";



function App() {

const {products, error, loading} = useProducts()


    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMasage error={error}/>}
            {products.map(products => <Product key={products.id} product={products}/>)}

        </div>
    );
}

export default App;
