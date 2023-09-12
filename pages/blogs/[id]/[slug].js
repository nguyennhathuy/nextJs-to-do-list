import { useRouter } from "next/router";

function SlugBlogItem() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>Hello slug blog item</h1>
        </div>
    )
};

export default SlugBlogItem;