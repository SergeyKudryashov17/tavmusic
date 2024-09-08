import BigSlider from "@/features/BigSlider";
import Container from "@/shared/ukit/Container";
import GridCategories from "@/widgets/GridCategories";
import Header from "@/widgets/Header";

const MainPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>

            <BigSlider />

            <Container>
                <GridCategories />
            </Container>
        </>
    );
}

export default MainPage;