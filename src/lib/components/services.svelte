<script>
  import { createClient } from '@supabase/supabase-js';
  import { fade } from 'svelte/transition';

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const services = [
    {
      title: 'Książki',
      image: '/a1.webp',
      type: 'książki'
    },
    {
      title: 'Konsultacje',
      image: '/a2.webp',
      type: 'konsultacje'
    },
    {
      title: 'Kursy Online',
      image: '/a3.webp',
      type: 'kursy_online'
    }
  ];

  let showModal = false;
  let selectedService = null;
  let name = '';
  let email = '';
  let isSubmitting = false;
  let errorMessage = '';
  let successMessage = '';

  function openModal(service) {
    selectedService = service;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    name = '';
    email = '';
    errorMessage = '';
    successMessage = '';
    selectedService = null;
  }

  async function handleSubmit() {
    if (isSubmitting) return;
    
    isSubmitting = true;
    errorMessage = '';
    successMessage = '';

    try {
      const { error } = await supabase
        .from('service_leads')
        .insert([
          {
            name,
            email,
            service_type: selectedService.type
          }
        ]);

      if (error) throw error;

      successMessage = 'Dziękujemy za zainteresowanie! Skontaktujemy się wkrótce.';
      setTimeout(closeModal, 3000);
    } catch (error) {
      console.error('Error:', error);
      errorMessage = 'Wystąpił błąd. Prosimy spróbować później.';
    } finally {
      isSubmitting = false;
    }
  }
</script>
<div class="w-11/12 mx-auto py-12 font-haas border-t border-gray-200 mt-12">
    <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Dołącz do nas</p>
    <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">
      Zacznij swoją zmianę
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl">
      Nie czekaj na idealny moment - on właśnie nadszedł. Zapisz się na listę oczekujących i bądź pierwsza, gdy otworzymy nowe miejsca.
    </p>
</div>
<div class="w-11/12  mx-auto py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
  {#each services as service}
    <button 
      on:click={() => openModal(service)}
      class="relative aspect-square group overflow-hidden"
    >
      <img 
        src={service.image} 
        alt={service.title}
        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 flex-col">
        <h2 class="text-5xl md:text-5xl font-bold text-white uppercase mb-6">{service.title}</h2>
        <div class="flex items-center border-b border-white bg-white text-black px-4 py-2">
          <p class="text-2xl font-bold font-haas uppercase">Zapisz się teraz</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 ml-2 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </div>
      </div>
    </button>
  {/each}
</div>

{#if showModal}
  <div 
    class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    on:click={closeModal}
    transition:fade
    role="dialog"
  >
    <div 
      class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative"
      on:click|stopPropagation
    >
      <button 
        on:click={closeModal}
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="text-center mb-8">
        <p class="text-gray-600 text-sm uppercase tracking-wider mb-2">Dołącz do grona zadowolonych klientek</p>
        <h2 class="text-2xl font-bold mb-2">{selectedService?.title}</h2>
        <p class="text-gray-600">Zarezerwuj swoje miejsce już dziś i rozpocznij transformację z profesjonalnym wsparciem.</p>
      </div>

      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {#if errorMessage}
          <p class="text-red-500 text-sm">{errorMessage}</p>
        {/if}

        {#if successMessage}
          <p class="text-green-500 text-sm">{successMessage}</p>
        {/if}

        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? 'Wysyłanie...' : 'Dołącz do listy oczekujących'}
        </button>
        <p class="text-xs text-center text-gray-500 mt-2">
          Liczba miejsc jest ograniczona. Zapisz się teraz, aby otrzymać pierwszeństwo dostępu.
        </p>
      </form>
    </div>
  </div>
{/if} 