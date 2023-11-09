

const RecentBooks = () => {
    return (
        <div>
            <div >
            <h2 className="mt-10 text-center text-3xl font-bold text-blue-500">New Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-20 gap-6">
            
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/hZqy9kg/stack-colorful-books-74855-314.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">The Sanatorium</h2>
                
            </div>
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/4tYgXJP/stack-notebooks-with-black-cover-23-2147803558.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">The Four Winds</h2>
                
            </div>
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/ZVTD9JR/two-books-wrappers-23-2147803590.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">The Vanishing Half</h2>
                
            </div>
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/DKjwzpB/stack-books-with-word-front-1340-27740.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">The Last House on Needless Street</h2>
                
            </div>
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/vvBPzQH/color-books-reading-school-isolated-1308-33252.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">The Rose Code</h2>
                
            </div>
            <div >
                <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/HqzxgTY/stacked-books-1204-6.jpg" alt="" />
                <h2 className="text-center text-blue-500 text-lg font-semibold">Project Hail Mary</h2>
                
            </div>
            
        </div>
        </div>
        </div>
    );

};

export default RecentBooks;