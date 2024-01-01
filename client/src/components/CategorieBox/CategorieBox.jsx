import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string';

const CategorieBox = ({ categorie, selected }) => {
    const [params, setParams] = useSearchParams();
    const { icon: Icon, label} = categorie;
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};

        if(params){
            currentQuery = qs.parse(params.toString());

            let updatedQuery = {...currentQuery, category: label};
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })

            navigate(url);
        }
    }

    params.get('category')

    return (


        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 ${selected == label ? "border-b-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"} border-b-2 hover:text-neutral-800 cursor-pointer transition-all`}>
            <Icon size={26} />
            <div className="text-sm font-medium">{label}</div>
        </div>
    )
}

export default CategorieBox