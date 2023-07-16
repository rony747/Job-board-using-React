import Hero from "@/components/Hero.jsx";
import Feature from "@/components/Feature.jsx";
import PageLayout from "@/pages/PageLayout.jsx";


function HomePage() {
    return (
        <>
            <PageLayout>
                <Hero/>
                <Feature/>
            </PageLayout>

        </>
    );
}

export default HomePage;