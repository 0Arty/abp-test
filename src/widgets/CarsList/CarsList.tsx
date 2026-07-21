import styles from './CarsList.module.scss'
import { type Car, CarCard } from '@entities/car'

interface Props {
   list: Car[]
}

export const CarsList = ({ list }: Props) => {
   return <div className={styles.root}>{!!list && list.map((car: Car) => <CarCard data={car} key={car.id} />)}</div>
}
