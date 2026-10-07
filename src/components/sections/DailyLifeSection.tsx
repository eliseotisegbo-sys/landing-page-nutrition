import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function DailyLifeSection() {
  return (
    <section id="quotidien" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              La réalité de ton quotidien
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              PENSÉ POUR LES SITUATIONS DU QUOTIDIEN
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Trois réponses concrètes aux vraies contraintes de nos journées.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Carte 1 : Manger dehors */}
          <FadeIn delay={0.1}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-brand/10 text-brand">
                  MAQUIS & TRAVAIL
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 leading-snug">
                  TU MANGES DEHORS ?
                </h3>

                <p className="text-xs text-neutral-500 font-medium">
                  Tu ne cuisines pas tous les jours. Au travail, au maquis, à une fête, tu ne contrôles pas le menu.
                </p>

                <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs sm:text-sm text-neutral-700">
                  <p className="font-bold text-neutral-900">Applique la structure simple :</p>
                  <p>1. Choisis d’abord les légumes.</p>
                  <p>2. Ajoute une source de protéines.</p>
                  <p>3. Choisis un seul féculent principal.</p>
                  <p>4. Évite le resservi automatique.</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100">
                <p className="text-xs font-semibold text-brand">
                  Le but est de savoir quoi faire même quand les conditions changent.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Carte 2 : Budget */}
          <FadeIn delay={0.2}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded-text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-800">
                  MARCHÉ RÉEL
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 leading-snug">
                  ET SI TON BUDGET EST SERRÉ ?
                </h3>

                <p className="text-xs text-neutral-500 font-medium">
                  Mieux manger ne signifie pas acheter des produits coûteux.
                </p>

                <div className="pt-3 border-t border-neutral-100 space-y-1.5 text-xs sm:text-sm text-neutral-700">
                  <p className="font-bold text-neutral-900">Le guide privilégie :</p>
                  <p>• Les légumes de saison</p>
                  <p>• Les féculents locaux abordables</p>
                  <p>• Les œufs et le niébé (protéines économiques)</p>
                  <p>• Les haricots et le poisson selon budget</p>
                  <p>• Les fruits du marché du jour</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100">
                <p className="text-xs font-semibold text-brand">
                  Tu adaptes ton alimentation à ton marché et à ta réalité.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Carte 3 : Famille */}
          <FadeIn delay={0.3}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-brand/10 text-brand">
                  PAS DE DOUBLE CUISINE
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 leading-snug">
                  REPAS FAMILIAL ADAPTÉ
                </h3>

                <p className="text-xs text-neutral-500 font-medium">
                  Tu n’as pas besoin de cuisiner deux repas différents pour toi et ta famille.
                </p>

                <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs sm:text-sm text-neutral-700">
                  <p className="font-bold text-neutral-900">Les 3 ajustements essentiels :</p>
                  <p>• <strong>Moins d’huile :</strong> mesurée à la cuillère</p>
                  <p>• <strong>Plus de légumes :</strong> ajoutés au plat commun</p>
                  <p>• <strong>Un seul féculent :</strong> dans ton assiette</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100">
                <p className="text-xs font-semibold text-brand">
                  Tu apprends simplement à mieux composer ta propre assiette.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
