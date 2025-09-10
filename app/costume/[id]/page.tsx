import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CostumePageProps {
  params: {
    id: string
  }
}

export default function CostumePage({ params }: CostumePageProps) {
  // Mock data - в реальном приложении это бы загружалось из базы данных
  const costume = {
    id: params.id,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H71uAgWAPAFRe8vmPOqTTlz9hL3tlc.png",
    title: "Русский народный костюм для девочки",
    description: "сарафан, блуза, кокошник",
    characteristics: {
      size: "104-122",
      chestCircumference: "33 см",
      sarafanLength: "77 см",
    },
    price: "500 ₽ / сутки",
    deposit: "1000 ₽",
    available: true,
  }

  return (
    <div className="min-h-screen bg-white relative">
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fbbf24' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zM20 60c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zM20 100c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm40 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3Cg fill='%23ec4899' fillOpacity='0.2'%3E%3Cpolygon points='35,15 45,35 25,35'/%3E%3Cpolygon points='75,15 85,35 65,35'/%3E%3Cpolygon points='35,55 45,75 25,75'/%3E%3Cpolygon points='75,55 85,75 65,75'/%3E%3Cpolygon points='35,95 45,115 25,115'/%3E%3Cpolygon points='75,95 85,115 65,115'/%3E%3C/g%3E%3Cg fill='%2306b6d4' fillOpacity='0.2'%3E%3Crect x='15' y='45' width='10' height='10' rx='2'/%3E%3Crect x='55' y='45' width='10' height='10' rx='2'/%3E%3Crect x='95' y='45' width='10' height='10' rx='2'/%3E%3Crect x='15' y='85' width='10' height='10' rx='2'/%3E%3Crect x='55' y='85' width='10' height='10' rx='2'/%3E%3Crect x='95' y='85' width='10' height='10' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-amber-200 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-amber-800 font-bold text-lg">🎭</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-800">Arlekino</h1>
                <p className="text-sm text-amber-700">Аренда костюмов</p>
              </div>
            </Link>
            <nav className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                asChild
              >
                <Link href="/">Главная</Link>
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                asChild
              >
                <Link href="/contacts">Контакты</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                asChild
              >
                <Link href="/national/russian">← Вернуться к русским костюмам</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Costume Image */}
              <div className="space-y-4">
                <Card className="overflow-hidden bg-white border-amber-200">
                  <div className="bg-slate-100 p-8">
                    <div className="aspect-square relative">
                      <Image
                        src={costume.image || "/placeholder.svg"}
                        alt={costume.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Costume Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-700">{costume.title}</h1>
                    {costume.available && <Badge className="bg-yellow-400 text-amber-900">Доступен</Badge>}
                  </div>
                  <p className="text-xl text-slate-600">Традиционный русский народный костюм</p>
                </div>

                <Card className="bg-white border-amber-200">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">В комплекте:</h2>
                    <p className="text-lg text-slate-600 font-medium">{costume.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-amber-200">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">Характеристики</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-amber-200">
                        <span className="text-slate-600">Рост:</span>
                        <Badge variant="secondary" className="text-base px-3 py-1 bg-yellow-100 text-amber-800">
                          {costume.characteristics.size}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-amber-200">
                        <span className="text-slate-600">Полуобхват в груди:</span>
                        <span className="font-medium text-slate-700">{costume.characteristics.chestCircumference}</span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-600">Длина сарафана:</span>
                        <span className="font-medium text-slate-700">{costume.characteristics.sarafanLength}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-slate-700">{costume.price}</div>
                        <div className="text-slate-600">Залог: {costume.deposit}</div>
                      </div>
                      <Button size="lg" className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-amber-900">
                        Забронировать
                      </Button>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <span>📋</span>
                      <Link href="/contacts" className="underline hover:text-amber-700 transition-colors">
                        Условия аренды
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                    asChild
                  >
                    <Link href="tel:+79053034505">📞 Позвонить</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                    asChild
                  >
                    <Link href="https://wa.me/79053034505">💬 WhatsApp</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
