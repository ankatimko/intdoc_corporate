"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Mail, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  })
  const [isAgreed, setIsAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAgreed) return
    
    setIsSubmitting(true)
    setError("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Ошибка отправки")
      }
      
      setIsSubmitted(true)
      setFormData({ email: "", phone: "", message: "" })
      setIsAgreed(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки. Попробуйте позже.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Связаться с нами
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Обсудите ваш проект
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Расскажите о вашей задаче, и мы подберем оптимальное решение для автоматизации работы с документами
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Заявка отправлена!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Отправить еще одну заявку
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      Электронная почта <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Телефон <span className="text-muted-foreground text-xs">(опционально)</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Опишите вашу задачу <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, какие документы вы обрабатываете, какие данные нужно извлекать, и какие результаты вы хотите получить..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      Чем подробнее вы опишете задачу, тем точнее мы сможем оценить проект
                    </p>
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={isAgreed}
                      onCheckedChange={(checked) => setIsAgreed(checked === true)}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Я согласен на{" "}
                      <Link href="/consent" className="text-primary hover:underline">
                        обработку персональных данных
                      </Link>{" "}
                      и ознакомлен с{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Политикой конфиденциальности
                      </Link>
                      . <span className="text-destructive">*</span>
                    </label>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold"
                    disabled={isSubmitting || !isAgreed}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-2">
            Или напишите нам напрямую:
          </p>
          <a 
            href="mailto:integramma.tech@gmail.com" 
            className="text-primary hover:underline font-medium"
          >
            integramma.tech@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
