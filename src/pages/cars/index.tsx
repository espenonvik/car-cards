import {getCars, Params} from "@/pages/cars/shared/shared";
import {GetStaticProps} from "next";
import styles from "@/styles/Home.module.css";

export interface Props {
  cars: string[];
}

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  return await getCars();
}

const Cars = ({cars}: Props) => {
  return (
      <>
        <main className={styles.main}>
          <div className={styles.grid}>
            <h1>Server side rendering</h1>
            {cars?.map((car) => <CarCard key={`ssr-${car}`} car={car} renderType={'ssr'}></CarCard>)}

            <h1>Static site generation</h1>
            {cars?.map((car) => <CarCard key={`ssg-${car}`} car={car} renderType={'ssg'}></CarCard>)}
          </div>
        </main>
      </>
  );
};

const CarCard = ({car, renderType}: { car: string, renderType: string }) => {
  return (
      <>
        <a key={`ssr-${car}`} href={`http://localhost:3000/cars/${renderType}/${car}`} className={styles.card}>
          <h2>
            View {car} card -&gt;
          </h2>
          <p>
            {renderType === 'ssg' ? 'Server side rendering' : 'Static site generation'} of a {car}
          </p>
        </a>
      </>
  )
}

export default Cars;