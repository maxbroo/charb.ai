'use client'

import { useState } from 'react'
import { Bell, DollarSign, CreditCard, User, Lock, HelpCircle, LogOut } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function SettingsPageComponent() {
  const [budget, setBudget] = useState(100)
  const [notifications, setNotifications] = useState(true)
  const [subscription, setSubscription] = useState('monthly')

  return (
    <div className="min-h-screen bg-[#FE9900]/10">
      <header className="bg-[#FE9900] text-white p-4">
        <h1 className="text-2xl font-bold">Charb AI</h1>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-[#FE9900]">Settings</h2>
        
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#FE9900]">
              <Bell className="mr-2" /> Notifications
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable notifications</Label>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </div>

          {/* Budget Adjuster */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#FE9900]">
              <DollarSign className="mr-2" /> Budget Adjuster
            </h3>
            <Slider
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              max={1000}
              step={10}
            />
            <p className="mt-2">Current budget: ${budget}</p>
          </div>

          {/* Subscription */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#FE9900]">
              <CreditCard className="mr-2" /> Subscription
            </h3>
            <RadioGroup value={subscription} onValueChange={setSubscription}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly ($5/month)</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="yearly" id="yearly" />
                <Label htmlFor="yearly">Yearly ($50/year)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium">Premium ($7.50/month)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Other Settings */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-[#FE9900]">Other Settings</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-start text-[#FE9900]">
                  <User className="mr-2" /> Account
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-[#FE9900]">
                  <Lock className="mr-2" /> Privacy
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-[#FE9900]">
                  <HelpCircle className="mr-2" /> Help & Support
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-[#FE9900]">
                  <LogOut className="mr-2" /> Log Out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}