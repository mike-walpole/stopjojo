<script>
  let faqs = [
    {
      question: "Jak wygląda proces konsultacji online?",
      answer: "Konsultacje odbywają się przez wygodną platformę wideokonferencyjną. Przed spotkaniem otrzymasz krótką ankietę do wypełnienia, dzięki której lepiej poznamy Twoje potrzeby. Podczas 50-minutowej sesji omówimy Twoją sytuację, odpowiemy na pytania i ustalimy plan działania. Po konsultacji otrzymasz spersonalizowane zalecenia i dostęp do materiałów edukacyjnych.",
      isOpen: false
    },
    {
      question: "Czy program uwzględnia mój napięty grafik?",
      answer: "Absolutnie! Rozumiemy, jak wymagające jest łączenie kariery, rodziny i dbania o siebie. Nasze programy są elastyczne - możesz korzystać z materiałów w dogodnym czasie, a konsultacje planujemy w terminach dopasowanych do Twojego kalendarza, także w godzinach wieczornych.",
      isOpen: false
    },
    {
      question: "Jak długo trzeba czekać na pierwsze efekty?",
      answer: "Pierwsze pozytywne zmiany, takie jak lepsze samopoczucie i więcej energii, zauważysz już po 2-3 tygodniach. Trwałe efekty w postaci zmiany nawyków i stabilnej wagi osiągamy zwykle po 3-4 miesiącach regularnej pracy. Pamiętaj, że stawiamy na zdrowe, stopniowe zmiany, które pozostaną z Tobą na lata.",
      isOpen: false
    },
    {
      question: "Czy otrzymam wsparcie w trudnych momentach?",
      answer: "Tak, jesteśmy z Tobą na każdym etapie. Oprócz regularnych konsultacji, masz dostęp do zamkniętej grupy wsparcia, gdzie spotykają się kobiety o podobnych celach. Organizujemy też cotygodniowe sesje Q&A z ekspertami, podczas których możesz zadawać pytania i dzielić się wyzwaniami.",
      isOpen: false
    },
    {
      question: "Czy program jest odpowiedni dla kobiet w okresie menopauzy?",
      answer: "Tak, nasz program jest dostosowany do potrzeb kobiet w różnych fazach życia. Mamy duże doświadczenie w pracy z kobietami w okresie około- i pomenopauzalnym. Nasze zalecenia uwzględniają specyficzne wyzwania tego okresu, takie jak zmiany hormonalne i metaboliczne, oraz skupiają się na łagodzeniu typowych objawów przy jednoczesnym wsparciu w utrzymaniu prawidłowej wagi.",
      isOpen: false
    },
    {
      question: "Jakie materiały otrzymam w ramach programu?",
      answer: "W ramach programu otrzymujesz dostęp do kompleksowej platformy edukacyjnej, która zawiera: szczegółowe plany żywieniowe, przepisy z dokładnymi instrukcjami, filmy instruktażowe, materiały edukacyjne o zdrowym stylu życia, dziennik monitorowania postępów oraz dostęp do zamkniętej grupy wsparcia. Wszystkie materiały są dostępne przez aplikację mobilną i stronę internetową.",
      isOpen: false
    },
    {
      question: "Czy program uwzględnia moje preferencje żywieniowe i alergie?",
      answer: "Oczywiście! Podczas konsultacji szczegółowo omawiamy Twoje preferencje żywieniowe, alergie i nietolerancje pokarmowe. Nasz program jest w pełni spersonalizowany - dostosowujemy zalecenia do Twoich potrzeb, stylu życia i upodobań kulinarnych. Możemy też zaproponować alternatywne składniki i przepisy, które będą dla Ciebie odpowiednie i smaczne.",
      isOpen: false
    },
    {
      question: "Co wyróżnia Wasz program na tle innych?",
      answer: "Nasz program wyróżnia się kompleksowym podejściem łączącym wiedzę dietetyczną, wsparcie psychologiczne i praktyczne rozwiązania. Nie oferujemy szybkich, ale krótkotrwałych efektów - skupiamy się na wypracowaniu trwałych, zdrowych nawyków. Dodatkowo, jako jedyni na rynku oferujemy połączenie indywidualnych konsultacji online z dostępem do rozbudowanej platformy edukacyjnej i społeczności wsparcia.",
      isOpen: false
    },
    {
      question: "Jak wygląda proces płatności i czy można zrezygnować z programu?",
      answer: "Oferujemy elastyczne formy płatności - możesz wybrać płatność jednorazową lub ratalną. Wszystkie płatności są bezpieczne i realizowane przez certyfikowane systemy płatności online. Jeśli z jakiegoś powodu program nie spełni Twoich oczekiwań, możesz z niego zrezygnować w ciągu pierwszych 14 dni i otrzymać zwrot pieniędzy.",
      isOpen: false
    }
  ];

  function toggleFAQ(index) {
    faqs = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });
  }
</script>

<div class="w-11/12 mx-auto py-16">
    <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Często zadawane pytania</p>
    <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">Pytasz, masz!</h2>
  
  {#each faqs as faq, index}
    <div class="border-b border-gray-200 py-4">
      <button
        on:click={() => toggleFAQ(index)}
        class="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span class="text-xl font-bold text-gray-600">{faq.question}</span>
        <span class="text-2xl text-gray-600">
          {faq.isOpen ? '−' : '+'}
        </span>
      </button>
      {#if faq.isOpen}
        <p class="mt-4">{faq.answer}</p>
      {/if}
    </div>
  {/each}
</div>
