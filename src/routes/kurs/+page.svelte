<script>
  import  Footer  from '$lib/components/footer.svelte';
  import { fade } from 'svelte/transition';

  let activeTab = 'opis';
  let showPopup = false;
  let email = '';

  function setActiveTab(tab) {
    activeTab = tab;
  }

  function togglePopup() {
    showPopup = !showPopup;
  }

  function handleSubmit() {
    // Here you would typically send the email to your server
    console.log('Submitted email:', email);
    togglePopup();
    email = ''; // Reset the email input
  }
</script>

<svelte:head>
  <title>Skuteczne Odchudzanie: 30-Dniowy Program - Platforma Kursów Online</title>
</svelte:head>

<div class="w-11/12 mx-auto  font-haas">
  <img src="/stopjojoblacklogo.webp" alt="Course" class="w-36 h-auto py-6">
  <!-- Top Section -->
  <div class="flex flex-col md:flex-row mb-12">
    <!-- Video Section -->
    <div class="md:w-1/2 mb-6 md:mb-0 md:pr-6">
      <div class="">
       <img src="/a1.webp" alt="Course" class="w-full h-auto">
      </div>
    </div>
    
    <!-- Course Info Section -->
    <div class="md:w-1/2">
      <h1 class="text-5xl font-bold font-haas mb-4">Skuteczne Odchudzanie: 30-Dniowy Program</h1>
      <p class="text-lg mb-4 md:mb-12">Odkryj sprawdzone metody utraty wagi i poprawy zdrowia w naszym kompleksowym kursie.</p>
      <button 
        on:click={togglePopup} 
        class="bg-black text-white w-full px-6 py-2 hover:text-black hover:bg-white hover:border-black hover:border transition duration-300 flex items-center justify-center group"
      >
        <span>Zapisz się teraz</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 ml-2 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1.5" 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Bottom Section -->
  <div class="flex flex-col md:flex-row">
    <!-- Key Deliverables -->
    <div class="md:w-3/12 mb-6 md:mb-0 md:pr-6">
      <h2 class="text-lg font-bold mb-4">Czego oczekiwać?</h2>
      <ul class="list-disc pl-5">
        <li class="mb-2">Spersonalizowany plan żywieniowy</li>
        <li class="mb-2">Codzienne treningi wideo</li>
        <li class="mb-2">Wsparcie motywacyjne</li>
        <li class="mb-2">Śledzenie postępów</li>
      </ul>
    </div>

    <!-- Tabs Section -->
    <div class="md:w-9/12">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          {#each ['opis', 'autorzy', 'struktura'] as tab}
            <button
              class={`${
                activeTab === tab
                  ? 'border-black '
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium `}
              on:click={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          {/each}
        </nav>
      </div>

      <div class="mt-6">
        {#if activeTab === 'opis'}
          <p>Nasz 30-dniowy program odchudzania został zaprojektowany, aby pomóc Ci osiągnąć Twoje cele związane z utratą wagi w zdrowy i zrównoważony sposób. Łączymy naukowe podejście do odżywiania z efektywnymi treningami i wsparciem psychologicznym, aby zapewnić Ci kompleksowe narzędzia do transformacji Twojego ciała i stylu życia.</p>
        {:else if activeTab === 'autorzy'}
          <ul>
            <li class="mb-4">
              <h3 class="text-lg font-semibold">Anna Kowalska</h3>
              <p>Certyfikowana dietetyczka z 10-letnim doświadczeniem w prowadzeniu programów odchudzających.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-lg font-semibold">Piotr Nowak</h3>
              <p>Trener personalny specjalizujący się w ćwiczeniach na redukcję tkanki tłuszczowej i budowę mięśni.</p>
            </li>
          </ul>
        {:else if activeTab === 'struktura'}
          <ul>
            <li class="mb-4">
              <h3 class="text-lg font-semibold">Tydzień 1: Podstawy zdrowego odżywiania</h3>
              <p>Poznaj zasady zbilansowanej diety i naucz się planować posiłki sprzyjające utracie wagi.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-lg font-semibold">Tydzień 2-3: Intensyfikacja treningów</h3>
              <p>Zwiększ intensywność ćwiczeń i poznaj techniki maksymalizujące spalanie kalorii.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-lg font-semibold">Tydzień 4: Utrzymanie motywacji i długoterminowe strategie</h3>
              <p>Naucz się, jak utrzymać motywację i wprowadzić trwałe zmiany w swoim stylu życia.</p>
            </li>
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>

{#if showPopup}
  <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-2" on:click={togglePopup} type="button" tabindex="-1">
    <div transition:fade="{{ duration: 300 }}" class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative" on:click|stopPropagation type="button" tabindex="-1">
      <button 
        on:click={togglePopup} 
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label="Close"
        type="button"
        tabindex="-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="text-2xl font-bold mb-4">Zapisz się na kurs</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="email"
          bind:value={email}
          placeholder="Twój adres email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button type="submit" class="bg-[#ffa420] w-full px-6 py-2 rounded-md hover:bg-[#ff9100] transition duration-300">
          Zapisz się
        </button>
      </form>
    </div>
  </div>
{/if}

<Footer />