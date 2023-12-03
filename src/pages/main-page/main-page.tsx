import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import PromoCard from '../../components/main/promo-card/promo-card';
import { MainPageProps } from './mainPageProps';
import Genres from '../../components/common/genres/genres';


export default function MainPage(
  props: MainPageProps
): JSX.Element {
  return (
    <>
      <PromoCard {...props} />
      <div className="page-content">
        <Catalog {...props}>
          <Genres />
        </Catalog>
        <Footer />
      </div>
    </>
  );
}
