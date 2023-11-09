import Banner from "./Banner/Banner";
import BookCategory from "./BookCategory/BookCategory";
import Footer from "./Footer/Footer";
import RecentBooks from "./RecentBooks/RecentBooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <RecentBooks></RecentBooks>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;