import React from 'react'
import MealsSummary from './MealsSummary.js';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
function Meals() {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals