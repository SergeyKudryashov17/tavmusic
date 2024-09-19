import { bestProductList } from "@/entities/Product";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import ProductsSlider from "@/features/ProductsSlider";
import Section from "@/shared/ukit/Section";
import ProductInfo from "@/widgets/ProductInfo";
import { getIDfromURL } from "@/shared/utils";

const ProductPage = () => {
    const productID = getIDfromURL();

    return (
        <>
            <Header />

            <main>
                <Container>
                    <Section>
                        { productID !== null 
                            ? ( <ProductInfo productID={Number(productID)}/> ) 
                            : ( <div>Нет такого товара</div> )
                        }
                    </Section>

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