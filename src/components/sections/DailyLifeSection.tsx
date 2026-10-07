import { Container } from "@/components/ui/Container";

export function DailyLifeSection() {
  const budgetItems = [
    "Les légumes de saison",
    "Les féculents locaux disponibles",
    "Les œufs",
    "Le niébé",
    "Les haricots",
    "Le poisson selon ton budget",
    "Les fruits de saison",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="space-y-16 max-w-4xl mx-auto">
          {/* Bloc 1 : La Famille */}
          <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
                Vie de famille
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
                PAS BESOIN DE CUISINER UN REPAS DIFFÉRENT POUR TOUTE LA FAMILLE
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Tu peux partir du repas que tout le monde mange déjà.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Puis simplement :
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-neutral-100 font-bold text-neutral-900 text-sm sm:text-base">
                  moins d’huile
                </div>
                <span className="text-brand font-bold text-lg select-none">+</span>
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-neutral-100 font-bold text-neutral-900 text-sm sm:text-base">
                  plus de légumes
                </div>
                <span className="text-brand font-bold text-lg select-none">+</span>
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-neutral-100 font-bold text-neutral-900 text-sm sm:text-base">
                  un seul féculent principal
                </div>
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <p className="text-neutral-600 text-sm sm:text-base">
                Tu n’as pas besoin de préparer deux cuisines différentes.
              </p>
              <p className="font-display text-lg sm:text-xl font-bold text-brand">
                Tu apprends à adapter ton assiette.
              </p>
            </div>
          </div>

          {/* Bloc 2 : Manger dehors */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand/20 shadow-card space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
                Sorties & Maquis
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
                ET QUAND TU MANGES DEHORS ?
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Le guide ne suppose pas que tu cuisines parfaitement tous les jours.
            </p>

            <div className="p-5 rounded-2xl bg-brand-light/60 border border-brand/30 space-y-3">
              <p className="text-sm font-semibold text-neutral-800">
                Au maquis, au travail, à une fête ou chez quelqu’un :
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-brand/20 font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                commence par les légumes → choisis une protéine → prends un seul féculent → évite le resservi automatique.
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              L’objectif est de conserver une structure même lorsque ton environnement change.
            </p>
          </div>

          {/* Bloc 3 : Le Budget */}
          <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
                Économie & Réalisme
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
                ET TON BUDGET ?
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Mieux manger ne signifie pas forcément acheter des produits coûteux.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-500">
                Le guide t’encourage à utiliser :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {budgetItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/80 font-medium text-neutral-800 text-sm"
                  >
                    <span className="text-brand font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 p-4 rounded-xl bg-white border border-neutral-200 text-center sm:text-left">
              <p className="text-sm sm:text-base font-semibold text-neutral-900">
                Adapte ta semaine à ce que ton marché te permet réellement d’acheter.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
