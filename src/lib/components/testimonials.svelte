<script>
  const testimonials = [
    {
      name: "Anna Kowalska",
      rating: 5,
      text: "Ten kurs odmienił moje życie! Schudłam 15 kg w 4 miesiące, ale co ważniejsze, nauczyłam się, jak zdrowo się odżywiać. Energia, którą teraz mam, jest niesamowita. Polecam każdemu, kto chce trwale zmienić swoje nawyki żywieniowe!",
      image: "anna.webp"
    },
    {
      name: "Piotr Nowak",
      rating: 4,
      text: "Jako mężczyzna po czterdziestce, myślałem, że trudno będzie mi zrzucić zbędne kilogramy. Ten kurs udowodnił, że się myliłem! Proste, ale skuteczne porady dietetyczne i treningi, które mogę robić w domu, dały rewelacyjne efekty. Moja żona jest pod wrażeniem mojej nowej sylwetki!",
      image: "piotr.webp"
    },
    {
      name: "Marta Wiśniewska",
      rating: 4.5,
      text: "Próbowałam wielu diet, ale dopiero ten kurs nauczył mnie, jak jeść zdrowo bez wyrzeczeń. Uwielbiam, że przepisy są smaczne i łatwe do przygotowania. Po 2 miesiącach moje ubrania są luźniejsze, a ja czuję się pewniejsza siebie. Dziękuję! ",
      image: "marta.webp"
    },
    {
      name: "Tomasz Kowalczyk",
      rating: 5,
      text: "Jako kierowca ciężarówki, zawsze miałem problem z utrzymaniem zdrowej diety. Ten kurs pokazał mi, jak planować posiłki nawet w trasie. Schudłem 10 kg i moje wyniki badań znacznie się poprawiły. Polecam wszystkim, którzy myślą, że ich tryb życia uniemożliwia zdrowe odżywianie!",
      image: "piotr.webp"
    },
    {
      name: "Ewa Dąbrowska",
      rating: 4,
      text: "Jestem mamą trójki dzieci i myślałam, że nie mam czasu na dbanie o siebie. Ten kurs udowodnił, że to nieprawda! Szybkie przepisy i krótkie, ale intensywne treningi idealnie wpasowały się w mój napięty grafik. Schudłam 8 kg i mam więcej energii do zabawy z dziećmi. Cudowne uczucie!",
      image: "piotr.webp"
    },
    {
      name: "Marek Zieliński",
      rating: 4.5,
      text: "Jako programista, spędzam większość dnia przed komputerem. Obawiałem się, że to uniemożliwi mi schudnięcie. Dzięki temu kursowi nauczyłem się, jak zdrowo się odżywiać i ćwiczyć, nawet mając siedzący tryb pracy. Zrzuciłem 12 kg i czuję się jak nowo narodzony. Mój zespół w pracy jest pod wrażeniem mojej transformacji!",
      image: "piotr.webp"
    }
  ];

  function getRatingStars(rating) {
    return Array.from({ length: 5 }, (_, i) => 
      i < Math.floor(rating) ? 1 : (i < rating ? 0.5 : 0)
    );
  }
</script>

<div class=" w-11/12 mx-auto px-4 py-12 font-haas border-t border-gray-200 mt-12">
    <p class="text-gray-400  pt-8 md:mb-16 mb-6 text-xl" >Sukcesy naszych klientów</p>
    <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">Co mówią nasi klienci</h2>
  
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
