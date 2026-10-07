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
    answer: "Non. Le guide ne présente pas le riz comme un aliment interdit. Il t’apprend surtout à mieux gérer sa place dans l’assiette et à mieux l’associer aux autres éléments du repas.",
  },
  {
    question: "Dois-je arrêter l’igname, le manioc ou le plantain ?",
    answer: "Non. Le principe du guide est justement d’apprendre à mieux utiliser les aliments que tu connais déjà.",
  },
  {
    question: "Dois-je peser mes aliments ?",
    answer: "Non. Le guide propose des repères visuels comme la paume, le poing et la poignée pour estimer les portions.",
  },
  {
    question: "Est-ce un traitement médical ?",
    answer: "Non. C’est un guide général d’information et d’organisation alimentaire.",
  },
  {
    question: "Et si je mange au maquis ?",
    answer: "Le guide prévoit justement des situations où tu manges à l’extérieur, au travail, pendant une fête ou chez quelqu’un, avec une méthode pas-à-pas pour choisir facilement.",
  },
  {
    question: "Est-ce compliqué ?",
    answer: "Non. L’objectif est au contraire de remplacer l’improvisation par une méthode simple que tu peux répéter au quotidien.",
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
    <section id="faq" className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container width="narrow">
        <div className="text-center mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Clarté & transparence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              QUESTIONS FRÉQUENTES
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Toutes les réponses pour aborder le guide en toute sérénité.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="rounded-2xl border border-neutral-200/80 bg-cream/40 transition-all hover:border-brand/40 overflow-hidden shadow-2xs hover:shadow-xs">
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
