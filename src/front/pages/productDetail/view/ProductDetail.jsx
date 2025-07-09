import Navbar from "../components/Navbar";
import Slide from "../components/Slide";

const ProductDetail = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar items={["Home","A","B","C","D"]}/>
            

            <Slide items={[
                {
                    "id" : 1,
                    "image" : "dsfasd"
                },
                {
                    "id" : 2,
                    "image" : "dsfafgyhdfg"
                }
            ]}/>
        </div>
    )
}

export default ProductDetail;