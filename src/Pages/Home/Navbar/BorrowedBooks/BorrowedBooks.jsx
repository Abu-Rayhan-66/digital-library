import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";


const BorrowedBooks = () => {
    
    const {user} = useContext(AuthContext)
    const currentUser = user.email

    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5005/borrowed')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.email === currentUser)
        setFilterData(filterDataNew)
    },[data, currentUser])
    
   console.log(filterData)
    console.log(data)

    return (
        <div>
            {
                loading ? <div className="h-[50vh] flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>:
                <div>
                    {
                        filterData.map(item => <p key={item._id} >{item.name}</p>)
                    }
                </div>
            }
        </div>
    );
};

export default BorrowedBooks;