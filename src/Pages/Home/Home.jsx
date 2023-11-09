import Banner from "./Banner/Banner";
import BookCategory from "./BookCategory/BookCategory";
import ChooseUs from "./ChooseUs/ChooseUs";
import Footer from "./Footer/Footer";
import RecentBooks from "./RecentBooks/RecentBooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <ChooseUs></ChooseUs>
            <RecentBooks></RecentBooks>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;