<script>
  export let data;
  let course = data.course;
  let activeTab = 'opis';

  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<svelte:head>
  <title>{course.title} - Platforma Kursów Online</title>
</svelte:head>

<div class="w-11/12 mx-auto py-12 font-haas">
  <!-- Top Section -->
  <div class="flex flex-col md:flex-row mb-12">
    <!-- Video Section -->
    <div class="md:w-1/2 mb-6 md:mb-0 md:pr-6">
      <div class="">
        {#if course.videoUrl}
          <iframe 
            src={course.videoUrl} 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen
            class="w-full h-auto"
            title={course.title}
          ></iframe>
        {:else}
          <img src="/a1.webp" alt="Course " class="w-full h-auto">
        {/if}
      </div>
    </div>
    
    <!-- Course Info Section -->
    <div class="md:w-1/2">
      <h1 class="text-5xl font-bold mb-4">{course.title}</h1>
      <p class="text-lg mb-4">{course.shortIntroduction}</p>
      <button class="bg-[#ffa420] w-full px-6 py-2 hover:bg-blue-700 transition duration-300">
        Zapisz się teraz
      </button>
    </div>
  </div>

  <!-- Bottom Section -->
  <div class="flex flex-col md:flex-row">
    <!-- Key Deliverables -->
    <div class="md:w-3/12 mb-6 md:mb-0 md:pr-6">
      <h2 class="text-2xl font-semibold mb-4">Kluczowe Elementy</h2>
      <ul class="list-disc pl-5">
        {#each course.keyDeliverables as deliverable}
          <li class="mb-2">{deliverable}</li>
        {/each}
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
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              on:click={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          {/each}
        </nav>
      </div>

      <div class="mt-6">
        {#if activeTab === 'opis'}
          <p>{course.description}</p>
        {:else if activeTab === 'autorzy'}
          <ul>
            {#each course.authors as author}
              <li class="mb-4">
                <h3 class="text-lg font-semibold">{author.name}</h3>
                <p>{author.bio}</p>
              </li>
            {/each}
          </ul>
        {:else if activeTab === 'struktura'}
          <ul>
            {#each course.modules as module}
              <li class="mb-4">
                <h3 class="text-lg font-semibold">{module.title}</h3>
                <p>{module.description}</p>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>
