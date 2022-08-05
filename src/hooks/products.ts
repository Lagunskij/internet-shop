import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(" ")

    async function fetchProducts() {
        try {
            setError(' ')
            setLoading(true)
            const respons = await axios.get('https://fakestoreapi.com/products/?limit=6')
            console.log(respons)
            setProducts(respons.data)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, error, loading}
}
