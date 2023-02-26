import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {GetStaticPropsContext} from "next";
import {Inter} from "next/font/google";

export const inter = Inter({subsets: ['latin']})
export interface Params extends NextParsedUrlQuery {
  id: string;
}

export interface CarType {
  id: string;
  color: string;
  image: string;
}

export interface Props {
  car: CarType;
}

export interface CarProps {
  props: {
    car: CarType;
  };
}

export interface CarsProps {
  props: {
    cars: string[];
  };
}

export const getCar = async (context: GetStaticPropsContext<Params>): Promise<CarProps> => {
  const params = context.params;
  const req = await fetch(`http://localhost:3000/${params?.id}.json`);
  const car = await req.json();

  return {props: {car}};
};

export const getCars = async (): Promise<CarsProps> => {
  const req = await fetch('http://localhost:3000/cars.json');
  const cars = await req.json();

  return {props: {cars}};
};
