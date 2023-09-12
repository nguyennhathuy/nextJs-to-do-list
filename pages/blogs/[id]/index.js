import { useRouter } from "next/router";

function IdBlog() {
    const router = useRouter();
    console.log('2', router.query);
    return (
        <div>
            <h1>hello id blog</h1>
        </div>
    );
};

export default IdBlog;