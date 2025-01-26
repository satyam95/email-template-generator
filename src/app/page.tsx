import Footer from "@/components/Footer";
import GoogleSigninBtn from "@/components/GoogleSigninBtn";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronRight, Layers, Layout, Wand2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl mx-auto">
                  Create Beautiful Email Templates in Minutes
                </h1>
                <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl">
                  Design stunning email templates with our intuitive
                  drag-and-drop builder. No coding required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Start Building
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <GoogleSigninBtn />
              </div>
              <Image
                src="/landing.png"
                width={1000}
                height={800}
                alt="Email Builder Interface"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Create Perfect Emails
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Powerful features that make email template creation a breeze
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Wand2 className="h-10 w-10 mb-4" />
                  <CardTitle>Drag & Drop Builder</CardTitle>
                  <CardDescription>
                    Intuitive interface for creating emails without any coding
                    knowledge
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Layout className="h-10 w-10 mb-4" />
                  <CardTitle>Responsive Design</CardTitle>
                  <CardDescription>
                    Templates that look perfect on all devices and email clients
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Layers className="h-10 w-10 mb-4" />
                  <CardTitle>Template Library</CardTitle>
                  <CardDescription>
                    Start with our pre-built templates and customize them to
                    your needs
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="templates">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Start with Beautiful Templates
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Choose from our collection of professionally designed
                  templates
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=300`}
                      width={300}
                      height={400}
                      alt={`Template ${i}`}
                      className="object-cover w-full"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Template {i}</CardTitle>
                    <CardDescription>
                      Professional email template for your needs
                    </CardDescription>
                    <Button className="mt-4">Use Template</Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Create stunning email templates in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Choose a Template",
                  description:
                    "Select from our library of professional templates",
                },
                {
                  step: "2",
                  title: "Customize Design",
                  description:
                    "Modify colors, images, and content to match your brand",
                },
                {
                  step: "3",
                  title: "Export & Send",
                  description:
                    "Download your template or send directly through our platform",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Choose the perfect plan for your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "$0",
                  description: "Perfect for trying out our features",
                  features: ["5 Templates", "Basic Editor", "Email Support"],
                },
                {
                  title: "Pro",
                  price: "$29",
                  description: "Best for professionals",
                  features: [
                    "Unlimited Templates",
                    "Advanced Editor",
                    "Priority Support",
                    "Custom Branding",
                  ],
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  description: "For large organizations",
                  features: [
                    "Custom Templates",
                    "API Access",
                    "Dedicated Support",
                    "Team Collaboration",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.title} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <p className="text-4xl font-bold">{plan.price}</p>
                    {plan.price !== "Custom" && (
                      <p className="text-sm text-gray-500">/month</p>
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-auto">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Create Amazing Emails?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Join thousands of users who create beautiful email templates
                  with EmailCraft
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Get Started for Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
