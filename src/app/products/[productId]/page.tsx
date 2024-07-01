import { Metadata } from "next";

type Props = {
    params: {
        productId: String;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}

const ProductDetails = ( { params }: {
    params: {productId: string};
} ) => {
    return <h1>Details about product {params.productId}</h1>
}

export default ProductDetails;