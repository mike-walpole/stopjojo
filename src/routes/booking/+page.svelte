<style>
  ul {
    list-style-type: none;
    padding-left: 1.5em;
  }

  li::before {
    content: "\25A0";  /* Unicode for a filled square */
    color: black;  /* You can change this color as needed */
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
</style>

<!-- In your HTML part, make sure your list looks like this: -->
<ul>
  <li>Your first list item</li>
  <li>Your second list item</li>
  <li>Your third list item</li>
  <!-- ... more list items ... -->
</ul>

<svelte:head>
  <title>Umów Konsultację - StopJojo</title>
  <meta property="og:image" content="/a1.webp" />
  <meta property="og:title" content="Umów Konsultację - StopJojo" />
  <meta property="og:description" content="Zarezerwuj swoją konsultację online z naszymi ekspertami" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
