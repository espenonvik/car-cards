import {CarType} from "@/pages/cars/shared/shared";
import styles from "@/styles/Home.module.css";

interface Props {
  car: CarType;
}

const Car = ({car}: Props) => {
  return (
      <>
        <main className={styles.main}>
          <div className={styles.grid}>
            <h1>Selected car is {car.id}</h1>
            <h2>Color: {car?.color}</h2>
            <h3>Horse power: {car?.horsepower}</h3>
            <img height={'350px'} src={car?.image} alt={`Image of a ${car.id} car`}/>
          </div>
        </main>
      </>
  );
}

export default Car;