import Image from "next/image"
import Link from "next/link"
import { Clock, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CourseProps {
  id: string
  title: string
  description: string
  duration: string
  level: string
  image: string
  price: number
  curriculum: string[]
}

export default function CourseCard({ id, title, description, duration, level, image, price, curriculum }: CourseProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-2">{description}</CardDescription>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            {level}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="text-lg font-bold">KSH {price.toLocaleString()}</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>{level}</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-bold">Course Curriculum:</h4>
                <ul className="list-inside list-disc space-y-1">
                  {curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">KSH {price.toLocaleString()}</div>
                <Link href={`/enroll/${id}`}>
                  <Button>Enroll Now</Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

