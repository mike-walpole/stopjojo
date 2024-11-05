<script>
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    
  </script>
  <div class="mt-24 w-11/12 mx-auto font-haas border-t border-gray-200 grid md:grid-cols-2">
    <div>
        <p class="text-gray-400 pt-8 md:mb-16 mb-6 text-xl">Twoja droga do zdrowia</p>
        <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">Jak działamy?</h2>
    </div>
   
<div class="md:mt-8">
    <Timeline>
        <TimelineItem title="Konsultacja wstępna" date="Krok 1">
          <p class="mb-4 text-base font-normal text-gray-500">Podczas pierwszej rozmowy poznamy Twoje potrzeby, styl życia i cele. Wspólnie wybierzemy najlepszą ścieżkę: kurs online, indywidualne konsultacje lub może połączenie obu form wsparcia.</p>
        </TimelineItem>
        <TimelineItem title="Plan działania" date="Krok 2">
          <p class="text-base font-normal text-gray-500">Otrzymasz spersonalizowany plan uwzględniający Twój styl życia, preferencje kulinarne i cele zdrowotne. Pokażemy Ci, jak wprowadzać zmiany małymi krokami, by były trwałe.</p>
        </TimelineItem>
        <TimelineItem title="Stałe wsparcie" date="Krok 3">
          <p class="text-base font-normal text-gray-500">Będziemy towarzyszyć Ci w procesie zmian. Regularne konsultacje, dostęp do materiałów edukacyjnych i społeczność kobiet o podobnych celach pomogą Ci utrzymać motywację.</p>
        </TimelineItem>
    </Timeline>
</div>
 
</div>
