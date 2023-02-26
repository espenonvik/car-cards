import {CarType, inter} from "@/pages/cars/shared/shared";
import styles from "@/styles/Home.module.css";

interface Props {
  car: CarType;
}

const Car = ({car}: Props) => {
  return (
      <>
        <main className={styles.main}>
          <div className={styles.center}>
            <h1 className={inter.className}>Selected car is {car.id}</h1>
            <img height={'500px'} src={car?.image} alt={`Image of a ${car.id} car`}/>
            <h2 className={inter.className}>Color is {car?.color}</h2>
          </div>
        </main>
      </>
  );
}

export default Car;