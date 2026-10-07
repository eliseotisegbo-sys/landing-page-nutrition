"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackFaqOpen } from "@/lib/analytics";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Dois-je arrêter de manger du riz ?",
    answer: "Non. Le guide ne présente pas le riz comme un aliment interdit. Il t’apprend surtout à gérer la portion, les associations et la composition globale du repas.",
  },
  {
    question: "Dois-je abandonner l’igname, le manioc ou le plantain ?",
    answer: "Non. Le principe du guide est justement d’apprendre à mieux utiliser les aliments locaux que tu connais déjà.",
  },
  {
    question: "Dois-je peser mes aliments ?",
    answer: "Non. Le guide utilise des repères simples comme la paume, le poing et la poignée pour estimer les portions.",
  },
  {
    question: "Est-ce un traitement contre le diabète ou l’hypertension ?",
    answer: "Non. Le guide ne remplace ni un médecin ni un diététicien et ne traite aucune maladie.",
  },
  {
    question: "Est-ce que je dois préparer un repas différent pour ma famille ?",
    answer: "Non. Le guide montre comment adapter le repas familial plutôt que de préparer systématiquement un plat séparé.",
  },
  {
    question: "Et si je mange souvent dehors ?",
    answer: "Le guide contient des repères pour les repas au travail, au maquis, pendant les fêtes et dans les situations où tu ne contrôles pas le menu.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const next = openIndex === index ? null : index;
    setOpenIndex(next);
    if (next !== null) {
      trackFaqOpen(faqs[next].question);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container width="narrow">
        <div className="text-center mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Questions fréquentes
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              FOIRE AUX QUESTIONS
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Toutes les réponses pour aborder le guide en toute clarté.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div
                  className="rounded-2xl border border-neutral-200/80 bg-cream/40 transition-all hover:border-brand/30 overflow-hidden shadow-2xs hover:shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-display font-semibold text-base sm:text-lg text-neutral-900 hover:text-brand transition-colors cursor-pointer select-none"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white border border-neutral-200 text-sm font-bold shadow-2xs ${
                        isOpen ? "text-brand" : "text-neutral-500"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-neutral-700 leading-relaxed border-t border-neutral-200/50 mt-1">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
