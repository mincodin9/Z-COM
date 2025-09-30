import SearchFrom from "../_component/SearchForm";
import TrendSection from "./_component/TrendSection";
import style from './explore.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchFrom />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}
