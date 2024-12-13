<script>
  let weight = '';
  let height = '';
  let bmi = null;

  function getBMIDescription(bmiValue) {
    const bmiNum = parseFloat(bmiValue);
    if (bmiNum < 18.5) {
      return {
        category: "Niedowaga",
        description: "BMI poniżej 18.5 wskazuje na niedowagę. Zalecana jest konsultacja z dietetykiem w celu opracowania planu zdrowego przyrostu masy ciała."
      };
    } else if (bmiNum >= 18.5 && bmiNum < 25) {
      return {
        category: "Prawidłowa waga",
        description: "BMI między 18.5 a 24.9 oznacza prawidłową masę ciała. Utrzymuj zdrowe nawyki żywieniowe i regularną aktywność fizyczną."
      };
    } else if (bmiNum >= 25 && bmiNum < 30) {
      return {
        category: "Nadwaga",
        description: "BMI między 25 a 29.9 wskazuje na nadwagę. Rozważ wprowadzenie zmian w diecie i zwiększenie aktywności fizycznej."
      };
    } else {
      return {
        category: "Otyłość",
        description: "BMI powyżej 30 wskazuje na otyłość. Zalecana jest konsultacja z lekarzem lub dietetykiem w celu opracowania bezpiecznego planu redukcji masy ciała."
      };
    }
  }

  // Use reactive statement to calculate BMI when weight and valid height are present
  $: if (weight && height && height.toString().length === 3) {
    const heightInMeters = height / 100;
    bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  } else {
    bmi = null;
  }
</script>

<div class="w-11/12 mx-auto py-12 font-haas border-t border-gray-200 mt-12">
  <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Sprawdź swoje BMI</p>
  <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">
    Kalkulator BMI
  </h2>
</div>

<div class="w-11/12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
  <!-- Input Column -->
  <div class="space-y-8">
    <div>
      <label for="weight" class="block text-sm font-medium text-gray-700 mb-2">Waga (kg)</label>
      <input
        type="number"
        id="weight"
        bind:value={weight}
        placeholder="np. 70"
        min="1"
        max="300"
        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    <div>
      <label for="height" class="block text-sm font-medium text-gray-700 mb-2">Wzrost (cm)</label>
      <input
        type="number"
        id="height"
        bind:value={height}
        placeholder="np. 170"
        min="100"
        max="299"
        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
      />
      <p class="text-sm text-gray-500 mt-1">Wprowadź wzrost w centymetrach (np. 170)</p>
    </div>
  </div>

  <!-- Result Column -->
  <div class="flex flex-col justify-center items-center md:items-start">
    {#if bmi !== null && height.toString().length === 3}
      <div class="text-center md:text-left">
        <p class="text-xl mb-4">Twoje BMI:</p>
        <p class="text-7xl font-bold font-haas mb-4">{bmi}</p>
        <div class="space-y-2">
          <p class="text-xl font-bold">{getBMIDescription(bmi).category}</p>
          <p class="text-gray-600 max-w-md">{getBMIDescription(bmi).description}</p>
        </div>
      </div>
    {:else}
      <p class="text-xl text-gray-500">
        {#if !height}
          Wprowadź swoją wagę i wzrost, aby obliczyć BMI
        {:else if height.toString().length !== 3}
          Wprowadź poprawny wzrost w centymetrach (np. 170)
        {:else}
          Wprowadź swoją wagę, aby obliczyć BMI
        {/if}
      </p>
    {/if}
  </div>
</div> 