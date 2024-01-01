import { useSearchParams } from "react-router-dom";
import CategorieBox from "../CategorieBox/CategorieBox"
import Container from "../Shared/Container"
import { categories } from "./categoriesData"

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
  

    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {categories.map((categorie) => {
                    return <CategorieBox key={categorie.label} categorie={categorie} selected={category}/>
                })}
            </div>
        </Container>
    )
}

export default Categories