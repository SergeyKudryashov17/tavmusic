import { bestProductList } from "@/entities/Product";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import ProductsSlider from "@/features/ProductsSlider";
import Section from "@/shared/ukit/Section";

const ProductPage = () => {
    return (
        <>
            <Header />

            <main>
                <Container >
                    <div>Хлебные крошки</div>
                    <div>Блок с информацией о товаре</div>
                    <div>Вкладки</div>

                    <Section>
                        <Headline view={HeadlineViews.H4}>
                            Смотрите также
                        </Headline>
                        <ProductsSlider productList={bestProductList} />
                    </Section>
                </Container>
            </main>

            <Footer />
        </>
    );
}
export default ProductPage;