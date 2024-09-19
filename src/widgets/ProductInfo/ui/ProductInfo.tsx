import { ProductInfoPropsType } from "../types";
import { IProduct, productList } from "@/entities/Product";
import ProductGallery from "@/features/ProductGallery";
import Button, { ButtonSize } from "@/shared/ukit/Button";
import './ProductInfo.scss';
import Counter from "@/shared/ukit/Counter";
import { CartFillIcon } from "@/shared/icons";
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';

export const ProductInfo = ({ productID }: ProductInfoPropsType) => {
    const productData = productList.find((product: IProduct) => product.id === productID);

    const formatCost = productData?.cost 
                            ? new Intl.NumberFormat("ru-RU").format(productData.cost) 
                            : '-';
    const shortDesc = productData?.description 
                        ? productData?.description.length > 130
                            ? productData?.description.slice(0, 130) + '...' 
                            : productData?.description
                        : '';
    

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Описание',
            children: (
                <div className="ProductInfo__tabContent">
                    { productData?.description }
                </div>
            ),
        },
        {
            key: '2',
            label: 'Характеристики',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        },
        {
            key: '3',
            label: 'Отзывы',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        },
        {
            key: '4',
            label: 'Доставка',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        },
        {
            key: '5',
            label: 'Оплата',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        }
    ];

    return (
        <div className="ProductInfo">
            <div className="ProductInfo__main">
                <ProductGallery className="ProductInfo__gallery" photoList={[productData?.image ?? '']} />
                <div className="ProductInfo__data">
                    <div className="ProductInfo__title">
                        { productData?.name }
                    </div>
                    <div className="ProductInfo__cost">
                        { formatCost } ₽
                    </div>
                    <div className="ProductInfo__description">
                        { shortDesc }
                    </div>
                    <Counter className="ProductInfo__counter" count={1} />
                    <div className="ProductInfo__controls">
                        <Button className="ProductInfo__btnToCart">
                            <CartFillIcon fill="#FFFFFF" style={{ marginRight: '15px' }} />
                            В корзину
                        </Button>
                    </div>
                </div>
            </div>

            <div className="ProductInfo__tabs">
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                inkBarColor: 'var(--accent-color)',
                                itemActiveColor: 'var(--accent-color)',
                                itemSelectedColor: 'var(--accent-color)',
                                itemHoverColor: 'var(--light-accent-color)',
                                titleFontSize: 16
                            },
                        },
                    }}
                >
                    <Tabs 
                        defaultActiveKey="1" 
                        items={items} 
                    />
                </ConfigProvider>
            </div>
        </div>
    );
}