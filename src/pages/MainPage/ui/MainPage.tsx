import BigSlider from "@/features/BigSlider";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Section from "@/shared/ukit/Section";
import GridCategories from "@/widgets/GridCategories";
import Header from "@/widgets/Header";

const MainPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>

            <BigSlider />

            <Section>
                <Container>
                    <Headline view={HeadlineViews.Section}>
                        Категории товаров
                    </Headline>
                    <GridCategories />
                </Container>
            </Section>
        </>
    );
}

export default MainPage;