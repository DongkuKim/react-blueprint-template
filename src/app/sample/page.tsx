import { Button } from '@/components/sample/ui/Button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/sample/ui/Card';
import Link from 'next/link';

export default function SamplePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50 border-b">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                Next.js Antigravity Template
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                A production-ready template for building high-performance Next.js
                                applications with best practices built-in.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Button size="lg" asChild>
                                <Link href="/sample#features">Get Started</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="https://github.com/DongkuKim/nextjs-antigravity-template">
                                    GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Vercel Best Practices</CardTitle>
                                <CardDescription>Performance First</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Optimized for Core Web Vitals with built-in performance
                                    guidelines for React and Next.js.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Composition Patterns</CardTitle>
                                <CardDescription>Scalable Architecture</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Leverage compound components and modern composition patterns to
                                    build flexible UIs.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Modern Design</CardTitle>
                                <CardDescription>Premium Aesthetics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Beautiful, responsive layouts using Tailwind CSS and refined
                                    design guidelines.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Component Showcase using Composition */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter">Component Showcase</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Demonstrating the power of composition over boolean props.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                        <Card className="flex flex-col justify-between h-full">
                            <CardHeader>
                                <CardTitle>Button Variants</CardTitle>
                                <CardDescription>Flexible styling with cva</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="default">Default</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs text-muted-foreground">Each variant is defined in the theme configuration.</p>
                            </CardFooter>
                        </Card>
                        <Card className="flex flex-col justify-between h-full">
                            <CardHeader>
                                <CardTitle>Card Composition</CardTitle>
                                <CardDescription>Compound Components</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    This card is built using individual parts: Header, Title, Description, Content, and Footer.
                                    This allows for arbitrary ordering and maximum flexibility without prop drilling.
                                </p>
                            </CardContent>
                            <CardFooter className="justify-end">
                                <Button size="sm">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
