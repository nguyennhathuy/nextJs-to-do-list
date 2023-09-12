import { useRouter } from "next/router";

function ItemDetailt(props) {
    const router = useRouter();
    const query = router.query;
    console.log(query);
    return (
        <div>
            <h1>Hello {query.projectId} </h1>
        </div>
    )
}

export default ItemDetailt;