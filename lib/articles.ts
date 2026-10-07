export type BiasBreakdown = {
  left: number;
  center: number;
  right: number;
};

export type Source = {
  name: string;
  bias: "left" | "center" | "right";
  factuality: "high" | "mixed" | "low";
  headline: string;
  publishedAt: string;
};

export type Article = {
  id: string;
  slug: string;
  category: string;
  headline: string;
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  publishedAt: string;
  readMinutes: number;
  sourcesCount: number;
  bias: BiasBreakdown;
  blindspot: "left" | "right" | null;
  factuality: "high" | "mixed" | "low";
  tags: string[];
  sources: Source[];
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const base: Omit<Article, "id" | "slug">[] = [
  {
    category: "Politics",
    headline:
      "Parliament stalemate deepens as opposition demands probe into surveillance leak",
    summary:
      "A standoff over an alleged surveillance programme has frozen both houses for a fifth consecutive day, with the opposition insisting on a joint parliamentary committee.",
    body: [
      "The winter session entered its fifth day of adjournment on Thursday, as opposition parties refused to drop their demand for a joint parliamentary committee to investigate the surveillance leak reported last week.",
      "Government benches dismissed the allegations as 'manufactured controversy', pointing to the lack of forensic verification by independent agencies. The opposition countered that at least four of its own members are on the leaked list, along with two sitting judges and a serving Lieutenant Governor.",
      "Procedural experts told The Feed that the deadlock is unlikely to break unless the Speaker intervenes with a time-bound ruling. Legislative business worth an estimated ₹1,900 crore remains stalled, including a crucial amendment to the Data Protection Act and the second reading of the Agricultural Marketing Reform Bill.",
      "Behind the scenes, a group of twelve first-term MPs from the ruling coalition have reportedly asked the parliamentary affairs minister to consider a limited inquiry, arguing that outright denial is beginning to carry a political cost in their constituencies. The minister has so far declined to respond publicly to the suggestion.",
      "Civil liberties groups have called for an open inquiry, warning that unaccountable surveillance erodes the foundation of representative democracy. 'This cannot be another report that is read and shelved,' said one legal scholar at a press conference in Delhi, citing the fate of the 2019 parliamentary standing committee report on digital privacy.",
      "The Supreme Court is scheduled to hear a related writ petition on Monday, filed by a coalition of retired bureaucrats and journalists seeking a court-monitored technical audit. Government counsel are expected to argue that national security exemptions preclude disclosure of the targeting criteria.",
      "Internationally, three European parliaments have invoked their own export-control reviews, after reporting suggested that the surveillance tooling in question was procured through an intermediary registered in Cyprus. The Ministry of External Affairs has declined to comment on the procurement chain.",
      "What happens next depends largely on whether the opposition can hold its coalition together through the weekend. Two regional parties have signalled openness to a 'shorter, more focused' inquiry format, which could offer the government an off-ramp without conceding the full JPC demand.",
    ],
    image: unsplash("1529107386315-e1a2ed48a620"),
    imageAlt: "Parliament building colonnade at dusk",
    publishedAt: "2026-10-05T07:12:00Z",
    readMinutes: 6,
    sourcesCount: 48,
    bias: { left: 62, center: 25, right: 13 },
    blindspot: "right",
    factuality: "high",
    tags: ["Surveillance", "Parliament", "Civil Liberties"],
    sources: [
      {
        name: "The Wire",
        bias: "left",
        factuality: "high",
        headline:
          "Opposition hardens stand, says surveillance probe cannot be stage-managed",
        publishedAt: "2026-10-05T06:40:00Z",
      },
      {
        name: "Reuters",
        bias: "center",
        factuality: "high",
        headline: "Indian parliament adjourned for fifth day amid spy row",
        publishedAt: "2026-10-05T05:55:00Z",
      },
      {
        name: "Republic",
        bias: "right",
        factuality: "mixed",
        headline:
          "Opposition stalls House again, government calls it political theatre",
        publishedAt: "2026-10-05T07:05:00Z",
      },
    ],
  },
  {
    category: "Climate",
    headline:
      "Himalayan glaciers lost nearly a tenth of ice volume in three decades, study finds",
    summary:
      "A new peer-reviewed survey across 2,400 glaciers warns that current emissions pathways will leave the Ganga basin with structurally lower summer flows by 2050.",
    body: [
      "The decade-long study, published in Nature Climate on Monday, combined satellite altimetry with on-ground mass balance data from 118 reference glaciers in the Hindu Kush Himalaya. It is the largest regional glacier survey ever compiled, drawing on contributions from research teams in India, Nepal, Bhutan, Pakistan and China.",
      "Researchers found that total ice volume declined by 9.2% between 1994 and 2024, with the sharpest losses concentrated in the central and eastern Himalaya. Of the 2,400 glaciers surveyed, 71% are now in a state of negative mass balance — meaning they are losing more mass each summer than they gain in winter snowfall.",
      "The pace of retreat has not been uniform. Glaciers below 5,500 metres have thinned nearly twice as fast as those above 6,000 metres, suggesting that the lower-elevation ice reservoirs the region's agriculture most depends on are the ones under the greatest stress.",
      "The implications for South Asia's water security are severe. Lead author Dr. Mira Devkota warned that 'without aggressive mitigation, the Ganga, Indus and Brahmaputra basins will face a step-change in summer flow regimes within a generation.' She stressed that this is not a far-future projection: the hydrological regime of the Indus is already measurably different from its 20th-century baseline.",
      "The study also flagged a sharp increase in glacial lake volumes, with 47 new lakes identified since the 2019 inventory and 19 flagged as having a high outburst flood risk. Three of those lie upstream of densely populated valleys in Sikkim and Himachal Pradesh.",
      "The Indian Meteorological Department is expected to update its monsoon forecasting models to incorporate the new glacier retreat baselines by early 2027. Officials indicated that the Central Water Commission's reservoir planning norms, last revised in 2012, will also be reopened for review.",
      "Climate finance experts argue that the findings strengthen the case for a dedicated South Asian cryosphere fund, an idea that has circulated at successive COPs but never attracted committed capital. 'We are now past the point where we can treat this as a research question,' Dr. Devkota said. 'It is a planning emergency.'",
      "The paper closes with a stark comparison: if emissions follow the current trajectory, the authors estimate that end-of-century ice volume in the Hindu Kush Himalaya could be less than half of what it was in 1994 — a loss, they note, 'without any modern precedent.'",
    ],
    image: unsplash("1483356281221-9b7d6cab4b9b"),
    imageAlt: "Snow covered Himalayan peak with glacier",
    publishedAt: "2026-10-05T04:30:00Z",
    readMinutes: 8,
    sourcesCount: 112,
    bias: { left: 42, center: 48, right: 10 },
    blindspot: null,
    factuality: "high",
    tags: ["Climate", "Glaciers", "Water Security"],
    sources: [
      {
        name: "Nature",
        bias: "center",
        factuality: "high",
        headline:
          "Three decades of Himalayan ice loss documented at unprecedented scale",
        publishedAt: "2026-10-05T04:00:00Z",
      },
      {
        name: "Newslaundry",
        bias: "left",
        factuality: "high",
        headline: "The glaciers are receding faster than policy can keep up",
        publishedAt: "2026-10-05T05:12:00Z",
      },
      {
        name: "Mint",
        bias: "center",
        factuality: "high",
        headline:
          "Himalayan ice volume down 9% since 1994, raises water security concerns",
        publishedAt: "2026-10-05T04:48:00Z",
      },
    ],
  },
  {
    category: "Economy",
    headline:
      "RBI holds repo rate steady, flags 'uneven' rural demand recovery",
    summary:
      "The monetary policy committee kept the benchmark rate at 5.75% in a 4-2 split vote, but the governor's statement struck a more cautious tone on consumption.",
    body: [
      "The Monetary Policy Committee of the Reserve Bank of India voted 4-2 to hold the repo rate at 5.75% on Thursday, with two members pressing for a 25 basis point cut. It is the narrowest split since the pandemic-era easing cycle and the first instance in two years of an open dissent on the easing side.",
      "In the accompanying statement, Governor Chatterjee acknowledged that rural demand recovery has been 'uneven and fragile', with FMCG volumes in tier-3 towns growing only 2.1% year on year. Two-wheeler registrations, often used as a proxy for rural confidence, remain 7% below their pre-2024 peak.",
      "Headline CPI inflation, meanwhile, has eased to 4.3%, bringing it comfortably within the committee's 2-6% tolerance band. Core inflation, stripped of food and fuel, printed at 3.9% — the lowest reading in 46 months.",
      "Markets reacted calmly, with the Nifty closing 0.3% higher and the ten-year government bond yield slipping four basis points to 6.82%. Analysts said the split vote signals that a cut is likely in the February meeting if inflation prints stay below 4.5% and if the kharif harvest arrival does not disrupt vegetable prices further.",
      "'The direction of travel is clear,' said the chief economist at a large private bank. 'The committee is holding today to buy credibility, not because the data demands it. February is a near-certainty unless something external breaks.'",
      "The central bank also announced a new liquidity window for small finance banks, aimed at supporting agricultural credit ahead of the Rabi sowing season. The window will be available at a 25 basis point concession to the standing marginal facility, capped at ₹25,000 crore in aggregate.",
      "On the regulatory side, the governor flagged growing concern about unsecured retail credit, which has grown at 24% year on year even as salaried wage growth has slowed to single digits. The RBI is expected to issue revised risk weights for personal loans and credit card receivables within the quarter.",
      "The committee's next meeting is scheduled for February 5-7. Governor Chatterjee declined to be drawn on whether he had tilted toward holding or cutting, saying only that 'the data over the next sixty days will matter more than any guidance I could offer today.'",
    ],
    image: unsplash("1526304640581-d334cdbbf45e"),
    imageAlt: "Financial district skyline at night",
    publishedAt: "2026-10-05T03:00:00Z",
    readMinutes: 5,
    sourcesCount: 73,
    bias: { left: 20, center: 60, right: 20 },
    blindspot: null,
    factuality: "high",
    tags: ["RBI", "Interest Rates", "Rural Economy"],
    sources: [
      {
        name: "Bloomberg",
        bias: "center",
        factuality: "high",
        headline:
          "RBI holds rates, hints at February cut as rural demand lags",
        publishedAt: "2026-10-05T03:20:00Z",
      },
      {
        name: "Business Standard",
        bias: "center",
        factuality: "high",
        headline: "MPC splits 4-2 on repo rate, dovish shift gathers pace",
        publishedAt: "2026-10-05T03:45:00Z",
      },
      {
        name: "The Wire",
        bias: "left",
        factuality: "high",
        headline:
          "RBI's cautious hold masks a deeper problem: wage-less consumption recovery",
        publishedAt: "2026-10-05T04:10:00Z",
      },
    ],
  },
  {
    category: "World",
    headline:
      "EU and Mercosur revive trade deal with new environmental side-letter",
    summary:
      "After six years of deadlock, negotiators have agreed on binding deforestation commitments that French and Irish officials say finally make the treaty politically ratifiable.",
    body: [
      "European Commission President and Mercosur rotating chair announced the breakthrough in Brasília on Thursday, framing it as 'a treaty for a different century'. The deal, first signed in principle in 2019, had been stalled for six years over environmental and agricultural objections from several European member states.",
      "The side-letter commits Mercosur signatories — Brazil, Argentina, Uruguay and Paraguay — to a deforestation moratorium verified by satellite monitoring, with tariff snapbacks if annual loss exceeds a 2020 baseline. Verification will be handled jointly by the EU Space Agency and Brazil's INPE, with publicly available data refreshed quarterly.",
      "A separate chapter on indigenous land rights, inserted at Argentina's insistence, requires signatories to publish annual reports on land demarcation progress. NGOs have cautiously welcomed the chapter but noted that the reporting mechanism lacks any enforcement teeth.",
      "French and Irish farmers' unions, which had led resistance to the earlier draft, said they would examine the fine print before responding, but major agricultural federations in both countries described the compromise as 'workable'. The deal includes transitional protections for European beef and poultry producers, with tariff-rate quotas phased in over seven years.",
      "German industrial exporters, who have long been the deal's most vocal champions in Europe, estimate that the agreement could add €4.5 billion in annual export value, concentrated in automotive, chemicals and machinery.",
      "On the South American side, the deal is expected to accelerate the integration of Mercosur's digital trade standards with European norms, a quiet but consequential win for small and medium exporters currently locked out of EU markets by compliance costs.",
      "Civil society groups across both blocs have offered mixed assessments. Climate NGOs welcomed the deforestation enforcement mechanism but warned that satellite monitoring alone will not capture degradation of forest quality. 'The forest can be legally standing and ecologically dead,' one researcher told The Feed.",
      "Ratification is expected to take at least 14 months across the EU's 27 parliaments. Hungary and Poland have already signalled that they will seek carve-outs for their own agricultural sectors, raising the possibility that the final ratified version differs materially from what was announced in Brasília.",
    ],
    image: unsplash("1526470498-741d26cd5316"),
    imageAlt: "Cargo ship stacked with containers",
    publishedAt: "2026-10-04T22:10:00Z",
    readMinutes: 7,
    sourcesCount: 56,
    bias: { left: 35, center: 50, right: 15 },
    blindspot: "right",
    factuality: "high",
    tags: ["Trade", "EU", "Deforestation"],
    sources: [
      {
        name: "AFP",
        bias: "center",
        factuality: "high",
        headline: "EU-Mercosur deal unlocked with deforestation side-letter",
        publishedAt: "2026-10-04T22:30:00Z",
      },
      {
        name: "Guardian",
        bias: "left",
        factuality: "high",
        headline:
          "A trade deal with teeth? Mercosur accepts deforestation snapback",
        publishedAt: "2026-10-04T23:05:00Z",
      },
      {
        name: "FT",
        bias: "center",
        factuality: "high",
        headline:
          "European farmers wait and see as EU-Mercosur treaty revived",
        publishedAt: "2026-10-04T23:50:00Z",
      },
    ],
  },
  {
    category: "Tech",
    headline:
      "India's AI mission launches shared compute cluster for public research",
    summary:
      "The 18,000-GPU facility near Hyderabad will offer subsidised time to universities and non-commercial labs, with a priority queue for projects in Indian languages.",
    body: [
      "The IndiaAI Mission inaugurated its first national compute cluster on Thursday, a facility that will host 18,000 GPUs across two phases and be partially subsidised for public research institutions. The first phase, going live immediately, brings 11,000 Nvidia H200 and B200 units online; the second phase, scheduled for Q2 2027, will add indigenous accelerators from a consortium of Bengaluru-based startups.",
      "The mission has committed to allocating at least 30% of total compute time to projects working on Indian languages, with a stated priority for low-resource scripts such as Santhali, Khasi and Bodo. Allocation decisions will be reviewed quarterly by a technical committee that includes representatives from the Central Institute of Indian Languages.",
      "A separate 15% block has been reserved for climate and public health workloads, including a long-running collaboration with the IMD on monsoon ensemble modelling.",
      "Private industry collaborations are permitted but capped at a cost-recovery rate, in a model officials described as 'closer to a national observatory than a commercial cloud'. Companies that wish to use the cluster must publish the trained model weights within 18 months of project completion, unless an exemption is granted on narrow national security grounds.",
      "The pricing structure has drawn particular interest from academic researchers, who have long complained that commercial cloud GPU rates make large-scale training effectively impossible on an Indian faculty salary.",
      "Researchers welcomed the move but questioned whether the governance board, currently dominated by central ministries, would allow genuinely independent allocation decisions. The board currently seats three ministry nominees, two industry representatives, and only one working academic.",
      "'The infrastructure is world-class,' said one professor at IIT Madras who is on the allocation review committee. 'What we need to protect now is the independence of the process. The next six months of track record will matter more than any policy document.'",
      "The facility will also host a residency programme for international collaborators, with the first cohort of 24 researchers drawn from universities in Kenya, Indonesia, Brazil and Vietnam — a soft-power signal that officials privately acknowledge is central to the mission's framing.",
    ],
    image: unsplash("1518770660439-4636190af475"),
    imageAlt: "Data center with illuminated server racks",
    publishedAt: "2026-10-04T18:00:00Z",
    readMinutes: 6,
    sourcesCount: 29,
    bias: { left: 25, center: 55, right: 20 },
    blindspot: null,
    factuality: "high",
    tags: ["AI", "Research", "Compute"],
    sources: [
      {
        name: "Mint",
        bias: "center",
        factuality: "high",
        headline:
          "IndiaAI opens Hyderabad GPU cluster, 30% reserved for Indian languages",
        publishedAt: "2026-10-04T18:30:00Z",
      },
      {
        name: "The Hindu",
        bias: "center",
        factuality: "high",
        headline:
          "Public GPU cluster inaugurated, subsidised access for universities",
        publishedAt: "2026-10-04T19:00:00Z",
      },
      {
        name: "Newslaundry",
        bias: "left",
        factuality: "high",
        headline:
          "A national AI commons? Only if the governance board allows it",
        publishedAt: "2026-10-04T20:10:00Z",
      },
    ],
  },
  {
    category: "Media",
    headline:
      "Press freedom index drops India to 165th, government disputes methodology",
    summary:
      "RSF cited a pattern of legal harassment and the use of the UAPA against reporters covering communal violence, dropping the country three positions year on year.",
    body: [
      "Reporters Without Borders published its 2026 World Press Freedom Index on Thursday, placing India at 165th out of 180 countries, down from 162nd last year. The slide is the fourth consecutive annual decline and places India below Pakistan, Afghanistan and Myanmar on the composite score.",
      "The organisation cited a documented pattern of legal harassment against independent reporters, with 32 journalists facing charges under the Unlawful Activities (Prevention) Act in the past year. Fourteen of those cases involve reporting on communal violence; another nine stem from investigations into state-level land acquisition deals.",
      "The index also tracks a steep decline in the operating environment for non-English-language outlets, with Hindi, Tamil and Marathi investigative publications reporting advertiser pullouts after critical coverage of ruling-party-aligned businesses.",
      "The Ministry of Information and Broadcasting rejected the ranking, calling the methodology 'opaque and ideologically driven'. The ministry pointed to the growth in the number of registered publications — now exceeding 150,000 — as evidence of a free press and accused RSF of relying on a 'narrow sample' of English-language outlets with 'documented political leanings'.",
      "RSF, in response, published its full methodology and country questionnaire for the first time, in what the organisation described as a direct answer to the ministry's criticism. The scoring, it said, draws on responses from 320 Indian journalists, including 211 from regional-language publications.",
      "The Editors Guild of India welcomed the report and called for a legislative shield for reporters covering communal violence, modelled on the shield laws adopted in Sri Lanka in 2024.",
      "'The question is no longer whether there is a problem,' the Guild's statement read. 'The question is whether there is still institutional willingness inside the state to address it.'",
      "The report comes two weeks before the Supreme Court is scheduled to hear a batch of writ petitions filed by journalists seeking to have UAPA charges against them quashed. The outcome of those hearings will likely shape the operating environment for independent reporting through the remainder of 2027.",
    ],
    image: unsplash("1504711434969-e33886168f5c"),
    imageAlt: "Newspapers piled on a wooden table",
    publishedAt: "2026-10-04T14:00:00Z",
    readMinutes: 5,
    sourcesCount: 41,
    bias: { left: 68, center: 22, right: 10 },
    blindspot: "right",
    factuality: "high",
    tags: ["Press Freedom", "UAPA", "Journalism"],
    sources: [
      {
        name: "RSF",
        bias: "center",
        factuality: "high",
        headline: "India ranks 165 on 2026 World Press Freedom Index",
        publishedAt: "2026-10-04T13:00:00Z",
      },
      {
        name: "The Wire",
        bias: "left",
        factuality: "high",
        headline:
          "RSF index: India slides again as UAPA cases against reporters mount",
        publishedAt: "2026-10-04T14:20:00Z",
      },
      {
        name: "Newslaundry",
        bias: "left",
        factuality: "high",
        headline:
          "The press freedom index drop is a diagnosis, not an accusation",
        publishedAt: "2026-10-04T15:40:00Z",
      },
    ],
  },
  {
    category: "Sports",
    headline:
      "Underdog Chennai edges Mumbai in final-ball thriller to lift domestic T20 title",
    summary:
      "A 19-year-old left-arm wrist spinner took three in the final over, in a chase that will be remembered for its temperament more than its stroke play.",
    body: [
      "In a result few neutrals had predicted, Chennai lifted the domestic T20 title with a two-run win over Mumbai at the M. Chinnaswamy Stadium on Thursday. The margin — the narrowest in a domestic T20 final in 11 years — belied a chase that had looked, for most of the second innings, like a formality for Mumbai.",
      "The match was decided by a final over from debutant left-arm wrist spinner K. Senthil, who conceded only four runs and took three wickets, including the dangerous Rohan Pandey off a googly that pitched outside off and turned sharply. Senthil had been promoted from the state Under-25 side only six weeks earlier, after an injury to Chennai's first-choice spinner.",
      "Chennai had been bowled out for 142 earlier in the day, a total most analysts considered 20 runs light on a batting-friendly surface. Opener M. Sudharsan top-scored with 46 off 34; the next highest contribution was 19 from the number six.",
      "Mumbai's chase appeared comfortable at 118/3 off 16 overs, with set batters Pandey and R. Shetty in the middle. Captain A. Deshpande's decision to hand the final over to a debutant drew visible surprise from the dugout and the commentary box alike.",
      "'I just trusted what I had seen in training,' Deshpande said at the post-match presentation. 'He bowls what the batter does not expect. On a night like this, that is the whole art.'",
      "Senthil, speaking later, credited his state-level coach for the googly that dismissed Pandey. 'I bowled 47 of those in the nets this week,' he said. 'One of them had to count.'",
      "The win marks Chennai's first domestic T20 title since 2019 and will likely accelerate Senthil's path into national selection conversations. The chief selector, present at the match, declined to comment on specific names but told reporters that 'performances in pressure moments are what we are looking at'.",
      "For Mumbai, the loss ends an otherwise dominant season in which they finished top of the group stage and chased down 180-plus totals four times. The post-mortem will likely focus on the top-order collapse that let the game drift into a last-over scenario in the first place.",
    ],
    image: unsplash("1551958219-acbc608c6377"),
    imageAlt: "Floodlit cricket stadium with large crowd",
    publishedAt: "2026-10-04T19:30:00Z",
    readMinutes: 4,
    sourcesCount: 88,
    bias: { left: 30, center: 55, right: 15 },
    blindspot: null,
    factuality: "high",
    tags: ["Cricket", "T20", "Domestic"],
    sources: [
      {
        name: "ESPNCricinfo",
        bias: "center",
        factuality: "high",
        headline: "Senthil's three-over spell delivers Chennai title",
        publishedAt: "2026-10-04T19:50:00Z",
      },
      {
        name: "Sportstar",
        bias: "center",
        factuality: "high",
        headline:
          "A 19-year-old spinner, a final over, a title: Chennai's night",
        publishedAt: "2026-10-04T20:30:00Z",
      },
      {
        name: "Times of India",
        bias: "center",
        factuality: "mixed",
        headline: "Chennai pull off stunner, beat Mumbai by two runs",
        publishedAt: "2026-10-04T21:00:00Z",
      },
    ],
  },
  {
    category: "Health",
    headline:
      "ICMR trials show single-shot dengue vaccine effective across all four serotypes",
    summary:
      "Phase 3 results published in The Lancet point to 78% efficacy against severe disease, with the strongest signal in children aged 6-12.",
    body: [
      "The Indian Council of Medical Research's phase 3 trial of a locally developed dengue vaccine reported 78% efficacy against severe disease across all four serotypes. The headline number places the candidate ahead of the two internationally licensed dengue vaccines currently in the WHO prequalification pipeline.",
      "Published in The Lancet on Thursday, the trial enrolled 22,000 participants across 11 states over a four-year follow-up window. Sites were deliberately weighted toward high-transmission districts in Kerala, Tamil Nadu, West Bengal and Odisha, to maximise statistical power on severe-disease endpoints.",
      "Crucially, the trial reported no significant evidence of antibody-dependent enhancement — the safety signal that complicated the global rollout of earlier dengue vaccines and ultimately restricted their use to seropositive individuals only.",
      "Efficacy was highest in children aged 6-12, where severe dengue incidence fell by 86% among vaccinated participants. The vaccine is administered as a single-shot subcutaneous dose, a logistical advantage over the two- and three-dose regimens of comparable candidates.",
      "Dr. Sumitra Pillai, principal investigator at the National Institute of Virology, said the single-shot format was 'not a compromise, but a design choice' arrived at after an interim analysis showed diminishing marginal efficacy from a booster dose.",
      "The vaccine is produced on a platform developed jointly by a Hyderabad-based manufacturer and the Translational Health Science and Technology Institute, with a stated capacity of 120 million doses annually by end-2027.",
      "Regulators are expected to issue emergency use authorisation within the quarter, with public rollout to begin in the next monsoon cycle. Early access will likely be prioritised for the age 6-12 cohort in states with the highest 2026 case loads, following a tiered allocation framework modelled on the 2021 COVID rollout.",
      "Public health researchers have urged the government to pair the rollout with a sustained vector-control campaign, warning that vaccine uptake alone, without parallel source-reduction efforts, could flatten but not break the transmission cycle.",
    ],
    image: unsplash("1584362917165-526a968579e8"),
    imageAlt: "Vaccine vials under laboratory lighting",
    publishedAt: "2026-10-04T11:00:00Z",
    readMinutes: 6,
    sourcesCount: 64,
    bias: { left: 30, center: 60, right: 10 },
    blindspot: null,
    factuality: "high",
    tags: ["Vaccine", "Dengue", "Public Health"],
    sources: [
      {
        name: "The Lancet",
        bias: "center",
        factuality: "high",
        headline:
          "Single-shot tetravalent dengue vaccine shows 78% efficacy in phase 3",
        publishedAt: "2026-10-04T10:00:00Z",
      },
      {
        name: "The Hindu",
        bias: "center",
        factuality: "high",
        headline:
          "ICMR dengue vaccine clears phase 3 with strong efficacy in children",
        publishedAt: "2026-10-04T11:30:00Z",
      },
      {
        name: "Scroll",
        bias: "left",
        factuality: "high",
        headline: "An Indian-made dengue vaccine clears its biggest test",
        publishedAt: "2026-10-04T12:15:00Z",
      },
    ],
  },
];

const seed = base.map((a, i) => ({
  ...a,
  id: `a-${i + 1}`,
  slug: a.headline
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 70),
}));

export const articles: Article[] = seed;

export function getArticle(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getPage(cursor: number, pageSize = 6) {
  const start = cursor * pageSize;
  const slice: Article[] = [];
  for (let i = 0; i < pageSize; i++) {
    const base = articles[(start + i) % articles.length];
    slice.push({ ...base, id: `${base.id}-p${cursor}-${i}` });
  }
  return {
    items: slice,
    nextCursor: cursor + 1,
  };
}
