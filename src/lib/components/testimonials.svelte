<script>
  const testimonials = [
    {
      name: "Anna Kowalska, 42 lata",
      rating: 5,
      text: "Po latach nieudanych prób wreszcie znalazłam program, który naprawdę działa. Najbardziej cenię indywidualne podejście i to, że nie musiałam rezygnować z życia towarzyskiego. Schudłam 12 kg w pół roku, ale ważniejsze jest to, że nauczyłam się zdrowych nawyków i wreszcie czuję się dobrze we własnej skórze.",
      image: "anna.webp"
    },
    {
      name: "Magdalena Nowak, 38 lat",
      rating: 5,
      text: "Jako mama dwójki dzieci i menedżerka, zawsze brakowało mi czasu na dbanie o siebie. Ten program pokazał mi, jak wprowadzać zdrowe nawyki mimo napiętego grafiku. Konsultacje online są nieocenione - mogę porozmawiać z dietetykiem wieczorem, gdy dzieci już śpią.",
      image: "marta.webp"
    },
    {
      name: "Katarzyna Wiśniewska, 47 lat",
      rating: 5,
      text: "Program całkowicie zmienił moje podejście do odżywiania. Przestałam się stresować jedzeniem i nauczyłam się, jak komponować zdrowe posiłki bez liczenia każdej kalorii. Po menopauzie myślałam, że już nie wrócę do dawnej formy, ale z pomocą ekspertów udało się! Czuję się świetnie i pełna energii.",
      image: "marta.webp"
    }
  ];

  function getRatingStars(rating) {
    return Array.from({ length: 5 }, (_, i) => 
      i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0)
    );
  }
</script>

<div class="w-11/12 mx-auto py-12 font-haas border-t border-gray-200 mt-12">
    <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Historie sukcesu</p>
    <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">
      Poznaj nasze klientki
    </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each testimonials as { name, rating, text, image }}
      <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <div class="flex items-center mb-4">
          <img src={image} alt={name} class="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 class="font-bold">{name}</h3>
            <div class="flex">
              {#each getRatingStars(rating) as starValue}
                <svg class="w-5 h-5 {starValue > 0 ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              {/each}
            </div>
          </div>
        </div>
        <p class="text-gray-600 flex-grow">{text}</p>
      </div>
    {/each}
  </div>
</div>
