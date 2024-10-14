'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Search, ArrowRight } from 'lucide-react'

const cuisines = [
  "Italian", "Japanese", "Mexican", "Indian", "French", "Thai", "Greek", "Spanish",
  "Chinese", "Mediterranean", "American", "Vietnamese", "Korean", "Middle Eastern"
]

export function CharbAiCuisineExplorer() {
  const [selectedCuisine, setSelectedCuisine] = useState('')

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: "You are Charb AI, a culinary expert assistant that recommends cuisines and fun recipes. When a user selects a cuisine, provide a brief overview and suggest 3 popular dishes from that cuisine. When a user asks about a specific dish or ingredient, provide interesting facts and recipe ideas."
      },
      {
        id: '2',
        role: 'assistant',
        content: "Welcome to Charb AI Cuisine Explorer! I'm here to help you discover exciting cuisines and delicious recipes. Select a cuisine to explore, or ask me about any dish or ingredient you're curious about!"
      }
    ]
  })

  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine)
    // Assuming handleSubmit can take an additional parameter for message
    handleSubmit(
      { preventDefault: () => {} }, 
      //{ message: `Tell me about ${cuisine} cuisine and suggest 3 popular dishes.` }
    )
  }

  // Example usage: Display the selected cuisine
  return (
    <div>
      <h1>Selected Cuisine: {selectedCuisine}</h1>
      <div className="flex h-screen bg-gray-50">
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-[#FE9900]" />
              <h1 className="text-2xl font-bold text-gray-800">Charb AI Cuisine Explorer</h1>
            </div>
            <span className="text-sm text-gray-500">Discover Delicious Cuisines & Recipes</span>
          </header>
          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col">
              <Tabs defaultValue="chat" className="flex-1 flex flex-col">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="chat">Chat & Explore</TabsTrigger>
                  <TabsTrigger value="cuisines">Cuisine Directory</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="flex-1 flex flex-col">
                  <ScrollArea className="flex-1 p-4">
                    {messages.map(m => (
                      <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
                        <Card className={`${m.role === 'user' ? 'bg-[#FE9900] text-white' : 'bg-white'} shadow-md`}>
                          <CardContent className="p-3">
                            <p className="text-sm">{m.content}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </ScrollArea>
                  <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
                    <div className="flex space-x-2">
                      <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask about a cuisine, dish, or ingredient..."
                        className="flex-1 border-gray-300 focus:ring-[#FE9900] focus:border-[#FE9900]"
                      />
                      <Button type="submit" className="bg-[#FE9900] hover:bg-[#E08800] text-white">
                        <Search className="w-4 h-4 mr-2" />
                        Explore
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="cuisines" className="flex-1">
                  <ScrollArea className="h-full p-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {cuisines.map((cuisine) => (
                        <Card key={cuisine} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardHeader className="p-4">
                            <CardTitle className="text-lg">{cuisine}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Button 
                              onClick={() => handleCuisineSelect(cuisine)}
                              variant="ghost" 
                              className="w-full text-[#FE9900] hover:text-[#E08800] hover:bg-orange-50"
                            >
                              Explore <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
