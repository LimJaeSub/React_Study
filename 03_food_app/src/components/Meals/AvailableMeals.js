import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


import {useEffect,useState} from 'react';


function AvailableMeals() {
  const [meals,setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    const fetchmeals = async()=>{
      setIsLoading(true);
      const response = await fetch('https://foodapp-6cc4a-default-rtdb.firebaseio.com/meals.json'); // data 응답 받아오가
      const responseData = await response.json(); // 응답을 객체로 변환

      const loadedMeal = [];
      for(const key in responseData){
        loadedMeal.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price,
        })
      }
      // 객체로 반환된 것을 새 배열에 입력

      setMeals(loadedMeal); // 새 배열을 state를 이용해 meals로 변경
      setIsLoading(false);
    }
    
    fetchmeals();
    
  },[])

  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
        <p>Loading....</p>
      </section>
    )
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
