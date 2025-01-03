<script>
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';

  const book = {
    title: "Stop Jojo: Podstawy zdrowego odżywiania",
    author: "Anna Kowalska",
    price: "49.99 zł",
    originalPrice: "69.99 zł",
    image: "/ph0.png",
    rating: 4.5,
    reviews: 128,
    description: "Odkryj skuteczne metody walki z efektem jo-jo i naucz się, jak utrzymać zdrową wagę na stałe. Książka zawiera kompleksowy program żywieniowy, przepisy i praktyczne wskazówki, które pomogą Ci osiągnąć i utrzymać wymarzoną sylwetkę.",
    details: {
      publisher: "StopJojo Publishing",
      language: "Polski",
      paperback: "324 strony",
      isbn: "978-3-16-148410-0",
      dimensions: "15.6 x 2.5 x 23.4 cm",
      publishDate: "15 stycznia 2024"
    }
  };

  function renderStars(rating) {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  }

  let quantity = 1;
</script>

<Navbar />

<div class="w-11/12 mx-auto py-12">
  <!-- Breadcrumbs -->
  <div class="text-sm text-gray-500 mb-8">
    <a href="/ksiegarnia" class="hover:text-black">Księgarnia</a>
    <span class="mx-2">›</span>
    <span>{book.title}</span>
  </div>

  <!-- Main Content -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <!-- Image Column -->
    <div class="aspect-[3/4]">
      <img 
        src={book.image} 
        alt={book.title}
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Info Column -->
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">{book.title}</h1>
      <p class="text-lg">
        autor: <a href="#" class="text-gray-600 hover:underline">{book.author}</a>
      </p>

      <!-- Rating -->
      <div class="flex items-center space-x-2">
        <div class="text-yellow-400 text-xl">{renderStars(book.rating)}</div>
        <span class="text-gray-600">({book.reviews} recenzji)</span>
      </div>

      <!-- Description -->
      <div class="border-t border-b border-gray-200 py-4 my-6">
        <p class="text-gray-700 leading-relaxed">
          {book.description}
        </p>
      </div>

      <!-- Book Details -->
      <div class="space-y-2">
        <h2 class="font-bold text-lg">Szczegóły produktu:</h2>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <p>Wydawnictwo:</p>
          <p>{book.details.publisher}</p>
          <p>Język:</p>
          <p>{book.details.language}</p>
          <p>Liczba stron:</p>
          <p>{book.details.paperback}</p>
          <p>ISBN:</p>
          <p>{book.details.isbn}</p>
          <p>Wymiary:</p>
          <p>{book.details.dimensions}</p>
          <p>Data wydania:</p>
          <p>{book.details.publishDate}</p>
        </div>
      </div>
    </div>

    <!-- Buy Column -->
    <div class="lg:pl-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
        <div class="space-y-4">
          <div class="flex items-baseline space-x-2">
            <span class="text-3xl font-bold">{book.price}</span>
            <span class="text-gray-500 line-through text-sm">{book.originalPrice}</span>
          </div>

          <p class="text-sm text-gray-600">
            Darmowa dostawa przy zamówieniach powyżej 99 zł
          </p>

          <button class="w-full bg-[#ffa420] hover:bg-[#ff9100] text-white py-3 rounded-md transition-colors">
            Dodaj do koszyka
          </button>

          <button class="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md transition-colors">
            Kup teraz
          </button>

          <!-- Secure Transaction -->
          <div class="text-sm text-gray-600 flex items-center space-x-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Bezpieczna transakcja</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Author Info -->
  <div class="mt-24 border-t pt-12">
    <h2 class="text-3xl font-bold mb-8">O autorze</h2>
    <div class="flex flex-col md:flex-row gap-8">
      <img src="/ph0.png" alt="Anna Kowalska" class="w-48 h-48 object-cover rounded-full">
      <div class="space-y-4">
        <h3 class="text-xl font-bold">{book.author}</h3>
        <p class="text-gray-700 leading-relaxed max-w-3xl">
          Certyfikowana dietetyczka i psycholog żywienia z 15-letnim doświadczeniem. Specjalizuje się w leczeniu zaburzeń odżywiania i prowadzeniu pacjentów w procesie długotrwałej zmiany nawyków żywieniowych. Autorka bestsellerowych książek o zdrowym odżywianiu i regularnie występuje jako ekspert w mediach.
        </p>
      </div>
    </div>
  </div>

  <!-- Editorial Reviews -->
  <div class="mt-24 border-t pt-12">
    <h2 class="text-3xl font-bold mb-8">Recenzje redakcyjne</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <blockquote class="space-y-4">
        <p class="text-gray-700 italic">"Przełomowe podejście do tematu zdrowego odżywiania. Autorka w przystępny sposób przedstawia kompleksowe rozwiązania, które rzeczywiście działają."</p>
        <footer class="text-sm">
          <p class="font-bold">Magazyn Zdrowie</p>
          <p class="text-gray-600">Maria Nowak, Redaktor Naczelna</p>
        </footer>
      </blockquote>
      <blockquote class="space-y-4">
        <p class="text-gray-700 italic">"Ta książka to nie kolejny poradnik dietetyczny - to kompletny przewodnik po zdrowym stylu życia, który zmienia podejście do odżywiania."</p>
        <footer class="text-sm">
          <p class="font-bold">Portal Dietetyczny</p>
          <p class="text-gray-600">Dr Jan Kowalski, Ekspert ds. żywienia</p>
        </footer>
      </blockquote>
    </div>
  </div>

  <!-- You May Also Like -->
  <div class="mt-24 border-t pt-12">
    <h2 class="text-3xl font-bold mb-8">Podobne książki</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each Array(4) as _, i}
        <a href="/ksiazka" class="group">
          <div class="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <img src="/ph0.png" alt="Book cover" class="w-full aspect-[3/4] object-cover rounded-t-lg">
            <div class="p-4">
              <h3 class="font-bold text-lg mb-1 truncate group-hover:text-gray-600 transition-colors">Podobna książka {i + 1}</h3>
              <p class="text-gray-600 text-sm mb-2">Inny Autor</p>
              <div class="text-yellow-400 text-sm mb-1">{renderStars(4.5)}</div>
              <p class="font-bold text-lg">45.99 zł</p>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Customer Reviews -->
  <div class="mt-24 border-t pt-12 mb-24">
    <h2 class="text-3xl font-bold mb-8">Opinie czytelników</h2>
    <div class="space-y-8">
      {#each Array(4) as _, i}
        <div class="border-b pb-8">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              {['AK', 'MN', 'PW', 'KL'][i]}
            </div>
            <div>
              <p class="font-bold">Czytelnik {i + 1}</p>
              <div class="text-yellow-400 text-sm">{renderStars(4 + i * 0.2)}</div>
            </div>
          </div>
          <h3 class="font-bold mb-2">{[
            'Świetna książka dla początkujących',
            'Praktyczne porady i przepisy',
            'Zmienia podejście do diety',
            'Polecam każdemu'
          ][i]}</h3>
          <p class="text-gray-700">
            {[
              'Książka pomogła mi zrozumieć podstawy zdrowego odżywiania. Przepisy są proste i smaczne, a porady łatwe do wprowadzenia w życie.',
              'Najbardziej podobają mi się praktyczne wskazówki i plan działania. Widać, że autorka ma duże doświadczenie w pracy z pacjentami.',
              'To nie jest zwykła książka o diecie - to kompleksowy przewodnik po zdrowym stylu życia. Bardzo pomocne są też ćwiczenia mindfulness.',
              'Nareszcie książka, która nie obiecuje cudów, tylko przedstawia realne rozwiązania. Po miesiącu stosowania się do zaleceń widzę pierwsze efekty.'
            ][i]}
          </p>
          <p class="text-sm text-gray-500 mt-2">Opublikowano {['2 dni', '1 tydzień', '2 tygodnie', '1 miesiąc'][i]} temu</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<Footer /> 