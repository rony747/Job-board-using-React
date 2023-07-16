import Header from "@/components/parts/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/parts/Footer.jsx";

function PageLayout({children, classes}) {
    return (
        <>

            <div className="mainWrap bg-gray-200 ">
                <div className="pageArea max-w-[1400px] bg-white m-auto min-h-[100vh] ">
                    <Header/>
                    <div className='main_content_area bg-white min-h-[400px]'>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default PageLayout;