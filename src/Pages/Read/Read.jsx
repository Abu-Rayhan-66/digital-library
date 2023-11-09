import { useLoaderData } from "react-router-dom";


const Read = () => {

    const bookSummary = useLoaderData()
    const { summary, name } = bookSummary

    return (
        <div>
            <h2 className="text-blue-500 mt-10 mb-10 text-center text-2xl font-semibold">{name}</h2>
            <p className="text-xl mx-6 md:mx-20 text-blue-400">{summary}</p>
        </div>
    );
};

export default Read;