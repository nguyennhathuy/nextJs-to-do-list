import { useRouter } from "next/router";

function TestDynamicFunc() {
    const router = useRouter();
    console.log( 'array' , router.query);
    return (
        <div>
            <h1>Hello Test dynamic func</h1>
        </div>
    );
};

export default TestDynamicFunc;