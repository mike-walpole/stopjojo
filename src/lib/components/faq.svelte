<script>
  let faqs = [
    {
      question: "Czy te kursy są odpowiednie dla początkujących?",
      answer: "Absolutnie! Nasze kursy są zaprojektowane dla osób na każdym poziomie zaawansowania. Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z dietą, czy już masz pewne doświadczenie, znajdziesz u nas wiedzę i wsparcie dostosowane do Twoich potrzeb. Zaczynamy od podstaw i stopniowo wprowadzamy bardziej zaawansowane koncepcje, dzięki czemu każdy może podążać własnym tempem.",
      isOpen: false
    },
    {
      question: "Jak długo trwa dostęp do kursu?",
      answer: "Dobra wiadomość! Po zakupie kursu masz do niego dożywotni dostęp. Oznacza to, że możesz wracać do materiałów tak często, jak chcesz, odświeżać wiedzę i śledzić swoje postępy bez ograniczeń czasowych. To inwestycja w siebie, która procentuje przez lata!",
      isOpen: false
    },
    {
      question: "Czy potrzebuję specjalnego sprzętu do ćwiczeń?",
      answer: "Nie martw się o sprzęt! Nasze treningi są zaprojektowane tak, aby można je było wykonywać w domu z minimalnym wyposażeniem lub całkowicie bez niego. Skupiamy się na ćwiczeniach z masą własnego ciała i prostych technikach, które są skuteczne i nie wymagają drogiego sprzętu. Jeśli masz pod ręką hantle czy matę do ćwiczeń - świetnie, ale nie są one konieczne do osiągnięcia świetnych rezultatów.",
      isOpen: false
    },
    {
      question: "Czy otrzymam indywidualne wsparcie podczas kursu?",
      answer: "Oczywiście! Twój sukces jest naszym priorytetem. Oprócz dostępu do materiałów kursowych, oferujemy regularne sesje Q&A z naszymi ekspertami, gdzie możesz zadawać pytania i otrzymywać spersonalizowane porady. Dodatkowo, nasza aktywna społeczność kursantów i moderatorzy forum są zawsze gotowi, aby udzielić wsparcia, podzielić się doświadczeniami i zmotywować Cię do działania. Nigdy nie zostaniesz sam na swojej drodze do zdrowszego stylu życia!",
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

<div class="w-11/12 mx-auto  py-16">
    <p class="text-gray-400  pt-8 md:mb-16 mb-6 text-xl" >Często zadawane pytania</p>
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
        <p class="mt-4 ">{faq.answer}</p>
      {/if}
    </div>
  {/each}
</div>
