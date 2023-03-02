import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {GetStaticPropsContext} from "next";
import getConfig from "next/config";

export const {serverRuntimeConfig} = getConfig()

export interface Params extends NextParsedUrlQuery {
  id: string;
}

export interface CarType {
  id: string;
  color: string;
  image: string;
  horsepower: number;
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
  const req = await fetch(`${serverRuntimeConfig.apiUrl}/${params?.id}.json`);
  const car = await req.json();

  return {props: {car}};
};

export const getCars = async (): Promise<CarsProps> => {
  const req = await fetch(`${serverRuntimeConfig.apiUrl}/cars.json`);
  const cars = await req.json();

  return {props: {cars}};
};
