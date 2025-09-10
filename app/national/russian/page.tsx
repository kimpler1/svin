import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RussianCostumesPage() {
  const costumes = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H71uAgWAPAFRe8vmPOqTTlz9hL3tlc.png",
      title: "Русский народный костюм для девочки",
      description: "сарафан, блуза, кокошник",
      size: "104-122",
      price: "500 ₽ / сутки",
      available: true,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RWXA2bTuDdd4tcIOZPrTVZpJXACM23.png",
      title: "Русский народный костюм для мальчика",
      description: "рубаха, брюки, картуз, кушак",
      size: "110-122",
      price: "500 ₽ / сутки",
      available: true,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YKrHAFMMOQb07kNEBylk34UUbohs7C.png",
      title: "Русский сарафан с тесьмой",
      description: "сарафан, блуза, тесьма",
      size: "116-122",
      price: "500 ₽ / сутки",
      available: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🎭</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Arlekino</h1>
                <p className="text-sm text-muted-foreground">Аренда костюмов</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/">Главная</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contacts">Контакты</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/national">← Вернуться к национальным костюмам</Link>
              </Button>
            </div>

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Русские костюмы</h1>
              <p className="text-xl text-muted-foreground">Традиционные русские народные костюмы для детей</p>
            </div>

            {/* Costumes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {costumes.map((costume) => (
                <Link key={costume.id} href={`/costume/${costume.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    {/* Costume Image */}
                    <div className="bg-slate-100 p-6 relative">
                      <div className="aspect-square relative">
                        <Image
                          src={costume.image || "/placeholder.svg"}
                          alt={costume.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {costume.available && (
                        <Badge className="absolute top-2 right-2 bg-slate-600 text-white">Доступен</Badge>
                      )}
                    </div>

                    {/* Costume Info */}
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {costume.title}
                      </h3>

                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">В комплекте:</p>
                        <p className="text-primary font-medium">{costume.description}</p>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-muted-foreground">Рост:</span>
                        <Badge variant="secondary">{costume.size}</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-foreground">{costume.price}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-slate-700 group-hover:text-white transition-colors bg-transparent border-slate-300"
                        >
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
