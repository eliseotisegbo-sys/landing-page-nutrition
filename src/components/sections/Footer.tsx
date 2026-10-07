import { Container } from "@/components/ui/Container";
import { PRODUCT_NAME } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 sm:py-16 text-xs sm:text-sm">
      <Container>
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Note de sécurité obligatoire */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-2">
            <p className="font-bold uppercase tracking-wider text-neutral-300 text-xs">
              ⚠️ NOTE DE SÉCURITÉ
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Ce guide est un outil général d’information et d’organisation alimentaire. Il ne remplace pas un avis médical ou diététique personnalisé. Les personnes ayant une maladie, prenant un traitement, étant enceintes ou allaitantes, ou ayant des besoins alimentaires particuliers doivent demander un avis professionnel adapté.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-xs text-neutral-500">
            <p>© 2026 {PRODUCT_NAME}. Tous droits réservés.</p>
            <p>Paiement sécurisé et traitement des commandes via Chariow.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
