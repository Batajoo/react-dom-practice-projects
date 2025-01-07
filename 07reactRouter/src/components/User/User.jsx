import { useParams } from "react-router";

export default function User(){
    const {userid} = useParams();
    return (
        <>
        User {userid}
        </>
    );
}