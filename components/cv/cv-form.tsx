'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CVForm() {
  const [educationEntries, setEducationEntries] = useState([{ id: 1 }])
  const [experienceEntries, setExperienceEntries] = useState([{ id: 1 }])

  const addEducationEntry = () => {
    setEducationEntries([...educationEntries, { id: educationEntries.length + 1 }])
  }

  const addExperienceEntry = () => {
    setExperienceEntries([...experienceEntries, { id: experienceEntries.length + 1 }])
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Curriculum Vitae</CardTitle>
          <CardDescription>Fill in your personal and professional information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Professional Summary</h3>
            <Textarea placeholder="Briefly describe your professional background and career objectives" />
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Education</h3>
            {educationEntries.map((entry) => (
              <div key={entry.id} className="space-y-2 border-t pt-2">
                <div className="space-y-2">
                  <Label htmlFor={`institution-${entry.id}`}>Institution</Label>
                  <Input id={`institution-${entry.id}`} placeholder="University Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`degree-${entry.id}`}>Degree</Label>
                  <Input id={`degree-${entry.id}`} placeholder="Bachelor of Science" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${entry.id}`}>Start Date</Label>
                    <Input id={`startDate-${entry.id}`} type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${entry.id}`}>End Date</Label>
                    <Input id={`endDate-${entry.id}`} type="date" />
                  </div>
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addEducationEntry}>
              Add Education
            </Button>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Work Experience</h3>
            {experienceEntries.map((entry) => (
              <div key={entry.id} className="space-y-2 border-t pt-2">
                <div className="space-y-2">
                  <Label htmlFor={`company-${entry.id}`}>Company</Label>
                  <Input id={`company-${entry.id}`} placeholder="Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`position-${entry.id}`}>Position</Label>
                  <Input id={`position-${entry.id}`} placeholder="Job Title" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-exp-${entry.id}`}>Start Date</Label>
                    <Input id={`startDate-exp-${entry.id}`} type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-exp-${entry.id}`}>End Date</Label>
                    <Input id={`endDate-exp-${entry.id}`} type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`responsibilities-${entry.id}`}>Responsibilities</Label>
                  <Textarea id={`responsibilities-${entry.id}`} placeholder="Describe your key responsibilities and achievements" />
                </div>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addExperienceEntry}>
              Add Experience
            </Button>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Textarea id="skills" placeholder="e.g., JavaScript, React, Node.js, Project Management" />
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Input id="language" placeholder="e.g., English" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="proficiency">Proficiency</Label>
                <Select>
                  <SelectTrigger id="proficiency">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="native">Native</SelectItem>
                    <SelectItem value="fluent">Fluent</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
          <div className="flex justify-end">
          <Button type="submit">Submit CV</Button>
          </div>
    </form>
  )
}

