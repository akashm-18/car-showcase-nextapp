import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
    isOpen : boolean;
    closeModal : () => void;
    car : CarProps
}

const CarDetails = ({isOpen , closeModal , car} : CarDetailsProps) => {
  return (
    <div>
      car Details
    </div>
  )
}

export default CarDetails
