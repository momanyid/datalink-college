import Link from "next/link"
import { Clock, Mail, MapPin, Phone, FacebookIcon, InstagramIcon, MessageCircle } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CourseCard from "../components/course-card"
import { courses } from "./data"

export default function CollegePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary/5">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Datalink College Kenya
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Ploughing minds for service. Discover your potential with our diverse range of computer courses.
            </p>
            {/* <Button size="lg" className="mt-6">
              Explore Courses
            </Button> */}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Our Courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary/5 py-16">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-muted-foreground">
              Datalink College Kenya was founded in 2012, initially operating as a small cyber cafe in Kijauri Town.
              Today, we have expanded with branches across the country, committed to providing quality education in
              computer skills.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Mission</h3>
                <p className="text-muted-foreground">
                  To provide high quality learning environment to a diverse community.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Vision</h3>
                <p className="text-muted-foreground">
                  To build a place where people can come to find and discover new and competitive computer skills.
                </p>
              </div>
            </div>
            <div className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              <h1>Opening hours</h1>
            </div>
            <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
              <Card className="p-4">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon - Fri: 7am - 10pm</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Saturday: 8am - 10pm</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sunday: 8am - 11pm</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>40502-100, NYANSIONGO</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:datalinkcollege@gmail.com" className="hover:underline">
                  datalinkcollege@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <Link href="tel:254705073157" className="block hover:underline">
                    +254 705 073 157
                  </Link>
                  <Link href="tel:254729082540" className="block hover:underline">
                    +254 729 082 540
                  </Link>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <p className="text-muted-foreground">Find us on social media for updates and more information:</p>
              <div className="space-y-2">
                <Link href="https://www.facebook.com/datalinkcollegekenya/" target="blank" className="block hover:underline">
                  <FaFacebook />
                </Link>
                <Link href="https://www.instagram.com/datalinkcollegekenya/" target="blank" className="block hover:underline">
                  <FaInstagram />
                </Link>
                <Link href="https://wa.me/+254701725030/" target="blank" className="block hover:underline">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

