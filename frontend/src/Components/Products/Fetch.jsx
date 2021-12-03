import { useEffect, useState } from "react";

const Fetch = () => {

    const [products, setpProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const responce = await fetch(
                "https://striveschool-api.herokuapp.com/api/product/",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                    },
                }
            );
            if (!responce.ok) {
                throw new Error("fail to fetch");
            }
            const data = responce.json()
            setpProducts(data)
        } catch (error) {
            throw new Error(error);
        }
    };
}

export default Fetch