import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "/мес",
  features,
  cta = "Подписаться",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
          >
            {cta}
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {priceLabel}
        </span>
        {priceLabel.toLowerCase() !== "бесплатно" && priceLabel !== "0 ₽" && (
          <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            КОМПЛЕКСНЫЙ РЕМОНТ
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Популярный
          </Badge>
          <div className="ml-auto">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs">
              Вызвать мастера
            </Button>
          </div>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              от 3 500 ₽
            </span>
            <span className="text-gray-300 text-xs font-open-sans-custom"> / выезд</span>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Диагностика и устранение нескольких неисправностей",
              "Замена труб, кранов, смесителей",
              "Установка сантехники под ключ",
              "Гарантия на все виды работ — 1 год",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCard
        titleBadge="ВЫЗОВ МАСТЕРА"
        priceLabel="от 500 ₽"
        priceSuffix=" / выезд"
        features={[
          "Диагностика неисправности",
          "Мелкий ремонт кранов и смесителей",
          "Устранение несложных засоров",
          "Выезд в течение 1–2 часов",
        ]}
        className="lg:col-span-3"
        cta="Заказать"
      />

      <PricingCard
        titleBadge="ПРОЧИСТКА ТРУБ"
        priceLabel="от 1 500 ₽"
        priceSuffix=" / точка"
        features={[
          "Механическая и гидродинамическая прочистка",
          "Канализация, раковины, унитазы",
          "Видеодиагностика при необходимости",
        ]}
        className="lg:col-span-4"
        cta="Заказать"
      />

      <PricingCard
        titleBadge="СРОЧНЫЙ ВЫЕЗД"
        priceLabel="от 2 000 ₽"
        priceSuffix=" / ночь"
        features={[
          "Приезд в течение 30–60 минут",
          "Работаем ночью и в праздники",
          "Устранение аварийных ситуаций",
        ]}
        className="lg:col-span-4"
        cta="Вызвать"
      />

      <PricingCard
        titleBadge="МОНТАЖ ПОД КЛЮЧ"
        priceLabel="По смете"
        priceSuffix=""
        features={[
          "Полная разводка водоснабжения и канализации",
          "Установка ванн, душевых, унитазов",
          "Монтаж водонагревателей и счётчиков",
          "Гарантия и акт выполненных работ",
        ]}
        className="lg:col-span-8"
        cta="Получить смету"
      />
    </div>
  )
}