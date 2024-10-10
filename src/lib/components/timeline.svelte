<script>
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    
  </script>
  <div class="mt-24 w-11/12 mx-auto font-haas border-t border-gray-200 grid md:grid-cols-2">
    <div>
        <p class="text-gray-400  pt-8 md:mb-16 mb-6 text-xl" >Sukcesy naszych klientów</p>
        <h2 class="text-6xl md:text-9xl font-bold leading-12 md:mt-6 mb-12">Jak to działa?</h2>
    </div>
   
<div class="md:mt-8">
    <Timeline>
        <TimelineItem title="Analiza Twojej sytuacji" date="Krok 1">
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Rozpoczynamy od dokładnej analizy Twojego stanu zdrowia, nawyków żywieniowych i celów. Nasi eksperci stworzą spersonalizowany plan, dostosowany do Twoich potrzeb.</p>
        </TimelineItem>
        <TimelineItem title="Indywidualny plan żywieniowy" date="Krok 2">
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Otrzymasz szczegółowy plan żywieniowy, który nie tylko pomoże Ci schudnąć, ale także nauczy Cię zdrowych nawyków na całe życie. Plan uwzględnia Twoje preferencje i styl życia.</p>
        </TimelineItem>
        <TimelineItem title="Wsparcie i monitorowanie postępów" date="Krok 3">
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Przez cały czas trwania kursu będziesz miał dostęp do naszych ekspertów. Regularnie monitorujemy Twoje postępy i dostosowujemy plan, aby zapewnić najlepsze rezultaty.</p>
        </TimelineItem>
    </Timeline>
</div>
 
</div>
