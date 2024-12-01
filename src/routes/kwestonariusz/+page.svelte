<script>
    import { createClient } from '@supabase/supabase-js';
    import { fade } from 'svelte/transition';
    import Footer from '$lib/components/footer.svelte';
    import Navbar from '$lib/components/navbar.svelte';
  
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  
    const questions = [
      {
        id: 1,
        text: "Jak często odczuwasz silną potrzebę podjadania między posiłkami?",
        labels: ["Nigdy", "Rzadko", "Często", "Bardzo często"]
      },
      {
        id: 2,
        text: "Jak często czujesz się zmęczona/y bez wyraźnego powodu?",
        labels: ["Nigdy", "Rzadko", "Często", "Bardzo często"]
      },
      {
        id: 3,
        text: "W jakim stopniu stres wpływa na Twoje nawyki żywieniowe?",
        labels: ["Wcale", "Niewiele", "Znacząco", "Bardzo znacząco"]
      },
      {
        id: 4,
        text: "Jak często masz wyrzuty sumienia po zjedzeniu posiłku?",
        labels: ["Nigdy", "Rzadko", "Często", "Bardzo często"]
      },
      {
        id: 5,
        text: "W jakim stopniu jesteś zadowolona/y ze swojego obecnego stylu życia?",
        labels: ["Bardzo", "Raczej tak", "Raczej nie", "Wcale"]
      },
      {
        id: 6,
        text: "Jak często stosujesz restrykcyjne diety?",
        labels: ["Nigdy", "Rzadko", "Często", "Bardzo często"]
      }
    ];
  
    let currentQuestion = 0;
    let answers = {};
    let name = '';
    let email = '';
    let isSubmitting = false;
    let showSuccess = false;
    let selectedIndex = null;
    let isTransitioning = false;
  
    async function handleAnswer(value, index) {
      if (isTransitioning) return;
      
      isTransitioning = true;
      selectedIndex = index;
      
      // Wait for the pulse animation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      answers[currentQuestion] = value;
      if (currentQuestion < questions.length) {
        currentQuestion++;
      }
      
      // Reset for next question
      selectedIndex = null;
      isTransitioning = false;
    }
  
    function goBack() {
      if (currentQuestion > 0) {
        currentQuestion--;
      }
    }
  
    async function handleSubmit() {
      isSubmitting = true;
      try {
        const { error } = await supabase
          .from('questionnaire_responses')
          .insert([
            {
              name,
              email,
              answers
            }
          ]);
  
        if (error) throw error;
        showSuccess = true;
      } catch (error) {
        console.error('Error:', error);
      } finally {
        isSubmitting = false;
      }
    }
  </script>
  
  <style>
    .pulse {
      animation: pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1);
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        background-color: white;
        color: black;
      }
      50% {
        transform: scale(1.05);
        background-color: black;
        color: white;
      }
    }
  </style>
  
  <div class="min-h-screen bg-white font-haas">
    <Navbar />
    <div class="w-11/12 max-w-3xl mx-auto pt-24">
      <div class="mb-24 space-y-6">
        <h1 class="text-4xl md:text-6xl font-bold">Test Nawyków Żywieniowych</h1>
        <p class="text-xl text-gray-600">
          Ten krótki test pomoże nam lepiej zrozumieć Twoje nawyki żywieniowe i przygotować spersonalizowane zalecenia. 
          Na końcu poprosimy Cię o adres email, na który wyślemy szczegółową analizę Twoich odpowiedzi wraz z pierwszymi wskazówkami.
        </p>
      </div>
  
      {#if !showSuccess}
        <div class="mb-12">
          <div class="w-full bg-gray-200 h-1 rounded-full">
            <div 
              class="bg-black h-1 rounded-full transition-all duration-500"
              style="width: {currentQuestion === questions.length ? '100' : (currentQuestion / questions.length) * 100}%"
            ></div>
          </div>
        </div>
  
        {#if currentQuestion < questions.length}
          <div in:fade="{{ duration: 200 }}" class="space-y-12">
            <h2 class="text-4xl font-bold">{questions[currentQuestion].text}</h2>
            <div class="grid grid-cols-4 md:grid-cols-4 gap-4">
              {#each questions[currentQuestion].labels as label, index}
                <button
                  on:click={() => handleAnswer(index + 1, index)}
                  class="p-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 aspect-square flex items-center justify-center text-center {selectedIndex === index ? 'pulse' : ''}"
                  disabled={isTransitioning}
                >
                  {label}
                </button>
              {/each}
            </div>
            {#if currentQuestion > 0}
              <button 
                on:click={goBack}
                class="text-gray-500 hover:text-black transition-colors duration-300"
              >
                ← Wróć do poprzedniego pytania
              </button>
            {/if}
          </div>
        {:else}
          <div in:fade="{{ duration: 200 }}" class="space-y-8">
            <h2 class="text-4xl font-bold">Ostatni krok</h2>
            <p class="text-xl text-gray-600">Zostaw nam swoje dane, aby otrzymać spersonalizowane zalecenia.</p>
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Imię</label>
                <input
                  type="text"
                  id="name"
                  bind:value={name}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  bind:value={email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Poznaj swoje wyniki'}
              </button>
            </form>
          </div>
        {/if}
      {:else}
        <div in:fade="{{ duration: 200 }}" class="text-center space-y-6">
          <h2 class="text-4xl font-bold">Dziękujemy!</h2>
          <p class="text-xl text-gray-600">Twoje odpowiedzi zostały zapisane. Skontaktujemy się z Tobą wkrótce.</p>
        </div>
      {/if}
    </div>
  </div>

  <Footer />