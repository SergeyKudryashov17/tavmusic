import BigSlider from "@/features/BigSlider";
import ListBenefits from "@/features/ListBenefits";
import ProductsSlider from "@/features/ProductsSlider";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Section, { SectionViews } from "@/shared/ukit/Section";
import GridCategories from "@/widgets/GridCategories";
import Header from "@/widgets/Header";
import BrandSlider from "@/features/BrandSlider";
import ArticleList from "@/features/ArticleList";
import { ArticleListView } from "@/features/ArticleList";
import Footer from "@/widgets/Footer";

import { bestProductList } from '@/entities/Product/data/BestProductsList';
import { stockMoscow } from "@/entities/Product/data/stockMoscow";
import { brandList } from "@/entities/Brand";
import { articleList } from "@/entities/Article";

const MainPage = () => {
    return (
        <>
            <Header />

            <main>
                <BigSlider />

                <Section>
                    <Container>
                        <Headline view={HeadlineViews.Section}>
                            Категории товаров
                        </Headline>
                        <GridCategories />
                    </Container>
                </Section>

                <Section view={SectionViews.Gray}>
                    <Container>
                        <Headline view={HeadlineViews.Section}>
                            Наши преимущества
                        </Headline>
                        <ListBenefits />
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                            Лучшие предложения
                        </Headline>
                        <ProductsSlider productList={bestProductList} />
                    </Container>
                </Section>

                <Section view={SectionViews.Gray}>
                    <Container>
                        <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                            В наличии в Москве
                        </Headline>
                        <ProductsSlider productList={stockMoscow} />
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                            Бренды
                        </Headline>
                        <BrandSlider brandList={brandList} />
                    </Container>
                </Section>

                <Section view={SectionViews.Gray}>
                    <Container>
                        <Headline view={HeadlineViews.Section}>
                            Блог
                        </Headline>
                        <ArticleList 
                            visibleCount={3} 
                            list={articleList} 
                            view={ArticleListView.Column}
                        />
                    </Container>
                </Section>
            </main>

            <Footer />
        </>
    );
}

export default MainPage;