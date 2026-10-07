import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800 text-xs">
      <Container width="narrow">
        <div className="space-y-6 text-center">
          {/* Note de sécurité obligatoire */}
          <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-neutral-300 space-y-2 leading-relaxed max-w-2xl mx-auto">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              ⚠️ NOTE DE SÉCURITÉ
            </p>
            <p>
              Ce guide est un outil général d’information et d’organisation alimentaire. Il ne remplace pas un avis médical ou diététique personnalisé.
            </p>
            <p className="text-[11px] text-neutral-400">
              Les personnes ayant une maladie, prenant un traitement, étant enceintes ou allaitantes, ou ayant des besoins alimentaires particuliers doivent demander un avis professionnel adapté.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>© 2026 Guide Africain de Nutrition. Tous droits réservés.</p>
            <p>Paiement sécurisé & commande via Chariow • Format numérique</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
