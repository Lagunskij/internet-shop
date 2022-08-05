import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product:IProduct
}

export const Product = ({product}:ProductProps) => {

    const [details, setDetails] = useState(false)
const showDeteils = () => {
        setDetails(prev => !prev)
}

const btnBgClassName = details ? "bg-amber-800 hover:bg-amber-500" : "bg-blue-300 hover:bg-blue-500"
const btnClasses = ["py-2 px-4 border  transition rounded", btnBgClassName]
    return (
        <>
            <div className="border py-2 px-4 flex flex-col items-center mb-2">
               <img src={product.image} className="w-1/6" alt={product.title}/>
               <p>
                   {product.title}
               </p>
                <span className="font-bold">{product.price}</span>
                <button className={btnClasses.join(' ')}
                onClick={showDeteils}>
                    { details ? "Hide details" : "Show details"}
                </button>
                { details && <div>
                    <p>{product.description}</p>
                    <p className="text-2xl">Rete:{product.rating.rate}</p>
                </div>}
            </div>
        </>
    )
}
