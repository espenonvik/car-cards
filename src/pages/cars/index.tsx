import {getCars, inter, Params} from "@/pages/cars/shared/shared";
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
          <div className={styles.center}>

            <div className={styles.grid}>
              {cars?.map((car) => <CarCard key={`ssr-${car}`} car={car} renderType={'ssr'}></CarCard>)}
              {cars?.map((car) => <CarCard key={`ssg-${car}`} car={car} renderType={'ssg'}></CarCard>)}
            </div>
          </div>
        </main>
      </>
  );
};

const CarCard = ({car, renderType}: { car: string, renderType: string }) => {
  return (
      <>
        <a key={`ssr-${car}`} href={`http://localhost:3000/cars/${renderType}/${car}`} className={styles.card}>
          <h2 className={inter.className}>
            Goto {car} -&gt;
          </h2>
          <p className={inter.className}>
            {renderType === 'ssg' ? 'Server side rendering' : 'Static site generation'} of a {car}
          </p>
        </a>
      </>
  )
}

export default Cars;