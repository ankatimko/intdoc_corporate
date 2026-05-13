"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConsentPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Согласие на обработку персональных данных
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Отправляя форму на сайте intdoc.ai, пользователь подтверждает своё согласие на обработку персональных данных ООО «Интеграмма» на следующих условиях.
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <Section title="Состав персональных данных">
              <p>Пользователь предоставляет следующие персональные данные:</p>
              <ul>
                <li>имя;</li>
                <li>адрес электронной почты;</li>
                <li>номер контактного телефона;</li>
                <li>иные сведения, которые пользователь сообщает добровольно в поле сообщения.</li>
              </ul>
            </Section>

            <Section title="Цели обработки">
              <p>Персональные данные обрабатываются в целях:</p>
              <ul>
                <li>рассмотрения заявок, оставленных через формы на сайте;</li>
                <li>связи с пользователем для проведения демонстрации сервиса и консультаций;</li>
                <li>направления коммерческих предложений и информации о продуктах ООО «Интеграмма» в ответ на запрос пользователя;</li>
                <li>ведения клиентской базы и учёта обращений.</li>
              </ul>
            </Section>

            <Section title="Действия с персональными данными">
              <p>Пользователь соглашается на совершение ООО «Интеграмма» следующих действий с персональными данными: сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача уполномоченным сотрудникам и подрядчикам, действующим по поручению Оператора, блокирование, удаление и уничтожение — как с использованием средств автоматизации, так и без таковых.</p>
            </Section>

            <Section title="Срок действия согласия">
              <p>Согласие действует с момента отправки формы на сайте и до момента его отзыва. Пользователь вправе отозвать согласие в любой момент, направив письменное обращение на email <a href="mailto:integramma.tech@gmail.com" className="text-primary hover:underline">integramma.tech@gmail.com</a>. После получения отзыва Оператор прекращает обработку персональных данных и уничтожает их в сроки, установленные законодательством, за исключением случаев, когда обработка должна быть продолжена в силу закона.</p>
            </Section>

            <Section title="Подтверждение">
              <p>Пользователь подтверждает, что ознакомился с <Link href="/privacy" className="text-primary hover:underline">Политикой конфиденциальности</Link> ООО «Интеграмма» и согласен с её условиями.</p>
            </Section>
          </div>
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 IntDoc AI. Все права защищены.
          </p>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Вернуться на главную
          </Link>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}
