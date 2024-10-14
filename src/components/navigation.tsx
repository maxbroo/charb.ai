"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { toast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'; // Keep only one import statement for Link

type GroceryItem = {
  name: string
  cost: number
  calories: number
  protein: number
  sugar: number
  carbs: number
  fat: number
}

const groceryList: GroceryItem[] = [
  { name: "Chicken Breast", cost: 5.99, calories: 165, protein: 31, sugar: 0, carbs: 0, fat: 3.6 },
  { name: "Brown Rice", cost: 2.99, calories: 216, protein: 5, sugar: 0.4, carbs: 45, fat: 1.6 },
  { name: "Broccoli", cost: 1.99, calories: 31, protein: 2.5, sugar: 1.5, carbs: 6, fat: 0.4 },
  { name: "Salmon", cost: 8.99, calories: 208, protein: 22, sugar: 0, carbs: 0, fat: 13 },
  { name: "Sweet Potato", cost: 0.99, calories: 86, protein: 1.6, sugar: 4.2, carbs: 20, fat: 0.1 },
  { name: "Greek Yogurt", cost: 3.49, calories: 100, protein: 18, sugar: 6, carbs: 6, fat: 0.7 },
  { name: "Spinach", cost: 2.49, calories: 23, protein: 2.9, sugar: 0.4, carbs: 3.6, fat: 0.4 },
  { name: "Eggs", cost: 2.99, calories: 78, protein: 6, sugar: 0.1, carbs: 0.6, fat: 5 },
  { name: "Oatmeal", cost: 3.29, calories: 389, protein: 13, sugar: 1.1, carbs: 66, fat: 6.9 },
  { name: "Almonds", cost: 5.99, calories: 164, protein: 6, sugar: 1.2, carbs: 6, fat: 14 },
  { name: "Banana", cost: 0.29, calories: 105, protein: 1.3, sugar: 14, carbs: 27, fat: 0.3 },
  { name: "Olive Oil", cost: 7.99, calories: 119, protein: 0, sugar: 0, carbs: 0, fat: 14 },
  { name: "Quinoa", cost: 4.99, calories: 120, protein: 4.4, sugar: 0.9, carbs: 21, fat: 1.9 },
  { name: "Avocado", cost: 1.49, calories: 320, protein: 4, sugar: 1.3, carbs: 17, fat: 29 },
  { name: "Blueberries", cost: 3.99, calories: 84, protein: 1.1, sugar: 15, carbs: 21, fat: 0.5 },
  { name: "Turkey Breast", cost: 6.99, calories: 135, protein: 30, sugar: 0, carbs: 0, fat: 1 },
  { name: "Cottage Cheese", cost: 2.79, calories: 98, protein: 11, sugar: 3.7, carbs: 3.7, fat: 4.3 },
  { name: "Asparagus", cost: 2.99, calories: 27, protein: 3, sugar: 1.3, carbs: 5, fat: 0.2 },
  { name: "Lentils", cost: 1.99, calories: 230, protein: 18, sugar: 2, carbs: 40, fat: 0.8 },
  { name: "Tomatoes", cost: 1.79, calories: 18, protein: 0.9, sugar: 2.6, carbs: 3.9, fat: 0.2 },
]

const BUDGET = 100

export function WeeklyGroceryListComponent() {
  const [isOrdering, setIsOrdering] = useState(false)

  const totalCost = groceryList.reduce((sum, item) => sum + item.cost, 0)
  const remainingBudget = BUDGET - totalCost
  const budgetPercentage = (totalCost / BUDGET) * 100

  const totalCalories = groceryList.reduce((sum, item) => sum + item.calories, 0)
  const totalProtein = groceryList.reduce((sum, item) => sum + item.protein, 0).toFixed(1)
  const totalSugar = groceryList.reduce((sum, item) => sum + item.sugar, 0).toFixed(1)
  const totalCarbs = groceryList.reduce((sum, item) => sum + item.carbs, 0).toFixed(1)
  const totalFat = groceryList.reduce((sum, item) => sum + item.fat, 0).toFixed(1)

  const handleOrder = () => {
    setIsOrdering(true)
    setTimeout(() => {
      setIsOrdering(false)
    }, 2000)
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="w-full overflow-hidden">
        <div className="bg-[#FF7F50] p-4 text-white">
          <h1 className="text-2xl font-bold">Charb AI</h1>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Weekly Grocery List</CardTitle>
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span>Budget: ${BUDGET.toFixed(2)}</span>
              <span>Remaining: ${remainingBudget.toFixed(2)}</span>
            </div>
            <Progress value={budgetPercentage} className="w-full" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-12 gap-2 font-semibold mb-2 text-sm">
            <div className="col-span-3">Item</div>
            <div className="col-span-1 text-right">Cost</div>
            <div className="col-span-2 text-right">Calories</div>
            <div className="col-span-1 text-right">Protein</div>
            <div className="col-span-1 text-right">Sugar</div>
            <div className="col-span-2 text-right">Carbs</div>
            <div className="col-span-2 text-right">Fat</div>
          </div>
          <ScrollArea className="h-[400px] pr-4">
            {groceryList.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 py-2 border-t text-sm">
                <div className="col-span-3">{item.name}</div>
                <div className="col-span-1 text-right">${item.cost.toFixed(2)}</div>
                <div className="col-span-2 text-right">{item.calories}</div>
                <div className="col-span-1 text-right">{item.protein}g</div>
                <div className="col-span-1 text-right">{item.sugar}g</div>
                <div className="col-span-2 text-right">{item.carbs}g</div>
                <div className="col-span-2 text-right">{item.fat}g</div>
              </div>
            ))}
          </ScrollArea>
          <div className="grid grid-cols-12 gap-2 py-2 border-t font-semibold mt-2">
            <div className="col-span-3">Total</div>
            <div className="col-span-1 text-right">${totalCost.toFixed(2)}</div>
            <div className="col-span-2 text-right">{totalCalories}</div>
            <div className="col-span-1 text-right">{totalProtein}g</div>
            <div className="col-span-1 text-right">{totalSugar}g</div>
            <div className="col-span-2 text-right">{totalCarbs}g</div>
            <div className="col-span-2 text-right">{totalFat}g</div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleOrder}
              disabled={isOrdering}
              className="bg-[#FF7F50] hover:bg-[#FF6347] text-white font-bold py-2 px-4 rounded"
            >
              {isOrdering ? "Placing Order..." : "Order Now"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Navigation() {
  return (
    <nav className="bg-[#FE9900] text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/macros">Macros</Link>
        </li>
        <li>
          <Link href="./weekly-grocery-lists">Weekly Grocery List</Link>
        </li>
        <li>
          <Link href="./settings">Settings</Link>
        </li>
        <li>
          <Link href="./cuisine-explorer">Cuisine Explorer</Link>
        </li>
      </ul>
    </nav>
  );
}