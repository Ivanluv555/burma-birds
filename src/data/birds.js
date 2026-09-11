// Freeze the array to prevent accidental mutations
export const birds = Object.freeze([
  {
    id: 1,
    name: "Burmese Bushlark",
    scientific_name: "Mirafra microptera",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/203495881/1800",
    photo_credit: "Angadachappa/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/203495881",
    description: "An endemic species found in the dry central plains of Burma. It's known for its lark-like appearance and melodious song, often delivered during a flight display.",
    habitat: "Dry scrubland, grasslands, and agricultural areas.",
    conservation_status: "LC"
  },
  {
    id: 2,
    name: "White-browed Nuthatch",
    scientific_name: "Sitta victoriae",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/48774781/1800",
    photo_credit: "James Eaton/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/48774781",
    description: "A beautiful and rare bird found only in the Chin Hills of western Burma, primarily on Mount Victoria. It forages on tree trunks and branches, moving with characteristic nuthatch agility.",
    habitat: "Oak and rhododendron forests at high altitudes.",
    conservation_status: "EN"
  },
  {
    id: 3,
    name: "Hooded Treepie",
    scientific_name: "Crypsirina cucullata",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306786611/1800",
    photo_credit: "Thibaud Aronson/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306786611",
    description: "Another endemic species of Burma's central dry zone. It's a striking-looking bird with a velvety black hood, pale grey body, and a long, elegant tail. Often seen in small, noisy groups.",
    habitat: "Open forests, scrub, and cultivated land with scattered trees.",
    conservation_status: "NT"
  },
  {
    id: 4,
    name: "Green Peafowl",
    scientific_name: "Pavo muticus",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305869381/1800",
    photo_credit: "Peter Ericsson/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305869381",
    description: "A large and magnificent peafowl, native to Southeast Asia including Burma. It is more brightly colored and slender than its Indian relative. Its loud calls are a distinctive sound of the forest.",
    habitat: "Forest edges, grasslands, and riverine habitats.",
    conservation_status: "EN"
  },
  {
    id: 5,
    name: "Jerdon's Minivet",
    scientific_name: "Pericrocotus albifrons",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/203496031/1800",
    photo_credit: "Angadachappa/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/203496031",
    description: "A small, slender bird endemic to the central dry zone of Burma. The male has a striking black and white pattern with a distinctive white forehead, while the female is duller.",
    habitat: "Acacia scrub and dry, open country.",
    conservation_status: "NT"
  },
  {
    id: 6,
    name: "Grey-headed Parakeet",
    scientific_name: "Psittacula finschii",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/48858591/1800",
    photo_credit: "James Eaton/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/48858591",
    description: "A medium-sized parakeet with a distinctive grey head, green body, and long tail. It's found in foothill forests across Southeast Asia, including large parts of Burma.",
    habitat: "Broadleaf evergreen and mixed deciduous forests.",
    conservation_status: "NT"
  },
  {
    id: 7,
    name: "Great Hornbill",
    scientific_name: "Buceros bicornis",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302812061/1800",
    photo_credit: "Gaurav Budania/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302812061",
    description: "One of the largest hornbills, famous for its impressive yellow and black casque on top of its massive bill. The sound of its powerful wingbeats can be heard from a distance.",
    habitat: "Mature evergreen and moist deciduous forests.",
    conservation_status: "VU"
  },
  {
    id: 8,
    name: "Ayeyarwady Bulbul",
    scientific_name: "Pycnonotus blanfordi",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/333795311/1800",
    photo_credit: "Aung Naing Lin/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/333795311",
    description: "A common and familiar bird in Burma, especially along the Irrawaddy River. It's a plain-looking bulbul with subtle streaks and is often found in gardens and urban areas.",
    habitat: "Open woodland, cultivation, scrub, and gardens.",
    conservation_status: "LC"
  },
  {
    id: 9,
    name: "Rufous-necked Hornbill",
    scientific_name: "Aceros nipalensis",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/600558431/1800",
    photo_credit: "Paul Cools/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/600558431",
    description: "A large hornbill with distinctive rufous neck coloration, found in the evergreen forests of Southeast Asia.",
    habitat: "Evergreen forests at various elevations.",
    conservation_status: "VU"
  },
  {
    id: 10,
    name: "Black-naped Monarch",
    scientific_name: "Hypothymis azurea",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/485658691/1800",
    photo_credit: "Aravind Amirtharaj/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/485658691",
    description: "The black-naped monarch is a small, insectivorous bird found in tropical southern Asia. Males are bright blue with black markings.",
    habitat: "Tropical and subtropical forests, forest edges, and gardens.",
    conservation_status: "LC"
  },
  {
    id: 11,
    name: "Oriental Darter",
    scientific_name: "Anhinga melanogaster",
    image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/488858031/1800",
    photo_credit: "Abhishek Das/Macaulay Library",
    photo_credit_url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/488858031",
    description: "The oriental darter is a water bird with a long neck, often called snakebird due to its swimming behavior with only the neck above water.",
    habitat: "Freshwater wetlands, lakes, and rivers.",
    conservation_status: "NT"
  }
]);
