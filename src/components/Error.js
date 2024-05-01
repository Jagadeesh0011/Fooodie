import { useRouteError } from "react-router-dom";


const Error = () => {

    const err = useRouteError();

    console.log(err);

    return (
        <div>
            <h1>
                Ooopss!!

                Your Body is not Loaded!!!!!!!!!!!!!!!!!!
            </h1>
            <br/>
            <br/>
            <h1> {err.status} :  {err.statusText}</h1>
        </div>
    )

}

export default Error;