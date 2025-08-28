// src/data/fish-species.ts
// Format extensibil, pregătit pentru "lista completă" (dulcicol + salmastru + marin).
// Surse de autoritate pentru completări ulterioare:
// - Iftime et al., 2025, Zootaxa: checklist complet pentru România (≈272 spp.). 
// - FishBase (freshwater RO: ≈133–136 spp.).
// - Raport RO → CE (2023) pentru speciile importante la Marea Neagră.
//
// NOTE: `habitat` poate fi: "freshwater" | "brackish" | "marine".
//      `statusRO` sumarizează: native/introduced/locally_extinct/protected (unde e cazul).

export type Habitat = "freshwater" | "brackish" | "marine";
export interface FishSpecies {
  scientificName: string;
  romanianName?: string;
  family?: string;
  habitat: Habitat | Habitat[];
  statusRO?: "native" | "introduced" | "locally_extinct" | "protected" | "questionable";
  notes?: string;
}

// === LISTA DE BAZĂ (ROMÂNIA, DULCICOL + câteva salmastre) — "seed" mare, ușor de extins ===
// (include cele mai uzuale/recunoscute în RO; poți adăuga restul din sursele citate)
export const romaniaSpecies: FishSpecies[] = [
  // Acipenseridae (sturioni) – Dunăre, Delta, Marea Neagră (migratori anadromi)
  { scientificName: "Huso huso", romanianName: "Morun", family: "Acipenseridae", habitat: ["brackish","freshwater","marine"], statusRO: "protected" },
  { scientificName: "Acipenser stellatus", romanianName: "Păstrugă", family: "Acipenseridae", habitat: ["brackish","freshwater","marine"], statusRO: "protected" },
  { scientificName: "Acipenser gueldenstaedtii", romanianName: "Nisetru", family: "Acipenseridae", habitat: ["brackish","freshwater","marine"], statusRO: "protected" },
  { scientificName: "Acipenser ruthenus", romanianName: "Cega", family: "Acipenseridae", habitat: "freshwater", statusRO: "protected" },
  { scientificName: "Acipenser sturio", romanianName: "Șip", family: "Acipenseridae", habitat: ["brackish","freshwater","marine"], statusRO: "locally_extinct" },

  // Salmonidae
  { scientificName: "Salmo trutta fario", romanianName: "Păstrăv indigen", family: "Salmonidae", habitat: "freshwater", statusRO: "native" },
  { scientificName: "Salmo trutta", romanianName: "Păstrăv", family: "Salmonidae", habitat: "freshwater" },
  { scientificName: "Oncorhynchus mykiss", romanianName: "Păstrăv curcubeu", family: "Salmonidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Thymallus thymallus", romanianName: "Lipăn", family: "Salmonidae", habitat: "freshwater" },
  { scientificName: "Hucho hucho", romanianName: "Lostriță", family: "Salmonidae", habitat: "freshwater", statusRO: "protected" },

  // Esocidae
  { scientificName: "Esox lucius", romanianName: "Știucă", family: "Esocidae", habitat: "freshwater" },

  // Esociformes (Umbra)
  { scientificName: "Umbra krameri", romanianName: "Umbra", family: "Umbridae", habitat: "freshwater", statusRO: "protected" },

  // Percidae
  { scientificName: "Sander lucioperca", romanianName: "Șalău", family: "Percidae", habitat: "freshwater" },
  { scientificName: "Sander volgensis", romanianName: "Șalău de nisip", family: "Percidae", habitat: "freshwater" },
  { scientificName: "Perca fluviatilis", romanianName: "Biban", family: "Percidae", habitat: "freshwater" },
  { scientificName: "Gymnocephalus cernua", romanianName: "Bodorka de fund (morunaș de fund)", family: "Percidae", habitat: "freshwater" },
  { scientificName: "Zingel zingel", romanianName: "Zingel", family: "Percidae", habitat: "freshwater", statusRO: "protected" },
  { scientificName: "Zingel streber", romanianName: "Zgăvoacă mare (streber)", family: "Percidae", habitat: "freshwater", statusRO: "protected" },

  // Siluridae
  { scientificName: "Silurus glanis", romanianName: "Somn", family: "Siluridae", habitat: "freshwater" },

  // Gadidae (dulcicol – biban de mare nu, dar în Marea Neagră există specii marine; lăsăm doar dulcicolul tradițional absent -> skip)

  // Lotidae
  { scientificName: "Lota lota", romanianName: "Mihalț", family: "Lotidae", habitat: "freshwater" },

  // Cyprinidae (multe specii)
  { scientificName: "Cyprinus carpio", romanianName: "Crap", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Carassius gibelio", romanianName: "Caras argintiu (babușcă chinezească)", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Carassius carassius", romanianName: "Caras autohton", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Ctenopharyngodon idella", romanianName: "Cteno (crap ierbivor)", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Hypophthalmichthys molitrix", romanianName: "Novac", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Hypophthalmichthys nobilis", romanianName: "Sânger", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Abramis brama", romanianName: "Plătică", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Blicca bjoerkna", romanianName: "Babusca (plăticuță albă)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Rutilus rutilus", romanianName: "Roșioară", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Scardinius erythrophthalmus", romanianName: "Sângeruș (biban roșu de baltă)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Alburnus alburnus", romanianName: "Obleț", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Leuciscus aspius", romanianName: "Avat", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Squalius cephalus", romanianName: "Clean", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Chondrostoma nasus", romanianName: "Scobar", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Vimba vimba", romanianName: "Vimba", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Barbus barbus", romanianName: "Mreană", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Barbus petenyi", romanianName: "Mreană vânătă (Peteny)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Gobio gobio", romanianName: "Porcușor", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Romanogobio kesslerii", romanianName: "Porcușor de Nistru (Kessler)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Romanogobio vladykovi", romanianName: "Porcușor de Banat (Vladykov)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Alburnoides bipunctatus", romanianName: "Beldiță", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Rhodeus amarus", romanianName: "Țiparul amărui (bitterling)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Phoxinus phoxinus", romanianName: "Boarță (nănău)", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Tinca tinca", romanianName: "Lin", family: "Cyprinidae", habitat: "freshwater" },
  { scientificName: "Pseudorasbora parva", romanianName: "Baboș (sticlete asiatic)", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Carassius auratus", romanianName: "Caras auriu (evadat/ornamental)", family: "Cyprinidae", habitat: "freshwater", statusRO: "introduced" },

  // Cobitidae / Botiidae
  { scientificName: "Cobitis taenia", romanianName: "Fusaru (zvârluga)", family: "Cobitidae", habitat: "freshwater" },
  { scientificName: "Cobitis elongatoides", romanianName: "Fusaru dunărean", family: "Cobitidae", habitat: "freshwater" },
  { scientificName: "Misgurnus fossilis", romanianName: "Țipar de baltă (țipar de nămol)", family: "Cobitidae", habitat: "freshwater" },
  { scientificName: "Sabanejewia aurata", romanianName: "Fusaru auriu", family: "Cobitidae", habitat: "freshwater" },

  // Balitoridae (Barbatula)
  { scientificName: "Barbatula barbatula", romanianName: "Zgăvoacă de munte (boiștean)", family: "Nemacheilidae", habitat: "freshwater" },

  // Gobiidae (în special salmastru/dunărean)
  { scientificName: "Neogobius melanostomus", romanianName: "Gobi negru (porcușor de mare)", family: "Gobiidae", habitat: ["brackish","freshwater"], statusRO: "introduced" },
  { scientificName: "Ponticola eurycephalus", romanianName: "Gobi", family: "Gobiidae", habitat: ["brackish","freshwater"] },
  { scientificName: "Proterorhinus semilunaris", romanianName: "Guvid", family: "Gobiidae", habitat: ["brackish","freshwater"] },

  // Clupeidae (migratori)
  { scientificName: "Alosa immaculata", romanianName: "Scrumbie de Dunăre (allis shad sensu lato în RO)", family: "Clupeidae", habitat: ["brackish","freshwater","marine"] },

  // Atherinidae
  { scientificName: "Atherina boyeri", romanianName: "Aterină", family: "Atherinidae", habitat: ["brackish","freshwater"] },

  // Centrarchidae (introduse)
  { scientificName: "Lepomis gibbosus", romanianName: "Biban soare", family: "Centrarchidae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Micropterus salmoides", romanianName: "Biban mare (black bass)", family: "Centrarchidae", habitat: "freshwater", statusRO: "introduced" },

  // Ictaluridae (introduse)
  { scientificName: "Ameiurus nebulosus", romanianName: "Somn pitic (brown bullhead)", family: "Ictaluridae", habitat: "freshwater", statusRO: "introduced" },
  { scientificName: "Ictalurus punctatus", romanianName: "Somn american (channel catfish)", family: "Ictaluridae", habitat: "freshwater", statusRO: "introduced" },

  // Poeciliidae (introduse)
  { scientificName: "Gambusia holbrooki", romanianName: "Gambuzie", family: "Poeciliidae", habitat: "freshwater", statusRO: "introduced" },

  // Anguillidae
  { scientificName: "Anguilla anguilla", romanianName: "Țipar european", family: "Anguillidae", habitat: ["brackish","freshwater","marine"], statusRO: "protected" },

  // Petromyzontidae (ciclostomi)
  { scientificName: "Eudontomyzon danfordi", romanianName: "Lipitoare de râu (lampreă)", family: "Petromyzontidae", habitat: "freshwater", statusRO: "protected" },
  { scientificName: "Lampetra planeri", romanianName: "Lamprea de izvor", family: "Petromyzontidae", habitat: "freshwater", statusRO: "protected" },

  // Altele uzuale în România (completează după nevoie)
  { scientificName: "Gasterosteus aculeatus", romanianName: "Țipăruș (ghiduș)", family: "Gasterosteidae", habitat: ["brackish","freshwater"] },
  { scientificName: "Esox cisalpinus", romanianName: "Știucă sudică (taxon nou în unele liste)", family: "Esocidae", habitat: "freshwater", statusRO: "questionable", notes: "verificare taxonomică locală" },
];

// Conveniență pentru UI existente:
export const fishSpeciesList = romaniaSpecies.map(s => s.romanianName || s.scientificName);
export const fishSpeciesOptions = romaniaSpecies.map(s => ({
  value: s.scientificName,
  label: s.romanianName ? `${s.romanianName} (${s.scientificName})` : s.scientificName
}));

// === LISTĂ SEPARATĂ — SPECII IMPORTANTE la Marea Neagră (sector românesc) ===
// Bază: raport RO către Comisia Europeană (2023) + surse publice educaționale.
export const blackSeaImportant: FishSpecies[] = [
  // pelagice
  { scientificName: "Sprattus sprattus", romanianName: "Hamsie (sprat)", family: "Clupeidae", habitat: "marine" },
  { scientificName: "Engraulis encrasicolus", romanianName: "Anșoa (anchovy)", family: "Engraulidae", habitat: "marine" },
  { scientificName: "Trachurus mediterraneus", romanianName: "Stavrid", family: "Carangidae", habitat: "marine" },
  { scientificName: "Atherina boyeri", romanianName: "Aterină", family: "Atherinidae", habitat: ["brackish","marine"] },
  { scientificName: "Alosa immaculata", romanianName: "Scrumbie de Dunăre", family: "Clupeidae", habitat: ["brackish","marine","freshwater"] },
  { scientificName: "Belone belone", romanianName: "Zăganu (garfish)", family: "Belonidae", habitat: "marine" },

  // demersale
  { scientificName: "Scophthalmus maximus", romanianName: "Calcan", family: "Scophthalmidae", habitat: "marine" },
  { scientificName: "Mullus barbatus", romanianName: "Barbun (mreana de mare)", family: "Mullidae", habitat: "marine" },
  { scientificName: "Squalus acanthias", romanianName: "Câine de mare (vulnerabil)", family: "Squalidae", habitat: "marine", statusRO: "protected" },
  { scientificName: "Raja clavata", romanianName: "Vulpe de mare (raza pătată)", family: "Rajidae", habitat: "marine" },
  { scientificName: "Dasyatis pastinaca", romanianName: "Pisica de mare (stingray comun)", family: "Dasyatidae", habitat: "marine" },
  { scientificName: "Gobiidae spp.", romanianName: "Guvi(d)i", family: "Gobiidae", habitat: "marine", notes: "mai multe specii comerciale locale" },

  // chefali (mugilide)
  { scientificName: "Chelon auratus", romanianName: "Chef-al (aur)", family: "Mugilidae", habitat: "marine" },
  { scientificName: "Chelon saliens", romanianName: "Chef-al (săltăreț)", family: "Mugilidae", habitat: "marine" },
  { scientificName: "Mugil cephalus", romanianName: "Chef-al (lisa)", family: "Mugilidae", habitat: "marine" },

  // altele frecvent întâlnite
  { scientificName: "Pomatomus saltatrix", romanianName: "Bluefish (lup de mare)", family: "Pomatomidae", habitat: "marine" },
  { scientificName: "Dicentrarchus labrax", romanianName: "Lup de mare european", family: "Moronidae", habitat: "marine" },
  { scientificName: "Sarda sarda", romanianName: "Palamidă (bonito)", family: "Scombridae", habitat: "marine" },
];

// Pentru UI separat la litoral:
export const blackSeaOptions = blackSeaImportant.map(s => ({
  value: s.scientificName,
  label: s.romanianName ? `${s.romanianName} (${s.scientificName})` : s.scientificName
}));

// === TODO pentru "lista completă": ===
// 1) Completează romaniaSpecies cu restul taxonilor din Zootaxa (2025) + FishBase (freshwater RO).
// 2) Păstrează "scientificName" drept cheie unică; NU duplica sinonimele.
// 3) La nevoie, marchează `statusRO: "introduced" | "protected" | "locally_extinct"`.
// 4) Dacă vrei file mare separat (JSON), îl putem încărca şi importa dinamic.
