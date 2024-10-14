'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, PieChart } from 'lucide-react'

type MacroData = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export function MacrosPageComponent() {
  const [macros, setMacros] = useState<MacroData>({
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 65
  })

  const handleMacroChange = (macro: keyof MacroData, value: string) => {
    setMacros(prev => ({ ...prev, [macro]: parseInt(value) || 0 }))
  }

  const calculatePercentages = () => {
    const total = macros.protein * 4 + macros.carbs * 4 + macros.fat * 9
    return {
      protein: ((macros.protein * 4) / total) * 100,
      carbs: ((macros.carbs * 4) / total) * 100,
      fat: ((macros.fat * 9) / total) * 100
    }
  }

  const percentages = calculatePercentages()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <ChefHat className="w-8 h-8 text-[#FE9900] mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Charb AI Macros Tracker</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Daily Macro Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="calories">Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  value={macros.calories}
                  onChange={(e) => handleMacroChange('calories', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="protein">Protein (g)</Label>
                <Input
                  id="protein"
                  type="number"
                  value={macros.protein}
                  onChange={(e) => handleMacroChange('protein', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="carbs">Carbs (g)</Label>
                <Input
                  id="carbs"
                  type="number"
                  value={macros.carbs}
                  onChange={(e) => handleMacroChange('carbs', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fat">Fat (g)</Label>
                <Input
                  id="fat"
                  type="number"
                  value={macros.fat}
                  onChange={(e) => handleMacroChange('fat', e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Macro Distribution</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentages.protein}%` }}></div>
                </div>
                <span className="text-sm font-medium">Protein: {percentages.protein.toFixed(1)}%</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${percentages.carbs}%` }}></div>
                </div>
                <span className="text-sm font-medium">Carbs: {percentages.carbs.toFixed(1)}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: `${percentages.fat}%` }}></div>
                </div>
                <span className="text-sm font-medium">Fat: {percentages.fat.toFixed(1)}%</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-[#FE9900] hover:bg-[#E08800] text-white">
              <PieChart className="w-4 h-4 mr-2" />
              Update Macros
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}