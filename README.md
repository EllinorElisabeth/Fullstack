Nettsiden henter alle Trump-tanker fra API-et ved hjelp av Context og en asynkron 
funksjon som laster inn data når siden vises. Brukeren kan legge til nye tanker, 
oppdatere eksisterende tanker og slette dem. Funksjonene er koblet til API-forespørsler 
som utfører disse operasjonene på serveren. Det har blitt prioritert å oppdatere 
grensesnittet så raskt som mulig når endringer oppstår. Tilstandshåndtering er derfor 
brukt effektivt i prosjektet for å sikre at de nyeste endringene vises for brukeren. 

Brukeren kan navigere til søkesiden, der det er mulig å søke etter tanker enten ved ID 
eller tekst. Applikasjonen vil deretter vise relevante resultater. 

Under utviklingen av applikasjonen har useState blitt brukt hyppig for å håndtere lokal 
tilstand, useEffect for å hente data, og useContext for å dele tilstand på tvers av 
komponenter. Context har blitt brukt effektivt for å håndtere global tilstand for Trump
tanker, samt for å oppdatere og dele data mellom komponenter. 

For styling og layout har prosjektet benyttet grunnleggende Tailwind CSS. Hovedfokus i 
CSS har vært animasjoner og egendefinerte primærstiler lagret i variabler, som enkelt 
kan gjenbrukes i videre utvikling. For responsivt design har Tailwinds innebygde verktøy 
blitt utnyttet for å sikre at designet fungerer på ulike skjermstørrelser.

Det er tatt hensyn til universell utforming ved å bruke tilstrekkelige fargekontraster og 
letter-spacing for å gjøre nettsiden mer tilgjengelig for dyslektikere og brukere med 
nedsatt syn (lærte dette på fagskole). I tillegg er sterke farger og overdrevne animasjoner 
unngått for å skape en harmonisk brukeropplevelse som ikke distraherer. Dette er i tråd 
med KISS-prinsippet (Keep It Simple, Stupid), som har blitt fulgt for å holde løsningen 
enkel og brukervennlig. 
