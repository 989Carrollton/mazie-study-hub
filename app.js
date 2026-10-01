(function () {
  "use strict";

  const PASSWORD = "mazie6";
  const GATE_KEY = "mazie_hub_unlocked";

  // ——— Units (data-driven; add more subjects here later) ———
  const UNITS = [
    {
      id: "earth-science",
      title: "Earth Science Lab",
      emoji: "🌍",
      subtitle: "6th Grade · Test 9/15/2026 · Earth systems, interior, minerals & rocks",
      welcome: "Hey Mazie! Pick a mode to get ready for your Earth Science test. You've got this! 💪",
      quizTitle: "Earth Science Quiz",
      readyMsg: "You're ready for that Earth Science test!"
    },
    {
      id: "ela-vocab",
      title: "ELA Vocabulary",
      emoji: "📚",
      subtitle: "6th Grade · Test 9/18/2026 · Vocabulary",
      welcome: "Hey Mazie! Study these vocab words for your ELA test. Flashcards + quiz — you've got this! 💪",
      quizTitle: "ELA Vocab Quiz",
      readyMsg: "You're ready for that ELA vocab test!"
    },
    {
      id: "religion",
      title: "Religion · Ch. 3–4",
      emoji: "✝️",
      subtitle: "6th Grade · Test 9/18/2026 · Creation, sin, covenant & Gospels",
      welcome: "Hey Mazie! Study Creation, sin, covenant & the Gospels for your Religion test. You've got this! 💪",
      quizTitle: "Religion Quiz",
      readyMsg: "You're ready for that Religion test!"
    },
    {
      id: "hoot",
      title: "ELA · Hoot",
      emoji: "🦉",
      subtitle: "6th Grade · Test 10/1/2026 · Hoot by Carl Hiaasen",
      welcome: "Hey Mazie! Study Hoot by Carl Hiaasen — characters, plot, and big ideas. Every quiz round mixes up the questions! 💪",
      quizTitle: "Hoot Quiz",
      readyMsg: "You're ready for that Hoot test!",
      quizPool: true,      // draw a random subset from the question pool each round
      quizPerRound: 15
    },
    {
      id: "religion-ch5",
      title: "Religion · Ch. 5",
      emoji: "📖",
      subtitle: "6th Grade · Test 10/1/2026 · The Patriarchs: Abraham to Joseph",
      welcome: "Hey Mazie! Study the Patriarchs — Abraham, Isaac, Jacob & Joseph — for your Religion test. Pink-highlight items are marked ⭐. Every quiz round mixes up the questions! 💪",
      quizTitle: "Patriarchs Quiz",
      readyMsg: "You're ready for that Religion test!",
      quizPool: true,
      quizPerRound: 15
    }
  ];

  let currentUnit = null;

  // ——— Per-unit content (sections / flashcards / quiz) ———
  const UNIT_CONTENT = {
    "earth-science": {
      sections: [
    {
      id: "intro",
      title: "What is Earth Science?",
      short: "1. Intro",
      html: `
        <h2>What is Earth Science?</h2>
        <p>Earth Science is the <strong>scientific study of Earth and the universe around it</strong>. It helps us understand volcanoes, weather, resources, oceans, and natural hazards.</p>
        <p>Long ago, people used careful <strong>observation</strong> — China recorded earthquakes (780 B.C.), Greeks cataloged rocks, and the Maya tracked the sky. Later, tools like the <strong>microscope</strong> and <strong>telescope</strong> helped scientists see tiny and distant things. That work grew into the field we call Earth Science.</p>
        <h3>Four main areas</h3>
        <ul>
          <li><strong>Geology</strong> — study of the solid Earth (surface + interior). Often called the “main” Earth Science. Processes, structure, and history.</li>
          <li><strong>Meteorology</strong> — study of the atmosphere and how it makes weather and climate. (Meteorologists do <em>not</em> study meteors!)</li>
          <li><strong>Astronomy</strong> — study of the universe. Included because space objects affect Earth (moon → tides, sun → weather, asteroids → danger).</li>
          <li><strong>Oceanography</strong> — study of Earth’s oceans: composition, how water moves, and how oceans change.</li>
        </ul>
        <h3>Geology specialists</h3>
        <ul>
          <li><strong>Mineralogist</strong> — studies minerals</li>
          <li><strong>Petrologist</strong> — studies rocks and how they form</li>
          <li><strong>Volcanologist</strong> — studies volcanoes</li>
          <li><strong>Seismologist</strong> — studies earthquakes</li>
          <li><strong>Paleontologist</strong> — studies fossils</li>
        </ul>
        <div class="callout">Earth scientists help search for energy, forecast hazards like earthquakes, and monitor ocean temperatures, currents, and life.</div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Earth Science</strong> — Study of Earth and the universe around it</div>
          <div class="term-row"><strong>Geology</strong> — Study of the solid Earth</div>
          <div class="term-row"><strong>Meteorology</strong> — Atmosphere, weather & climate (not meteors!)</div>
          <div class="term-row"><strong>Astronomy</strong> — Study of the universe / space</div>
          <div class="term-row"><strong>Oceanography</strong> — Study of Earth’s oceans</div>
        </div>
      `
    },
    {
      id: "spheres",
      title: "Earth's System (4 Spheres)",
      short: "2. Spheres",
      html: `
        <h2>Earth's System — Four Spheres</h2>
        <p>A <strong>system</strong> is a group of related parts that interact to form a complex whole. Earth System Science studies Earth as interacting “parts” that exchange <strong>matter and energy</strong>.</p>
        <div class="sphere-grid">
          <div class="sphere-pill"><strong>Atmosphere</strong> Outermost — gases (mainly N₂ & O₂) around Earth; air for life; warms/blankets Earth. <em>Atmo = gas</em></div>
          <div class="sphere-pill"><strong>Biosphere</strong> All living things; where life exists. <em>Bio = life</em></div>
          <div class="sphere-pill"><strong>Geosphere</strong> Largest system — soil, rocks, minerals, continents, ocean floor, and interior. <em>Geo = Earth</em></div>
          <div class="sphere-pill"><strong>Hydrosphere</strong> All water on/under Earth and liquid water in the air. ~97% is salty ocean. <em>Hydro = water</em></div>
        </div>
        <h3>Spheres interact</h3>
        <p>A change in one sphere affects the others — sometimes in helpful ways, sometimes in harmful ways.</p>
        <ul>
          <li><strong>Positive example:</strong> Rain on plants = hydrosphere + biosphere working together.</li>
          <li><strong>2011 Japan tsunami:</strong> Tectonic plates (geosphere) → tidal wave (hydrosphere) → damage to land/people (geosphere/biosphere) → nuclear material into water/air (hydrosphere/atmosphere).</li>
          <li>A volcano erupting CO₂: geosphere causes a change that affects the atmosphere.</li>
        </ul>
        <h3>Practice — which spheres?</h3>
        <div class="practice-box">
          <ul>
            <li>Ocean currents & climates → <strong>H + A</strong></li>
            <li>Plant roots breaking rock → <strong>B + G</strong></li>
            <li>Climber cooled by a breeze → <strong>B + G + A</strong></li>
            <li>Water dissolving minerals forming caves → <strong>H + G</strong></li>
          </ul>
        </div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>System</strong> — Related parts that interact as a complex whole</div>
          <div class="term-row"><strong>Geosphere</strong> — Solid Earth (largest system)</div>
          <div class="term-row"><strong>Atmosphere</strong> — Layer of gases around Earth</div>
          <div class="term-row"><strong>Hydrosphere</strong> — All of Earth’s water (~97% ocean)</div>
          <div class="term-row"><strong>Biosphere</strong> — All living things</div>
        </div>
      `
    },
    {
      id: "interior",
      title: "Interior of the Earth",
      short: "3. Interior",
      html: `
        <h2>Interior of the Earth</h2>
        <p><strong>Learning target:</strong> Name and describe Earth’s interior layers.</p>
        <div class="callout">Scientists can’t dig deep enough — deepest mines/wells barely scratch the crust (deepest hole ~7.5 miles). They study the interior mainly using <strong>seismic waves</strong> from earthquakes. Waves change <strong>speed and direction</strong> depending on the material: slower through hot melted rock, faster through cold solid rock.</div>
        <p>Temperature and pressure both <strong>increase with depth</strong>. Deep rocks are denser because pressure squeezes them.</p>
        <h3>Layers (shallow → deep)</h3>
        <ul>
          <li><strong>Crust</strong> — Top, <em>thinnest</em>, and <em>coolest</em> layer; holds minerals/resources. Two kinds: <strong>continental</strong> (continents) and <strong>oceanic</strong> (seabed). Only layer humans have explored.</li>
          <li><strong>Mantle</strong> — <em>Thickest</em> layer; hot, flowing rocky material (magma). Moves slowly “like melted chocolate.” Linked to earthquakes & volcanoes. Upper mantle is more solid; lower mantle flows more easily. Humans have never explored it.</li>
          <li><strong>Outer core</strong> — Layer of <strong>liquid metals (nickel & iron)</strong> so hot it stays melted. Flowing metal creates Earth’s <strong>magnetic field</strong> — an invisible shield against harmful solar radiation.</li>
          <li><strong>Inner core</strong> — Solid metal center (iron & nickel). Hotter than the Sun but stays <strong>solid</strong> because of incredible <strong>pressure</strong>.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Seismic waves</strong> — Energy waves that reveal layers by changing speed/direction</div>
          <div class="term-row"><strong>Crust</strong> — Thin outer solid layer (continental + oceanic)</div>
          <div class="term-row"><strong>Mantle</strong> — Thickest rocky layer; magma</div>
          <div class="term-row"><strong>Outer core</strong> — Liquid Ni-Fe; makes magnetic field</div>
          <div class="term-row"><strong>Inner core</strong> — Solid metal center; solid from pressure</div>
        </div>
      `
    },
    {
      id: "minerals",
      title: "Minerals",
      short: "4. Minerals",
      html: `
        <h2>What are Minerals?</h2>
        <p>A <strong>mineral</strong> is a <strong>natural, inorganic solid</strong> with a <strong>unique chemical makeup</strong> and an <strong>orderly crystal structure</strong>.</p>
        <h3>Four questions — ALL must be YES</h3>
        <ul>
          <li>Is it inorganic? (not from living things)</li>
          <li>Does it occur naturally?</li>
          <li>Is it a solid with crystals?</li>
          <li>Does it have a definite chemical composition?</li>
        </ul>
        <div class="callout"><strong>Coal is NOT a mineral</strong> — made of once-living things. Brass, steel, and cubic zirconia are manufactured → not minerals. Iron, quartz, and diamond occur in nature and can be minerals.</div>
        <p>There are 3000+ known minerals, but fewer than <strong>20 rock-forming minerals</strong> make up most of Earth’s crust rocks.</p>
        <h3>Properties used to identify minerals</h3>
        <ul>
          <li><strong>Color</strong> — Easy to see, but <em>unreliable</em> (same mineral can be many colors).</li>
          <li><strong>Streak</strong> — Powder color on a ceramic tile.</li>
          <li><strong>Luster</strong> — How light reflects (metallic, glassy, waxy, pearly…).</li>
          <li><strong>Hardness</strong> — Resist scratching; Mohs scale <strong>1 (soft) → 10 (hard)</strong>.</li>
          <li><strong>Cleavage</strong> — Breaks along smooth, flat surfaces.</li>
          <li><strong>Fracture</strong> — Breaks in irregular or curved shapes.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Mineral</strong> — Natural, inorganic solid; unique chemistry; crystal structure</div>
          <div class="term-row"><strong>Inorganic</strong> — Not made of living things or their remains</div>
          <div class="term-row"><strong>Streak</strong> — Color of the mineral in powder form</div>
          <div class="term-row"><strong>Luster</strong> — How light reflects off a mineral</div>
          <div class="term-row"><strong>Hardness</strong> — How well it resists scratching (1–10)</div>
          <div class="term-row"><strong>Cleavage / Fracture</strong> — Smooth flat breaks vs irregular breaks</div>
        </div>
      `
    },
    {
      id: "rocks",
      title: "Types of Rocks",
      short: "5. Rocks",
      html: `
        <h2>Types of Rocks</h2>
        <p>A <strong>rock</strong> is naturally formed material that makes up solid Earth, made of minerals. Rocks are grouped by <strong>how they form</strong> into three types.</p>
        <h3>Igneous</h3>
        <p>Form when molten rock cools and hardens. <strong>Magma</strong> is below the surface (rises because it’s less dense). <strong>Lava</strong> is magma that erupts onto the surface.</p>
        <ul>
          <li><strong>Intrusive</strong> — Cools slowly underground (thousands of years) → <em>large crystals</em> / coarse-grained.</li>
          <li><strong>Extrusive</strong> — Cools fast on the surface (seconds to months) → <em>tiny or no crystals</em>. Examples: <strong>obsidian</strong> (glass-like), <strong>pumice</strong> (holey, floats!).</li>
        </ul>
        <h3>Sedimentary</h3>
        <p><strong>Sediments</strong> (sand, mud, shells, bits of rock) settle in layers (often lakes/oceans), get deposited, then <strong>compact</strong> and harden over millions of years.</p>
        <ul>
          <li><strong>Sandstone</strong> — compressed sand grains (mainly quartz)</li>
          <li><strong>Limestone</strong> — powdery when processed; used in toothpaste and glass</li>
        </ul>
        <h3>Metamorphic</h3>
        <p>Changed by <strong>heat and pressure</strong> (<em>morph</em> = “to change”). Can form from any igneous or sedimentary rock — without necessarily melting.</p>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Igneous</strong> — From cooling magma/lava</div>
          <div class="term-row"><strong>Intrusive / Extrusive</strong> — Slow underground vs fast on surface</div>
          <div class="term-row"><strong>Sedimentary</strong> — Layered sediments compacted</div>
          <div class="term-row"><strong>Metamorphic</strong> — Changed by heat & pressure</div>
        </div>
      `
    },
    {
      id: "cycle",
      title: "Rock Cycle",
      short: "6. Rock Cycle",
      html: `
        <h2>The Rock Cycle</h2>
        <p>Any rock type can become any other. The rock cycle has <strong>no beginning or end</strong>. It can take hundreds to millions of years. A rock <strong>doesn’t have to pass through every stage</strong>.</p>
        <h3>Example path</h3>
        <p>Igneous → weathering/erosion → sediments → compact → sedimentary → heat/pressure → metamorphic → melt → magma → cool → igneous again!</p>
        <h3>Key processes</h3>
        <ul>
          <li><strong>Cool & harden</strong> — magma/lava → igneous</li>
          <li><strong>Weathering & erosion</strong> — rock → sediments</li>
          <li><strong>Compacting</strong> — sediments → sedimentary</li>
          <li><strong>Heat & pressure</strong> — rock → metamorphic</li>
          <li><strong>Melting</strong> — rock → magma</li>
        </ul>
        <div class="callout">Much of the continental crust has likely passed through the rock cycle many times!</div>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Rock cycle</strong> — Continuous process; rocks change type; no start/end</div>
          <div class="term-row"><strong>Weathering & erosion</strong> — Break rock into sediments</div>
          <div class="term-row"><strong>Melting</strong> — Turns rock into magma</div>
        </div>
      `
    }
  ],
      flashcards: [
    { term: "Earth Science", def: "The study of Earth and of the universe around it." },
    { term: "Geology", def: "Study of the solid Earth — processes, structure, and history (surface + interior)." },
    { term: "Meteorology", def: "Study of the atmosphere and how it determines weather and climate. (Not meteors!)" },
    { term: "Astronomy", def: "Study of the universe; included because space objects affect Earth (tides, weather, asteroids)." },
    { term: "Oceanography", def: "Study of Earth’s oceans — composition, how water moves, and how oceans change." },
    { term: "Mineralogist", def: "Geologist who studies minerals." },
    { term: "Petrologist", def: "Geologist who studies rocks and how they form." },
    { term: "Volcanologist", def: "Geologist who studies volcanoes." },
    { term: "Seismologist", def: "Geologist who studies earthquakes." },
    { term: "Paleontologist", def: "Geologist who studies fossils." },
    { term: "System", def: "A group of many related parts that interact to form a complex whole." },
    { term: "Atmosphere", def: "The layer of gases (air) surrounding Earth — mainly nitrogen and oxygen." },
    { term: "Biosphere", def: "All living things on Earth; parts of Earth where life exists." },
    { term: "Geosphere", def: "The solid part of Earth — rocks, land, soil, minerals, and interior. Largest Earth system." },
    { term: "Hydrosphere", def: "All of Earth’s water. About 97% is salty ocean water." },
    { term: "Mineral", def: "A natural, inorganic solid with a unique chemical makeup and orderly crystal structure." },
    { term: "Inorganic", def: "Not made of living things or their remains." },
    { term: "Streak", def: "The color of a mineral in powder form (tested on ceramic tile)." },
    { term: "Luster", def: "How light reflects off a mineral (metallic, glassy, etc.)." },
    { term: "Hardness", def: "How well a mineral resists scratching (scale 1 soft → 10 hard)." },
    { term: "Cleavage", def: "When a mineral breaks along smooth, flat surfaces." },
    { term: "Fracture", def: "When a mineral breaks in irregular or curved shapes." },
    { term: "Igneous rock", def: "Rock formed when magma or lava cools and hardens." },
    { term: "Magma", def: "Molten rock beneath Earth’s surface." },
    { term: "Lava", def: "Magma that has reached Earth’s surface." },
    { term: "Intrusive igneous", def: "Igneous rock that cooled slowly underground → large crystals." },
    { term: "Extrusive igneous", def: "Igneous rock that cooled quickly on the surface → tiny or no crystals." },
    { term: "Obsidian", def: "Extrusive igneous rock that looks like glass." },
    { term: "Pumice", def: "Extrusive igneous rock full of holes; it can float!" },
    { term: "Sedimentary rock", def: "Rock formed when sediments are compacted in layers over a long time." },
    { term: "Metamorphic rock", def: "Rock changed by heat and pressure (morph = to change)." },
    { term: "Rock cycle", def: "The continuous process by which rocks change from one type to another — no beginning or end." },
    { term: "Crust", def: "Earth’s thin outer solid layer (coolest). Continental + oceanic. Only layer humans have explored." },
    { term: "Mantle", def: "Thickest rocky layer beneath the crust; hot flowing magma-like rock." },
    { term: "Outer core", def: "Liquid metal (nickel & iron) layer; motion creates Earth’s magnetic field." },
    { term: "Inner core", def: "Solid metal center of Earth. Hotter than the Sun but solid due to extreme pressure." },
    { term: "Seismic waves", def: "Energy waves from earthquakes that change speed/direction in different materials — how we “see” Earth’s layers." }
  ],
      quiz: [
    {
      type: "mc",
      q: "What is Earth Science?",
      choices: [
        "Only the study of rocks",
        "The study of Earth and the universe around it",
        "The study of plants and animals only",
        "The study of meteors"
      ],
      answer: 1,
      explain: "Earth Science is the scientific study of Earth and the universe around it — volcanoes, weather, oceans, space effects, and more."
    },
    {
      type: "ms",
      q: "Which are the four main areas of Earth Science? (Select all that apply)",
      choices: ["Geology", "Meteorology", "Astronomy", "Oceanography", "Astrology"],
      answer: [0, 1, 2, 3],
      explain: "The four areas are geology, meteorology, astronomy, and oceanography. Astrology is not a science!"
    },
    {
      type: "mc",
      q: "Do meteorologists study meteors?",
      choices: ["Yes — that’s why it’s called meteorology", "No — they study the atmosphere, weather, and climate", "Only during meteor showers", "Yes, and also stars"],
      answer: 1,
      explain: "Meteorologists study the atmosphere and how it determines weather and climate — not meteors!"
    },
    {
      type: "mc",
      q: "Why is astronomy part of Earth Science?",
      choices: [
        "Because Earth is the only planet",
        "Space objects affect Earth (moon → tides, sun → weather, asteroids)",
        "Astronomers dig in the crust",
        "It isn’t — astronomy is separate"
      ],
      answer: 1,
      explain: "Space objects affect Earth: the moon causes tides, the sun drives weather, and asteroids can cause devastation."
    },
    {
      type: "mc",
      q: "A seismologist studies…",
      choices: ["Volcanoes", "Fossils", "Earthquakes", "Minerals"],
      answer: 2,
      explain: "A seismologist is a geologist who studies earthquakes. (Volcanologist → volcanoes; paleontologist → fossils; mineralogist → minerals.)"
    },
    {
      type: "mc",
      q: "Which is the largest Earth system (sphere)?",
      choices: ["Atmosphere", "Biosphere", "Hydrosphere", "Geosphere"],
      answer: 3,
      explain: "The geosphere is the largest — Earth itself: rocks, soil, minerals, continents, ocean floor, and interior."
    },
    {
      type: "mc",
      q: "About what percent of the hydrosphere is salty ocean water?",
      choices: ["About 50%", "About 75%", "About 97%", "About 10%"],
      answer: 2,
      explain: "About 97% of Earth’s water (the hydrosphere) is salty ocean water."
    },
    {
      type: "ms",
      q: "Situation 1: Ocean currents influence climates. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [0, 3],
      explain: "Ocean currents (hydrosphere) and climates (atmosphere) → H + A."
    },
    {
      type: "ms",
      q: "Situation 2: Plant roots crack and break rock. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [1, 2],
      explain: "Living plant roots (biosphere) breaking rock (geosphere) → B + G. Not water or air!"
    },
    {
      type: "ms",
      q: "Situation 3: A climber on a mountain is cooled by a breeze. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [0, 1, 2],
      explain: "Person (biosphere) on mountain (geosphere) cooled by breeze (atmosphere) → B + G + A."
    },
    {
      type: "ms",
      q: "Situation 4: Water dissolves minerals and forms caves. Which spheres? (Select all)",
      choices: ["Atmosphere (A)", "Biosphere (B)", "Geosphere (G)", "Hydrosphere (H)"],
      answer: [2, 3],
      explain: "Water (hydrosphere) dissolving minerals in rock (geosphere) → H + G. Scientists study caves!"
    },
    {
      type: "mc",
      q: "How do scientists mainly learn about Earth’s deep interior?",
      choices: [
        "Digging mines all the way to the mantle",
        "Using seismic waves from earthquakes",
        "Sending robots to the inner core",
        "Looking through very powerful telescopes"
      ],
      answer: 1,
      explain: "We can’t dig deep enough (deepest hole ~7.5 miles). Seismic waves change speed and direction in different materials, revealing the layers."
    },
    {
      type: "mc",
      q: "Order Earth’s layers from shallow (outside) to deep (center):",
      choices: [
        "Mantle → Crust → Inner core → Outer core",
        "Crust → Mantle → Outer core → Inner core",
        "Crust → Outer core → Mantle → Inner core",
        "Inner core → Outer core → Mantle → Crust"
      ],
      answer: 1,
      explain: "Shallow → deep: Crust → Mantle → Outer core → Inner core."
    },
    {
      type: "mc",
      q: "Which layer is the thickest?",
      choices: ["Crust", "Mantle", "Outer core", "Inner core"],
      answer: 1,
      explain: "The mantle is the thickest layer. The crust is the thinnest."
    },
    {
      type: "mc",
      q: "The outer core is made of ______ and creates Earth’s ______.",
      choices: [
        "Solid rock; gravity",
        "Liquid nickel & iron; magnetic field",
        "Gas; atmosphere",
        "Solid iron only; ocean currents"
      ],
      answer: 1,
      explain: "The outer core is liquid nickel and iron. Its flowing metal creates Earth’s magnetic field — a shield against harmful solar radiation."
    },
    {
      type: "mc",
      q: "Why is the inner core solid even though it’s hotter than the Sun?",
      choices: [
        "Because it’s made of ice",
        "Because of extreme pressure",
        "Because it’s the coolest layer",
        "Because water freezes it"
      ],
      answer: 1,
      explain: "Incredible pressure at Earth’s center keeps the iron & nickel inner core solid, even though it’s hotter than the Sun."
    },
    {
      type: "mc",
      q: "Is coal a mineral? Why?",
      choices: [
        "Yes — it’s a solid found in Earth",
        "Yes — it has crystals",
        "No — it’s made of once-living things (organic), so it fails the inorganic test",
        "No — because it’s black"
      ],
      answer: 2,
      explain: "A mineral must be inorganic. Coal comes from once-living plants, so it is NOT a mineral."
    },
    {
      type: "mc",
      q: "Which of these is a mineral?",
      choices: ["Steel", "Cubic zirconia", "Brass", "Quartz"],
      answer: 3,
      explain: "Quartz occurs naturally. Steel, brass, and cubic zirconia are manufactured, so they are not minerals."
    },
    {
      type: "mc",
      q: "Why is color often unreliable for identifying minerals?",
      choices: [
        "Minerals have no color",
        "The same mineral can be more than one color",
        "Color only works underwater",
        "Color changes every day"
      ],
      answer: 1,
      explain: "Color is easy to observe but unreliable — the same mineral can appear in many colors. Streak is more trustworthy."
    },
    {
      type: "mc",
      q: "What is the difference between cleavage and fracture?",
      choices: [
        "Cleavage = irregular breaks; fracture = smooth flat breaks",
        "Cleavage = smooth flat breaks; fracture = irregular or curved breaks",
        "They mean the same thing",
        "Cleavage is about hardness; fracture is about color"
      ],
      answer: 1,
      explain: "Cleavage = breaks along smooth, flat surfaces. Fracture = breaks in irregular or curved shapes."
    },
    {
      type: "mc",
      q: "Intrusive igneous rocks cool ______ underground and have ______ crystals.",
      choices: [
        "quickly; tiny or no",
        "slowly; large",
        "quickly; large",
        "slowly; no"
      ],
      answer: 1,
      explain: "Intrusive = cools slowly underground → large crystals. Extrusive = cools fast on the surface → tiny or no crystals."
    },
    {
      type: "mc",
      q: "Which rock is extrusive, looks like glass, and cools very fast?",
      choices: ["Sandstone", "Pumice", "Obsidian", "Limestone"],
      answer: 2,
      explain: "Obsidian is extrusive igneous rock that looks like glass. Pumice is also extrusive but is holey and can float."
    },
    {
      type: "mc",
      q: "Metamorphic rocks form when rocks are changed by…",
      choices: ["Only melting into lava", "Heat and pressure", "Ocean waves alone", "Freezing water"],
      answer: 1,
      explain: "Metamorphic means “to change.” Heat and pressure change rocks into metamorphic rocks (without necessarily melting)."
    },
    {
      type: "mc",
      q: "In the rock cycle, what happens next if an igneous rock is weathered and eroded?",
      choices: [
        "It instantly becomes metamorphic",
        "It forms sediments that can compact into sedimentary rock",
        "It always melts into magma first",
        "The rock cycle stops"
      ],
      answer: 1,
      explain: "Weathering & erosion break rock into sediments. Those can compact into sedimentary rock. The cycle has no beginning or end!"
    },
    {
      type: "mc",
      q: "Does the rock cycle have a beginning and an end?",
      choices: [
        "Yes — it always starts with magma",
        "Yes — it ends with sedimentary rock",
        "No — any rock type can become any other; a rock needn’t pass through every stage",
        "No — rocks never change"
      ],
      answer: 2,
      explain: "The rock cycle has no beginning or end. Any rock can become any other, and a rock doesn’t have to pass through every stage."
    },
    {
      type: "mc",
      q: "What happens to temperature and pressure as you go deeper into Earth?",
      choices: [
        "Both decrease",
        "Temperature increases; pressure decreases",
        "Both increase",
        "They stay the same"
      ],
      answer: 2,
      explain: "Both temperature and pressure increase with depth. Pressure squeezes rocks so deep rocks are denser."
    },
    {
      type: "mc",
      q: "Hardness of minerals is measured on a scale from…",
      choices: ["0 to 100", "1 (softest) to 10 (hardest)", "A to Z", "Cold to hot"],
      answer: 1,
      explain: "The Mohs-type hardness scale goes from 1 (softest) to 10 (hardest)."
    }
  ]
    },
    "ela-vocab": {
      sections: [
        {
          id: "vocab",
          title: "ELA Vocabulary",
          short: "1. Vocab",
          html: `
        <h2>ELA Vocabulary</h2>
        <p>Study these <strong>16 words</strong> for your vocabulary test. Read each definition carefully, then practice with flashcards and the quiz!</p>
        <div class="callout">Tip: Try saying the word out loud, then cover the definition and see if you can explain it in your own words.</div>
        <div class="key-terms">
          <h3>All 16 terms</h3>
          <div class="term-row"><strong>Furtive</strong> — Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.</div>
          <div class="term-row"><strong>Impulsive</strong> — Acting or done without forethought or careful consideration.</div>
          <div class="term-row"><strong>Indignation</strong> — Anger or annoyance provoked by what is perceived as unfair or unjust treatment.</div>
          <div class="term-row"><strong>Intimidation</strong> — The action of frightening someone, especially in order to make them do what one wants.</div>
          <div class="term-row"><strong>Lurk</strong> — To lie in wait in a place of concealment, especially for an evil or sneaky purpose.</div>
          <div class="term-row"><strong>Malicious</strong> — Intending or intended to cause harm, injury, or distress to others.</div>
          <div class="term-row"><strong>Obstricate</strong> — To block, clog, or impede the passage or progress of something.</div>
          <div class="term-row"><strong>Perpetrator</strong> — A person who carries out a harmful, illegal, or immoral act.</div>
          <div class="term-row"><strong>Plausible</strong> — Seeming reasonable or probable.</div>
          <div class="term-row"><strong>Sabotage</strong> — Deliberately destroying, damaging, or obstructing something, especially for political or covert advantage.</div>
          <div class="term-row"><strong>Skeptical</strong> — Not easily convinced; having doubts or reservations.</div>
          <div class="term-row"><strong>Stealthy</strong> — Done quietly, cautiously, and secretly to avoid being noticed.</div>
          <div class="term-row"><strong>Subterranean</strong> — Existing, occurring, or located under the earth's surface.</div>
          <div class="term-row"><strong>Surveillance</strong> — Close observation of a person, group, or area, especially by official authorities.</div>
          <div class="term-row"><strong>Truancy</strong> — The action of staying away from school without a valid reason; intentional absenteeism.</div>
          <div class="term-row"><strong>Vandalize</strong> — To deliberately damage or destroy public or private property.</div>
        </div>
      `
        }
      ],
      flashcards: [
      { term: "Furtive", def: "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble." },
      { term: "Impulsive", def: "Acting or done without forethought or careful consideration." },
      { term: "Indignation", def: "Anger or annoyance provoked by what is perceived as unfair or unjust treatment." },
      { term: "Intimidation", def: "The action of frightening someone, especially in order to make them do what one wants." },
      { term: "Lurk", def: "To lie in wait in a place of concealment, especially for an evil or sneaky purpose." },
      { term: "Malicious", def: "Intending or intended to cause harm, injury, or distress to others." },
      { term: "Obstricate", def: "To block, clog, or impede the passage or progress of something." },
      { term: "Perpetrator", def: "A person who carries out a harmful, illegal, or immoral act." },
      { term: "Plausible", def: "Seeming reasonable or probable." },
      { term: "Sabotage", def: "Deliberately destroying, damaging, or obstructing something, especially for political or covert advantage." },
      { term: "Skeptical", def: "Not easily convinced; having doubts or reservations." },
      { term: "Stealthy", def: "Done quietly, cautiously, and secretly to avoid being noticed." },
      { term: "Subterranean", def: "Existing, occurring, or located under the earth's surface." },
      { term: "Surveillance", def: "Close observation of a person, group, or area, especially by official authorities." },
      { term: "Truancy", def: "The action of staying away from school without a valid reason; intentional absenteeism." },
      { term: "Vandalize", def: "To deliberately damage or destroy public or private property." }
      ],
      quiz: [
    {
      type: "mc",
      q: "Which word means: \"Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.\"",
      choices: [
        "Indignation",
        "Furtive",
        "Stealthy",
        "Impulsive"
      ],
      answer: 1,
      explain: "Furtive means: Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble."
    },
    {
      type: "mc",
      q: "Which word means: \"Acting or done without forethought or careful consideration.\"",
      choices: [
        "Impulsive",
        "Subterranean",
        "Indignation",
        "Intimidation"
      ],
      answer: 0,
      explain: "Impulsive means: Acting or done without forethought or careful consideration."
    },
    {
      type: "mc",
      q: "Which word means: \"Anger or annoyance provoked by what is perceived as unfair or unjust treatment.\"",
      choices: [
        "Indignation",
        "Impulsive",
        "Furtive",
        "Vandalize"
      ],
      answer: 0,
      explain: "Indignation means: Anger or annoyance provoked by what is perceived as unfair or unjust treatment."
    },
    {
      type: "mc",
      q: "Which word means: \"The action of frightening someone, especially in order to make them do what one wants.\"",
      choices: [
        "Subterranean",
        "Lurk",
        "Sabotage",
        "Intimidation"
      ],
      answer: 3,
      explain: "Intimidation means: The action of frightening someone, especially in order to make them do what one wants."
    },
    {
      type: "mc",
      q: "Which word means: \"To lie in wait in a place of concealment, especially for an evil or sneaky purpose.\"",
      choices: [
        "Surveillance",
        "Malicious",
        "Lurk",
        "Skeptical"
      ],
      answer: 2,
      explain: "Lurk means: To lie in wait in a place of concealment, especially for an evil or sneaky purpose."
    },
    {
      type: "mc",
      q: "Which word means: \"Intending or intended to cause harm, injury, or distress to others.\"",
      choices: [
        "Indignation",
        "Obstricate",
        "Malicious",
        "Lurk"
      ],
      answer: 2,
      explain: "Malicious means: Intending or intended to cause harm, injury, or distress to others."
    },
    {
      type: "mc",
      q: "Which word means: \"To block, clog, or impede the passage or progress of something.\"",
      choices: [
        "Impulsive",
        "Obstricate",
        "Perpetrator",
        "Vandalize"
      ],
      answer: 1,
      explain: "Obstricate means: To block, clog, or impede the passage or progress of something."
    },
    {
      type: "mc",
      q: "Which word means: \"A person who carries out a harmful, illegal, or immoral act.\"",
      choices: [
        "Furtive",
        "Surveillance",
        "Subterranean",
        "Perpetrator"
      ],
      answer: 3,
      explain: "Perpetrator means: A person who carries out a harmful, illegal, or immoral act."
    },
    {
      type: "mc",
      q: "What does Plausible mean?",
      choices: [
        "To deliberately damage or destroy public or private property.",
        "To block, clog, or impede the passage or progress of something.",
        "Seeming reasonable or probable.",
        "Acting or done without forethought or careful consideration."
      ],
      answer: 2,
      explain: "Plausible \u2014 Seeming reasonable or probable."
    },
    {
      type: "mc",
      q: "What does Sabotage mean?",
      choices: [
        "The action of frightening someone, especially in order to make them do what one wants.",
        "Existing, occurring, or located under the earth's surface.",
        "Deliberately destroying, damaging, or obstructing something, especially for political or covert advantage.",
        "Not easily convinced; having doubts or reservations."
      ],
      answer: 2,
      explain: "Sabotage \u2014 Deliberately destroying, damaging, or obstructing something, especially for political or covert advantage."
    },
    {
      type: "mc",
      q: "What does Skeptical mean?",
      choices: [
        "Acting or done without forethought or careful consideration.",
        "Not easily convinced; having doubts or reservations.",
        "Close observation of a person, group, or area, especially by official authorities.",
        "To lie in wait in a place of concealment, especially for an evil or sneaky purpose."
      ],
      answer: 1,
      explain: "Skeptical \u2014 Not easily convinced; having doubts or reservations."
    },
    {
      type: "mc",
      q: "What does Stealthy mean?",
      choices: [
        "Done quietly, cautiously, and secretly to avoid being noticed.",
        "A person who carries out a harmful, illegal, or immoral act.",
        "To lie in wait in a place of concealment, especially for an evil or sneaky purpose.",
        "Not easily convinced; having doubts or reservations."
      ],
      answer: 0,
      explain: "Stealthy \u2014 Done quietly, cautiously, and secretly to avoid being noticed."
    },
    {
      type: "mc",
      q: "What does Subterranean mean?",
      choices: [
        "The action of frightening someone, especially in order to make them do what one wants.",
        "Intending or intended to cause harm, injury, or distress to others.",
        "Existing, occurring, or located under the earth's surface.",
        "Not easily convinced; having doubts or reservations."
      ],
      answer: 2,
      explain: "Subterranean \u2014 Existing, occurring, or located under the earth's surface."
    },
    {
      type: "mc",
      q: "What does Surveillance mean?",
      choices: [
        "Anger or annoyance provoked by what is perceived as unfair or unjust treatment.",
        "Close observation of a person, group, or area, especially by official authorities.",
        "Deliberately destroying, damaging, or obstructing something, especially for political or covert advantage.",
        "Not easily convinced; having doubts or reservations."
      ],
      answer: 1,
      explain: "Surveillance \u2014 Close observation of a person, group, or area, especially by official authorities."
    },
    {
      type: "mc",
      q: "What does Truancy mean?",
      choices: [
        "To block, clog, or impede the passage or progress of something.",
        "The action of staying away from school without a valid reason; intentional absenteeism.",
        "Not easily convinced; having doubts or reservations.",
        "To lie in wait in a place of concealment, especially for an evil or sneaky purpose."
      ],
      answer: 1,
      explain: "Truancy \u2014 The action of staying away from school without a valid reason; intentional absenteeism."
    },
    {
      type: "mc",
      q: "What does Vandalize mean?",
      choices: [
        "Existing, occurring, or located under the earth's surface.",
        "The action of staying away from school without a valid reason; intentional absenteeism.",
        "To deliberately damage or destroy public or private property.",
        "Close observation of a person, group, or area, especially by official authorities."
      ],
      answer: 2,
      explain: "Vandalize \u2014 To deliberately damage or destroy public or private property."
    }
      ]
    },
    "religion": {
      sections: [
        {
          id: "creation",
          title: "Creation, Soul & Stewardship",
          short: "1. Creation",
          html: `
        <h2>Creation, Soul & Stewardship</h2>
        <p>God created human beings with both a <strong>body</strong> and a <strong>soul</strong>. Humans are the <strong>highest</strong> point of God’s creation.</p>
        <h3>The second creation story (Genesis 2:5–25)</h3>
        <ul>
          <li>God created <strong>humans first</strong>, then plants and other creatures.</li>
          <li>God formed the human person from <strong>clay / dust</strong> of the earth and <strong>breathed the breath of life into his nose</strong>.</li>
          <li>According to Genesis 2:7, God gave humanity <strong>life</strong>.</li>
          <li>Our bodies are made from many of the same <strong>elements</strong> found throughout the universe.</li>
        </ul>
        <h3>What is a soul?</h3>
        <p>A <strong>soul</strong> is the invisible spiritual reality that will <strong>live forever with God</strong>.</p>
        <div class="callout"><strong>Body + soul = human person</strong></div>
        <h3>Adam and Eve</h3>
        <ul>
          <li>God created the first man, <strong>Adam</strong>.</li>
          <li>While Adam slept, God created the first woman, <strong>Eve</strong>, from Adam.</li>
          <li>Adam and Eve were given the responsibility of <strong>caring for God’s creation</strong>.</li>
        </ul>
        <h3>Stewardship</h3>
        <p>A <strong>steward</strong> has the responsibility of being a <strong>manager of someone else’s things</strong>. We are called to be good <strong>stewards</strong> of God’s creation.</p>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Soul</strong> — The invisible spiritual reality that will live forever with God</div>
          <div class="term-row"><strong>Human person</strong> — Body + soul</div>
          <div class="term-row"><strong>Adam</strong> — The first man</div>
          <div class="term-row"><strong>Eve</strong> — The first woman (created from Adam while he slept)</div>
          <div class="term-row"><strong>Steward</strong> — Manager of someone else’s things; we care for God’s creation</div>
        </div>
      `
        },
        {
          id: "sin",
          title: "Free Will, Sin & Original Sin",
          short: "2. Sin",
          html: `
        <h2>Free Will, Sin & Original Sin</h2>
        <p>The story of Adam and Eve teaches about the beginning of <strong>sin</strong> and humanity’s choice to turn away from God.</p>
        <h3>Symbols in the story</h3>
        <ul>
          <li><strong>Serpent</strong> — represents the <strong>devil</strong></li>
          <li><strong>Eating the fruit</strong> — represents humanity’s ability to make <strong>choices</strong></li>
        </ul>
        <p>God gave humans <strong>free will</strong>, meaning we can choose to follow God or turn away from Him.</p>
        <h3>What is sin?</h3>
        <p><strong>Sin</strong> is a thought, word, deed, or omission against <strong>God’s law</strong>.</p>
        <p>Sin damaged humanity by taking away:</p>
        <ul>
          <li>innocence</li>
          <li><strong>holiness</strong></li>
          <li>justice</li>
        </ul>
        <h3>Original Sin</h3>
        <p><strong>Original Sin</strong> is the first sin that <strong>weakened</strong> human nature. Although we did not personally commit Adam and Eve’s sin, we all suffer from its <strong>effects</strong>.</p>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Free will</strong> — Ability to choose to follow God or turn away</div>
          <div class="term-row"><strong>Sin</strong> — A thought, word, deed, or omission against God’s law</div>
          <div class="term-row"><strong>Original Sin</strong> — The first sin that weakened human nature</div>
          <div class="term-row"><strong>Serpent</strong> — Symbol of the devil</div>
          <div class="term-row"><strong>Eating the fruit</strong> — Symbol of humanity’s ability to make choices</div>
        </div>
      `
        },
        {
          id: "stories",
          title: "Cain & Abel, Noah & Babel",
          short: "3. Stories",
          html: `
        <h2>Cain & Abel, Noah & Babel</h2>
        <h3>Cain and Abel</h3>
        <ul>
          <li>Adam and Eve’s sons: <strong>Cain</strong> (older) and <strong>Abel</strong> (younger)</li>
          <li>The Lord favored <strong>Abel’s</strong> offering, not Cain’s</li>
          <li>Cain felt treated <strong>unfairly</strong>, focused on his own <strong>P.O.V.</strong>, and did not overcome anger — even though God tried to <strong>comfort</strong> him</li>
          <li>Cain’s anger eventually led to <strong>murder</strong></li>
        </ul>
        <div class="callout">Lessons: Human life is <strong>sacred</strong> and murder is prohibited. Sin can create <strong>separation</strong> between people. Accept life as we find it and <strong>respect</strong> one another. God’s love has the power to bring <strong>healing</strong>.</div>
        <h3>God’s covenant with Noah</h3>
        <ul>
          <li>God was <strong>displeased with the wickedness</strong> of humanity.</li>
          <li>God made a <strong>covenant</strong> with Noah.</li>
          <li>Promise: God would never again send a flood to <strong>destroy</strong> all life on earth.</li>
        </ul>
        <h3>Symbols in Noah’s story</h3>
        <ul>
          <li><strong>Water</strong> reminds Catholics of the Sacrament of <strong>Baptism</strong> (= <strong>new life</strong>)</li>
          <li>Through Baptism we are freed from <strong>original sin</strong> and receive God’s forgiveness and love</li>
          <li>The <strong>ark</strong> is a symbol of the <strong>Church</strong></li>
          <li>Just as the ark saved Noah’s family, the Church guides us toward <strong>salvation</strong></li>
          <li>Through Baptism we are brought to <strong>a new life</strong></li>
        </ul>
        <h3>The Tower of Babel</h3>
        <ul>
          <li>At first, humanity shared <strong>one</strong> language and could communicate.</li>
          <li>People feared change and danger and built a great <strong>tower</strong>; desire for power and independence went against <strong>God’s will</strong>.</li>
          <li>God allowed different <strong>languages</strong> → <strong>separation</strong> and <strong>confusion</strong>.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms / symbols</h3>
          <div class="term-row"><strong>Covenant</strong> — What God made with Noah</div>
          <div class="term-row"><strong>Baptism</strong> — Sacrament water reminds us of; = new life; frees from original sin</div>
          <div class="term-row"><strong>Ark</strong> — Symbol of the Church</div>
          <div class="term-row"><strong>Tower (Babel)</strong> — Human resistance to God’s will</div>
          <div class="term-row"><strong>Different languages</strong> — Separation of groups of people; led to confusion</div>
          <div class="term-row"><strong>Unity</strong> — What humanity lost (Babel symbolism)</div>
        </div>
      `
        },
        {
          id: "mercy",
          title: "Mercy, Savior & the Gospels",
          short: "4. Gospels",
          html: `
        <h2>Mercy, Savior & the Gospels</h2>
        <div class="callout"><strong>Important:</strong> God did <strong>not</strong> abandon humanity. God promised to send a descendant of the first man and woman to <strong>rescue</strong> humanity — this shows God’s <strong>Mercy</strong>.</div>
        <h3>God promised a Savior</h3>
        <ul>
          <li>Even though sin separated people from God, God never stopped <strong>loving and forgiving</strong>.</li>
          <li>God continued to <strong>love, forgive, guide, and protect</strong>.</li>
          <li>People waited for a <strong>savior</strong> who would restore the friendship between God and humanity.</li>
        </ul>
        <h3>The prophet Isaiah</h3>
        <p>The prophet <strong>Isaiah</strong> spoke about a <strong>Suffering Servant</strong> who would come to save God’s people.</p>
        <p>Christians understand the Suffering Servant to be <strong>Jesus</strong>.</p>
        <p>The New Testament teaches us about <strong>God’s son Jesus</strong>.</p>
        <h3>The Gospels</h3>
        <ul>
          <li><strong>Gospel</strong> means <strong>the good news</strong>.</li>
          <li>The four Gospels are: <strong>Matthew, Mark, Luke, and John</strong>.</li>
          <li>The Gospel is the Good News about God at work in <strong>Jesus</strong>.</li>
        </ul>
        <div class="key-terms">
          <h3>Key terms</h3>
          <div class="term-row"><strong>Mercy</strong> — Shown by God not abandoning humanity / promising rescue</div>
          <div class="term-row"><strong>Savior</strong> — One people waited for to restore friendship with God</div>
          <div class="term-row"><strong>Isaiah</strong> — Prophet who spoke about a Suffering Servant</div>
          <div class="term-row"><strong>Suffering Servant</strong> — One Isaiah said would come to save God’s people; understood by Christians to be Jesus</div>
          <div class="term-row"><strong>Gospel</strong> — The good news; Good News about God at work in Jesus</div>
          <div class="term-row"><strong>Four Gospels</strong> — Matthew, Mark, Luke, John</div>
          <div class="term-row"><strong>Jesus</strong> — God’s son (New Testament); God at work in Jesus (Gospel)</div>
        </div>
      `
        }
      ],
      flashcards: [
        { term: "Soul", def: "The invisible spiritual reality that will live forever with God." },
        { term: "Human person", def: "Body + soul." },
        { term: "Adam", def: "The first man." },
        { term: "Eve", def: "The first woman (created from Adam while he slept)." },
        { term: "Steward", def: "Someone with the responsibility of being a manager of someone else’s things; we are called to be good stewards of God’s creation." },
        { term: "Free will", def: "The ability to choose to follow God or turn away from Him." },
        { term: "Sin", def: "A thought, word, deed, or omission against God’s law." },
        { term: "Original Sin", def: "The first sin that weakened human nature; we all suffer its effects." },
        { term: "Serpent", def: "In the Adam and Eve story, a symbol of the devil." },
        { term: "Eating the fruit", def: "In the Adam and Eve story, a symbol of humanity’s ability to make choices." },
        { term: "Cain", def: "Older son of Adam and Eve; his anger led to murdering Abel." },
        { term: "Abel", def: "Younger son of Adam and Eve; God favored his offering." },
        { term: "Covenant", def: "What God made with Noah — a promise never again to destroy all life with a flood." },
        { term: "Baptism", def: "Sacrament water can remind Catholics of; equals new life; frees us from original sin." },
        { term: "Ark", def: "Symbol of the Church; saved Noah and his family." },
        { term: "Church", def: "Guides us toward salvation (like the ark); symbolized by the ark." },
        { term: "Salvation", def: "What the Church guides us toward." },
        { term: "Tower of Babel", def: "Represents human resistance to God’s will." },
        { term: "Different languages (Babel)", def: "Represent separation of different groups of people; led to confusion." },
        { term: "Unity", def: "What humanity lost, according to Babel symbolism." },
        { term: "Mercy", def: "Shown by God not abandoning humanity and promising to rescue people." },
        { term: "Savior", def: "The one people waited for to restore friendship between God and humanity." },
        { term: "Isaiah", def: "Prophet who spoke about a Suffering Servant who would save God’s people." },
        { term: "Suffering Servant", def: "The one Isaiah said would come to save God’s people; understood by Christians to be Jesus." },
        { term: "Gospel", def: "The good news; the Good News about God at work in Jesus." },
        { term: "Four Gospels", def: "Matthew, Mark, Luke, and John." },
        { term: "Jesus", def: "God’s son (New Testament); the Gospel is about God at work in Jesus." }
      ],
      quiz: [
        {
          type: "mc",
          q: "God created human beings with both a ____ and a ____.",
          choices: ["body and soul", "mind and heart", "spirit and angel", "name and purpose"],
          answer: 0,
          explain: "God created human beings with both a body and a soul."
        },
        {
          type: "mc",
          q: "In the second creation story, God created ____ first, then plants and other creatures.",
          choices: ["animals", "humans", "the sun", "angels"],
          answer: 1,
          explain: "In the second creation story, God created humans first, then plants and other creatures."
        },
        {
          type: "mc",
          q: "Human beings are the ____ point of God’s creation.",
          choices: ["middle", "lowest", "highest", "newest"],
          answer: 2,
          explain: "Human beings are the highest point of God’s creation."
        },
        {
          type: "mc",
          q: "God created the human person from ____ from the earth.",
          choices: ["water", "light", "stone", "clay / dust"],
          answer: 3,
          explain: "God formed the human person from clay / dust of the earth and breathed the breath of life into his nose."
        },
        {
          type: "mc",
          q: "A soul is the invisible spiritual reality that will ____.",
          choices: ["live forever with God", "disappear after death", "stay only in the body", "become an angel"],
          answer: 0,
          explain: "A soul is the invisible spiritual reality that will live forever with God."
        },
        {
          type: "mc",
          q: "Body + ____ = human person.",
          choices: ["sin", "soul", "free will", "covenant"],
          answer: 1,
          explain: "Body + soul = human person."
        },
        {
          type: "mc",
          q: "A steward is someone with the responsibility of being a ____ of someone else’s things.",
          choices: ["owner", "destroyer", "manager", "seller"],
          answer: 2,
          explain: "A steward is a manager of someone else’s things. We are called to be good stewards of God’s creation."
        },
        {
          type: "mc",
          q: "In the Adam and Eve story, the serpent represents the ____.",
          choices: ["angel", "devil", "flood", "Church"],
          answer: 1,
          explain: "The serpent represents the devil."
        },
        {
          type: "mc",
          q: "Eating the fruit represents humanity’s ability to make ____.",
          choices: ["choices", "covenants", "temples", "offerings"],
          answer: 0,
          explain: "Eating the fruit represents humanity’s ability to make choices."
        },
        {
          type: "mc",
          q: "God gave humans ____, meaning they can follow God or turn away.",
          choices: ["original sin", "baptism", "free will", "a tower"],
          answer: 2,
          explain: "God gave humans free will — we can choose to follow God or turn away from Him."
        },
        {
          type: "mc",
          q: "Sin is a thought, word, deed, or omission against ____.",
          choices: ["Cain’s offering", "God’s law", "Noah’s ark", "the Gospels"],
          answer: 1,
          explain: "Sin is a thought, word, deed, or omission against God’s law."
        },
        {
          type: "mc",
          q: "Original Sin is the first sin that ____ human nature.",
          choices: ["perfected", "created", "baptized", "weakened"],
          answer: 3,
          explain: "Original Sin is the first sin that weakened human nature. We all suffer its effects."
        },
        {
          type: "mc",
          q: "Sin damaged humanity by taking away innocence, ____, and justice.",
          choices: ["holiness", "free will", "language", "mercy"],
          answer: 0,
          explain: "Sin took away innocence, holiness, and justice."
        },
        {
          type: "mc",
          q: "Cain was the ____ brother; Abel was the ____.",
          choices: ["younger; older", "older; younger", "twin; twin", "only; adopted"],
          answer: 1,
          explain: "Cain was the older brother; Abel was the younger."
        },
        {
          type: "mc",
          q: "The Lord looked with favor on ____’s offering, not Cain’s.",
          choices: ["Noah", "Isaiah", "Abel", "Adam"],
          answer: 2,
          explain: "God favored Abel’s offering, not Cain’s. Cain’s anger led to murder."
        },
        {
          type: "mc",
          q: "The Cain and Abel story teaches that human life is ____ and murder is prohibited.",
          choices: ["optional", "sacred", "cheap", "private"],
          answer: 1,
          explain: "Human life is sacred and murder is prohibited."
        },
        {
          type: "mc",
          q: "In Noah’s story, God made a ____.",
          choices: ["tower", "Gospel", "covenant", "temple"],
          answer: 2,
          explain: "God made a covenant with Noah and promised never again to destroy all life with a flood."
        },
        {
          type: "mc",
          q: "Water can remind Catholics of the Sacrament of ____ (= new life).",
          choices: ["Confirmation", "Baptism", "Marriage", "Holy Orders"],
          answer: 1,
          explain: "Water reminds Catholics of Baptism, which equals new life and frees us from original sin."
        },
        {
          type: "mc",
          q: "The ark is often seen as a symbol of the ____.",
          choices: ["serpent", "tower", "Gospel writers", "Church"],
          answer: 3,
          explain: "The ark symbolizes the Church, which guides us toward salvation."
        },
        {
          type: "mc",
          q: "At first, humanity shared ____ language. At Babel, people built a great ____.",
          choices: ["one; tower", "four; ark", "no; church", "many; altar"],
          answer: 0,
          explain: "Humanity shared one language; people built a tower. Desire for power went against God’s will."
        },
        {
          type: "mc",
          q: "In Babel symbolism, the tower represents human resistance to ____, and the story shows loss of ____.",
          choices: ["free will; dust", "God’s will; unity", "Baptism; mercy", "the Gospels; language only"],
          answer: 1,
          explain: "The tower = resistance to God’s will. Different languages = separation. Overall = loss of unity."
        },
        {
          type: "mc",
          q: "God did not ____ humanity. His promise to rescue people shows God’s ____.",
          choices: ["create; Anger", "abandon; Mercy", "love; Silence", "forgive; Confusion"],
          answer: 1,
          explain: "God did not abandon humanity. Promising a descendant to rescue people shows God’s Mercy."
        },
        {
          type: "mc",
          q: "People waited for God to send a ____ to restore friendship between God and humanity.",
          choices: ["serpent", "tower", "savior", "flood"],
          answer: 2,
          explain: "People waited for a savior. God continued to love, forgive, guide, and protect."
        },
        {
          type: "mc",
          q: "The prophet ____ spoke about a Suffering Servant who would save God’s people.",
          choices: ["Cain", "Isaiah", "Noah", "Mark"],
          answer: 1,
          explain: "Isaiah spoke about a Suffering Servant. Christians understand that Suffering Servant to be Jesus."
        },
        {
          type: "mc",
          q: "Christians understand the Suffering Servant (from Isaiah) to be ____.",
          choices: ["Noah", "Cain", "Jesus", "Abel"],
          answer: 2,
          explain: "Christians understand the Suffering Servant to be Jesus. (Brett confirmed from the blank in Mazie’s notes.)"
        },
        {
          type: "mc",
          q: "The word Gospel means ____. The four Gospels are Matthew, Mark, Luke, and ____.",
          choices: ["the old law; Isaiah", "a tower; Genesis", "the good news; John", "a flood story; Noah"],
          answer: 2,
          explain: "Gospel means the good news. The four Gospels are Matthew, Mark, Luke, and John."
        },
        {
          type: "mc",
          q: "The Gospel is the Good News about God at work in ____.",
          choices: ["Cain", "Babel", "Adam only", "Jesus"],
          answer: 3,
          explain: "The Gospel is the Good News about God at work in Jesus. The New Testament teaches about God’s son Jesus."
        },
        {
          type: "mc",
          q: "Which statement matches the notes?",
          choices: [
            "God abandoned humanity after sin",
            "God favored Cain’s offering over Abel’s",
            "At Babel, different languages brought greater unity",
            "Even though sin separated people from God, God never stopped loving and forgiving"
          ],
          answer: 3,
          explain: "God never stopped loving and forgiving. He did not abandon humanity."
        }
      ]
    },
    "hoot": {"sections":[{"id":"characters","title":"Characters","short":"1. Characters","html":"<h2>Characters</h2><p>Words from your character worksheet, checked against the book. Know who each person is and what they are like!</p><h3 style=\"color:var(--sand)\">Main characters</h3><h3>Roy Eberhardt</h3><p><em>Main character; the new kid at Trace Middle School (moved from Montana)</em></p><ul><li>nice</li><li>helpful</li><li>understanding</li><li>curious</li><li>honest</li><li>brave (he stands up to bullies and speaks up for the owls)</li><li>smaller than Dana</li></ul><p>Roy is around 12 years old.</p><h3>Mullet Fingers (Napoleon Bridger)</h3><p><em>The barefoot “running boy”; Beatrice's stepbrother; Lonna's son</em></p><ul><li>brave</li><li>outdoorsy</li><li>determined</li><li>loves animals</li><li>a runaway who lives on his own</li></ul><p>He is about Roy's age (around 12). He got his nickname from catching mullet (a fish) with his bare hands. His real name is revealed near the end of the book.</p><h3>Beatrice Leep</h3><p><em>Mullet Fingers' stepsister; Roy's classmate and friend</em></p><ul><li>strong and athletic</li><li>a soccer player</li><li>tall and tough (nicknamed “Beatrice the Bear”)</li><li>scary and intimidating at first, but loyal and protective of her brother</li></ul><p>She acts tough and threatens Roy at first, but she is really protecting Mullet Fingers, and she later rescues Roy from Dana.</p><h3 style=\"color:var(--sand)\">Supporting characters &amp; antagonists</h3><h3>Officer David Delinko</h3><p><em>Young police officer who investigates the vandalism</em></p><ul><li>dutiful</li><li>ambitious (he wants to be a detective)</li><li>heartfelt — he grows to care about the owls and helps the kids</li></ul><p>He falls asleep on guard duty and wants to redeem himself.</p><h3>Curly (Leroy Branitt)</h3><p><em>Foreman at the Mother Paula's construction site</em></p><ul><li>cranky</li><li>unsmiling and rude</li><li>suspicious of everyone</li><li>desperate to keep his job (he denies that owls exist)</li><li>afraid of Chuck Muckle</li></ul><p>He is bald, so his nickname “Curly” is ironic. By the end he admits the owls are cute.</p><h3>Dana Matherson</h3><p><em>The school bully who rides Roy's bus</em></p><ul><li>big and strong</li><li>a bully</li><li>badly behaved</li><li>not very smart</li><li>smokes cigarettes</li></ul><p>He calls Roy “Cowgirl.”</p><h3>Chuck Muckle</h3><p><em>Vice president of corporate relations for Mother Paula's — the main villain</em></p><ul><li>mean</li><li>aggressive and quick to get mad</li><li>bossy</li><li>arrogant</li><li>willing to hide the truth</li></ul><p>He pretends there are no owls so the pancake house can be built.</p><h3>Kimberly Lou Dixon</h3><p><em>Actress and former Miss America runner-up who plays “Mother Paula” in the commercials</em></p><ul><li>an actress (former Miss America runner-up)</li><li>glamorous</li><li>takes the owls' side at the end</li></ul><p>She joins the kids at the groundbreaking and later quits Mother Paula's.</p><h3 style=\"color:var(--sand)\">Family</h3><h3>Mr. Eberhardt</h3><p><em>Roy's father; works for the Department of Justice</em></p><ul><li>understanding</li><li>nice</li><li>helpful</li></ul><p>He gets the permit file from City Hall and helps Roy's cause.</p><h3>Mrs. Eberhardt</h3><p><em>Roy's mother</em></p><ul><li>understanding</li><li>nice</li><li>loving</li></ul><p>She teaches Roy that lying is wrong, but trusts his best judgment.</p><h3>Leon Leep</h3><p><em>Beatrice's dad and Mullet Fingers' stepfather; former NBA player</em></p><ul><li>nicer than Lonna</li><li>wants Mullet Fingers to come home</li><li>not very involved at home (he mostly watches TV)</li></ul><h3>Lonna Leep</h3><p><em>Mullet Fingers' mother and Beatrice's stepmother</em></p><ul><li>rude</li><li>cruel to her son</li><li>an attention seeker</li></ul><p>She keeps sending Mullet Fingers to military schools, then shows up on TV at the protest to get attention.</p><div class=\"key-terms\"><h3>Other people to know</h3><div class=\"term-row\"><strong>Garrett</strong> — Skateboarding classmate who befriends Roy; known for fake-fart noises</div><div class=\"term-row\"><strong>Miss Hennepin</strong> — Vice principal at Trace Middle School; suspends Roy from the bus</div><div class=\"term-row\"><strong>Mr. Ryan</strong> — Roy's American history teacher</div><div class=\"term-row\"><strong>Kelly Colfax</strong> — Reporter who breaks the story about the missing Environmental Impact Statement</div><div class=\"term-row\"><strong>Councilman Bruce Grandy</strong> — City councilman; the hidden report turns up in his golf bag</div></div>"},{"id":"plot","title":"Plot & recall","short":"2. Plot (Q1–20)","html":"<h2>Plot &amp; recall (Questions 1–20)</h2><p>The first answer under each question matches the class answer key. The “Book note” adds extra detail from the book.</p><h3>1. Where did Roy live before moving to Coconut Cove, Florida, and how does he feel about moving so often?</h3><p>Roy lived in Montana before moving to Coconut Cove. He is sad, upset, and mad that he is never around a city long enough to make friendships that can last a long time.</p><div class=\"callout\"><strong>Book note:</strong> His family moves a lot because of his dad's government job, so Roy is used to being the new kid. He liked Montana best of all the places they lived.</div><h3>2. How does Roy first notice the strange boy running down the street on a school morning?</h3><p>Roy first notices the running boy when Dana Matherson pushes his face against the bus window.</p><div class=\"callout\"><strong>Book note:</strong> Roy was reading a comic book, and Dana squeezed his head up and toward the window. That's when Roy saw a boy running along the sidewalk with no shoes, no backpack, and no school books.</div><h3>3. What happens during Roy's first physical encounter with Dana Matherson on the school bus?</h3><p>Dana pushed Roy's head against the window.</p><div class=\"callout\"><strong>Book note:</strong> Dana also calls Roy “Cowgirl.” Later that week Dana chokes Roy, and Roy punches back and breaks Dana's nose.</div><h3>4. What business is scheduled to build a new location on the plot of land in Coconut Cove?</h3><p>Mother Paula's Pancake House (Mother Paula's All-American Pancake House).</p><div class=\"callout\"><strong>Book note:</strong> The empty lot is at the corner of East Oriole and Woodbury.</div><h3>5. What species of protected animal lives in burrows across the construction site?</h3><p>Burrowing owls.</p><div class=\"callout\"><strong>Book note:</strong> They are tiny owls, only about eight or nine inches tall.</div><h3>6. What strange vandalism acts occur at the construction site during the opening chapters?</h3><p>Someone pulled the survey stakes out of the ground, put alligators in the port-a-potties, and put cottonmouth moccasins on the grounds.</p><div class=\"callout\"><strong>Book note:</strong> Other pranks in the book: the holes where the stakes were were filled in, the air was let out of a truck's tires, and the seats disappeared from the bulldozers.</div><h3>7. How does Officer Delinko get caught off guard while guarding the construction site overnight?</h3><p>Delinko falls asleep in his patrol car, and the windows get spray-painted black.</p><div class=\"callout\"><strong>Book note:</strong> Mullet Fingers did the spray-painting. Delinko woke up late and embarrassed, and got desk duty.</div><h3>8. How did Mullet Fingers earn his unique nickname?</h3><p>He can catch mullet fish with his bare hands.</p><div class=\"callout\"><strong>Book note:</strong> Mullet are small, slippery fish.</div><h3>9. Why does Mullet Fingers refuse to live at home with his mother and stepfather?</h3><p>Mullet Fingers doesn't get along with his mother, Lonna. She doesn't want him around and keeps sending him away to military schools, so he runs away and lives on his own.</p><div class=\"callout\"><strong>Book note:</strong> His stepfather, Leon, is nicer and wants him to come home, but Lonna is the problem.</div><h3>10. What injury does Mullet Fingers suffer while hiding out at the construction site, and how do Roy and Beatrice help him?</h3><p>Mullet Fingers is bitten by a Rottweiler (a guard dog). Roy and Beatrice bandage him up with supplies from Roy's house and then take him to the hospital.</p><div class=\"callout\"><strong>Book note:</strong> The bites got infected. Roy and Beatrice told Mrs. Eberhardt the supplies were for a messy science experiment.</div><h3>11. Why does Beatrice initially threaten Roy, and what causes her attitude toward him to change?</h3><p>Beatrice threatened Roy because she was trying to protect Mullet Fingers. Her attitude changes because she realizes Roy cares, is trustworthy, and does not want to get Mullet Fingers in trouble.</p><div class=\"callout\"><strong>Book note:</strong> Beatrice is Mullet Fingers' stepsister. She started to trust Roy when she saw he had a shoebox of shoes for the boy, and later she rescued Roy from Dana.</div><h3>12. Why does Mullet Fingers use Roy's name in the emergency room?</h3><p>Mullet Fingers used Roy's name in the emergency room because he did not want his parents to know he was in Coconut Cove.</p><div class=\"callout\"><strong>Book note:</strong> In the book, Mullet Fingers wouldn't give the hospital his name, so Roy gave his own name, address, and phone number for him. Roy got in trouble for this. (Dana's name comes up later: when Dana is caught at the site, he tells the police he is Roy.)</div><h3>13. How do Roy's parents react when they find out he lied to hospital personnel to help a friend?</h3><p>Roy's parents were upset at first, but they understood why Roy wanted to help his friend.</p><div class=\"callout\"><strong>Book note:</strong> Mrs. Eberhardt told him lying isn't okay, even to protect a friend, but that he should use his best judgment when right and wrong aren't clear. Both parents said they were proud of him.</div><h3>14. What strategy does Roy use to stop Dana Matherson from harassing him on the bus?</h3><p>Roy goes to Dana's house and gives him a written apology.</p><div class=\"callout\"><strong>Book note:</strong> The apology letter is really a truce offer: Roy apologizes for the broken nose and promises not to hit Dana again if Dana stops bothering him on the bus. Dana doesn't accept, so Roy also refuses to act scared of him on the bus.</div><h3>15. What trick does Roy play to lure Dana to the construction site and get him blamed for the vandalism?</h3><p>Roy tells Dana he hid cigarettes in the trailer at the construction site.</p><div class=\"callout\"><strong>Book note:</strong> Roy says there's a whole case of cigarettes in the construction trailer if Dana promises not to beat him up. Dana goes to the site, gets caught (with rattraps stuck to his shoes), and is arrested as the “vandal.” He even tells the police he is Roy Eberhardt.</div><h3>16. What motivates Officer Delinko to investigate the construction site events so thoroughly?</h3><p>Officer Delinko investigates so thoroughly to get promoted and to have the case go on his permanent record.</p><div class=\"callout\"><strong>Book note:</strong> He wants to be a detective, and after falling asleep on the job he also wants to redeem himself. Later he starts to care about the owls too.</div><h3>17. How does Chuck Muckle treat Curly when project delays start threatening the restaurant's opening schedule?</h3><p>Chuck Muckle treats Curly aggressively, impatiently, meanly, and disrespectfully. He also threatens to fire him.</p><div class=\"callout\"><strong>Book note:</strong> Muckle won't listen to Curly's problems and orders him to keep the work on schedule.</div><h3>18. What evidence reveals that Mother Paula's corporate management knew about the owls before starting construction?</h3><p>The EIS (Environmental Impact Statement) is the evidence. Councilman Grandy was paid $4,500, and they found the EIS in his golf bag.</p><div class=\"callout\"><strong>Book note:</strong> The EIS documented three pairs of nesting owls, and it was missing from the city file. (The councilman says the money wasn't a bribe.) Muckle also told Curly to call any owl a chicken.</div><h3>19. What role do Roy's parents play in helping him handle the situation with the construction company?</h3><p>Roy's parents support him and allow him to go to the Groundbreaking Ceremony. His dad gives him the copy of the file with the missing EIS.</p><div class=\"callout\"><strong>Book note:</strong> Mrs. Eberhardt lent Roy her camera. Mr. Eberhardt got the permit file from City Hall, copied it, took it to environmental lawyers, and had Roy hand it to reporter Kelly Colfax.</div><h3>20. What actions do the students take during the official Mother Paula's groundbreaking ceremony?</h3><p>The students form a circle around Mullet Fingers, they have homemade signs, and they sing “This Land Is Your Land.”</p><div class=\"callout\"><strong>Book note:</strong> They linked arms to protect Mullet Fingers when Muckle wanted him dug out of the owl burrow, and Beatrice led the singing. Beatrice's soccer teammates and Roy's history classmates came.</div>"},{"id":"themes","title":"Themes & deep thinking","short":"3. Themes (Q21–30)","html":"<h2>Themes &amp; deep thinking (Questions 21–30)</h2><p>These are the big ideas. Q22–30 are “answers will vary” in class, so the sample answers show one good way to say it. The quiz will ask about them too!</p><h3>21. Theme of Belonging: How does Roy's definition of “home” evolve from the beginning of the book to the end?</h3><p>At the beginning, he misses Montana. By the end of the book, he calls himself a real Florida boy.</p><div class=\"callout\"><strong>Book note:</strong> New friends like Beatrice and Mullet Fingers, and the wild places and owls he learns to love, help Roy feel he belongs. Home becomes the people and places you care about.</div><h3>22. Ethics vs. Law: Mullet Fingers uses illegal methods (vandalism) to protect endangered animals. Is his civil disobedience justified?</h3><p>Answers will vary. Sample answer: I think it was right because he was protecting protected owls from being buried, and the company was hiding the truth.</p><div class=\"callout\"><strong>Book note:</strong> He did break small laws like trespassing, but Roy learns that something can be legal and still be wrong. Some people would say there were better ways, but he had no adult helping him.</div><h3>23. Comparing Courage: Compare the ways Roy, Beatrice, and Mullet Fingers demonstrate bravery.</h3><p>Answers will vary. Sample answer: Roy is brave because he gives his own name at the ER to get Mullet Fingers help, stands up to Dana, and speaks up for the owls. Mullet Fingers is brave because he breaks the rules, faces guard dogs, and hides in an owl burrow to save the owls. Beatrice is brave because she protects her stepbrother, hides him from authorities and Lonna, and stands up to Dana.</p><h3>24. Corporate Responsibility: How does Chuck Muckle represent corporate greed, and how do his actions contrast with the values of the Coconut Cove community?</h3><p>Answers will vary. Sample answer: Muckle shows greed because he puts making money and the opening party before the owls, hides the truth, and risks a protected species to build a pancake house. The community, including kids and parents, cares about the owls and wants to do the right thing.</p><h3>25. Symbolism: What do the burrowing owls symbolize to Mullet Fingers, and why do they become so important to Roy?</h3><p>Answers will vary. Sample answer: The owls symbolize innocence. They are tiny and helpless, so they stand for small, innocent things worth protecting. Mullet Fingers fights for them, and Roy comes to see that saving them matters.</p><h3>26. Adult Perspectives: Contrast the attitudes and decisions of Roy's parents with those of Mullet Fingers' mother, Lonna.</h3><p>Answers will vary. Sample answer: Roy's parents are supportive, listen to him, and let him make good choices. Lonna is cruel to her son, doesn't want him, sends him away, and only pays attention to him when TV cameras are around.</p><h3>27. Power Dynamics: How do different characters exercise power—both physical power (like Dana) and institutional power (like Chuck Muckle)?</h3><p>Answers will vary. Sample answer: Dana has physical power: he is big and bullies people by hurting them. Muckle has institutional power: a big company, money, connections, and the ability to fire people and hide paperwork. The kids beat both by sticking together and using the truth and attention from the news.</p><h3>28. Environment &amp; Progress: What message does Carl Hiaasen convey about the balance between economic development and wildlife protection?</h3><p>Answers will vary. Sample answer: Progress shouldn't destroy nature and wild animals. Be kind, speak up, and protect what you can, even if you're just a kid.</p><h3>29. Truth &amp; Transparency: Why was the missing Environmental Impact Statement critical to resolving the conflict at the construction site?</h3><p>Answers will vary. Sample answer: The EIS showed that owls really lived on the land. When it was missing from the city file, it suggested Mother Paula's was hiding something. It later turned up in Councilman Grandy's golf bag with $4,500, which showed the company knew about the owls and broke the rules.</p><h3>30. Personal Growth: How does Roy's perspective on Florida change after getting involved in saving the owls?</h3><p>Answers will vary. Sample answer: At first Roy thinks Florida is hot, flat, and boring compared to Montana. After the Everglades trip, the owls, and his new friends, he sees how wild and beautiful Florida is and feels he belongs there — a real Florida boy.</p>"}],"flashcards":[{"term":"Napoleon Bridger","def":"Mullet Fingers' real name"},{"term":"Carl Hiaasen","def":"Author of Hoot"},{"term":"Coconut Cove","def":"Florida town where Hoot takes place"},{"term":"Trace Middle School","def":"Roy's school"},{"term":"Montana","def":"State Roy lived in before moving to Florida"},{"term":"“Cowgirl”","def":"Nickname Dana calls Roy"},{"term":"Burrowing owls","def":"Protected animal that lives in burrows on the construction site"},{"term":"Mother Paula's All-American Pancake House","def":"Restaurant company building on the owls' land"},{"term":"He can catch mullet (fish) with his bare hands","def":"How Mullet Fingers got his nickname"},{"term":"Stepsister (they are stepsiblings)","def":"Beatrice's relationship to Mullet Fingers"},{"term":"Soccer","def":"Sport Beatrice plays"},{"term":"“Beatrice the Bear”","def":"Beatrice's nickname at school"},{"term":"Works for the Department of Justice","def":"Roy's dad's job"},{"term":"Kelly Colfax","def":"Reporter who received the permit file from Roy"},{"term":"Detective","def":"Job Officer Delinko dreams of having"},{"term":"Someone spray-painted the windows black","def":"What happened to Delinko's patrol car while he slept"},{"term":"Leroy Branitt","def":"Curly's real name"},{"term":"Construction foreman","def":"Curly's job at the site"},{"term":"Vice president of corporate relations for Mother Paula's","def":"Chuck Muckle's job"},{"term":"Kimberly Lou Dixon","def":"Actress who plays “Mother Paula” in the commercials"},{"term":"Live alligators","def":"What the vandals put in the portable toilets"},{"term":"Pulled them up and filled in the holes","def":"What the vandal did to the survey stakes"},{"term":"Their seats","def":"What was stolen from the bulldozers so they couldn't run"},{"term":"Guard dogs (Rottweilers)","def":"What bit Mullet Fingers at the site"},{"term":"A messy science experiment","def":"Excuse Roy and Beatrice used for the first-aid supplies and ground beef"},{"term":"His own name (Roy Eberhardt)","def":"Whose name Roy gave at the emergency room"},{"term":"A case of cigarettes","def":"What Roy claimed was hidden in the construction trailer to trick Dana"},{"term":"Rattraps","def":"What was stuck to Dana's shoes when he was caught at the site"},{"term":"Vice principal Miss Hennepin","def":"Who told Roy to write an apology letter to Dana"},{"term":"The Mother Paula's groundbreaking ceremony","def":"Event Roy left school at lunch to attend on Wednesday"},{"term":"Her camera","def":"What Mrs. Eberhardt lent Roy to get proof of the owls"},{"term":"In an owl burrow, with only his head above ground","def":"Where Mullet Fingers hid at the groundbreaking"},{"term":"“This Land Is Your Land”","def":"Song Beatrice led the kids in singing at the protest"},{"term":"The Environmental Impact Statement","def":"The report that proved there were owls (three nesting pairs)"},{"term":"In Councilman Grandy's golf bag (with $4,500)","def":"Where the missing report was finally found"},{"term":"Innocence (small, innocent things worth protecting)","def":"What the owls symbolize"},{"term":"Lonna Leep","def":"Mullet Fingers' mother"},{"term":"Leon Leep","def":"Beatrice's dad, a former NBA player"},{"term":"The Molly Bell","def":"Crab boat stuck up a creek where Roy watches Mullet Fingers catch a fish"},{"term":"He's never around a city long enough to make friendships that last","def":"Why Roy is sad and upset about moving so often (answer key)"},{"term":"He does not get along with his mother, Lonna","def":"Why Mullet Fingers refuses to live at home (answer key)"},{"term":"He did not want his parents to know he was in Coconut Cove","def":"Why Mullet Fingers used Roy's name in the ER (answer key)"},{"term":"Upset at first, but they understood why he wanted to help his friend","def":"How Roy's parents reacted when he lied to the hospital"},{"term":"He goes to Dana's house and gives him a written apology","def":"How Roy tries to stop Dana from harassing him on the bus (answer key)"},{"term":"To get promoted and have the case go on his permanent record","def":"What motivates Officer Delinko to investigate so thoroughly (answer key)"},{"term":"Aggressively, impatiently, meanly, and disrespectfully — and threatens to fire him","def":"How Chuck Muckle treats Curly"},{"term":"Environmental Impact Statement","def":"What “EIS” stands for"},{"term":"$4,500","def":"Amount Councilman Grandy was paid, found with the EIS in his golf bag"},{"term":"A copy of the file with the missing EIS","def":"What Roy's dad gives him at the end"},{"term":"Form a circle around Mullet Fingers, hold homemade signs, and sing “This Land Is Your Land”","def":"What the students do at the groundbreaking (answer key)"},{"term":"A real Florida boy","def":"What Roy calls himself at the end of the book"}],"quiz":[{"id":"hoot-001","group":"s01","type":"mc","q":"Where did Roy live before his family moved to Coconut Cove, Florida?","choices":["Montana","Wyoming","Alaska","Texas"],"answer":0,"explain":"Roy lived in Montana before Florida, and he liked it better than anywhere else his family had lived."},{"id":"hoot-002","group":"s01","type":"mc","q":"How does Roy feel about moving around so much?","choices":["Sad and upset, because he's never in one place long enough to make lasting friendships","Happy, because he loves meeting new people","He doesn't care at all where he lives","Excited, because he wants to see every state"],"answer":0,"explain":"According to the answer key, Roy is sad, upset, and mad that he is never around a city long enough to make friendships that last."},{"id":"hoot-003","group":"s01","type":"mc","q":"Why does Roy's family move so often?","choices":["His dad's job with the government","His mom's yoga classes","His dad plays professional sports","They like to explore new places"],"answer":0,"explain":"Mr. Eberhardt works for the government (the Department of Justice), so the family moves a lot."},{"id":"hoot-004","group":"s02","type":"mc","q":"What is Roy doing on the bus when he first notices the running boy?","choices":["Reading a comic book","Doing homework","Sleeping","Talking with Garrett"],"answer":0,"explain":"Roy usually reads comic books on the bus, and Dana forces his head up so he sees the boy out the window."},{"id":"hoot-005","group":"s02","type":"mc","q":"What makes Roy notice the running boy out the bus window?","choices":["Dana squeezes his head and forces him to look up","The bus driver shouts about a runaway","He hears a police siren","Beatrice taps him on the shoulder"],"answer":0,"explain":"Dana squeezes Roy's head against the window, and that's when Roy sees the boy running."},{"id":"hoot-006","group":"s02","type":"mc","q":"What is strange about the running boy?","choices":["He has no shoes, no backpack, and no school books","He is riding a skateboard to school","He is wearing a soccer uniform","He is chasing the bus with a tall girl"],"answer":0,"explain":"The boy is barefoot and carries nothing for school, so Roy can't stop wondering about him."},{"id":"hoot-007","group":"s03","type":"mc","q":"What nickname does Dana Matherson call Roy?","choices":["“Cowgirl”","“Cowboy”","“Shorty”","“Snowboy”"],"answer":0,"explain":"Dana calls Roy “Cowgirl” because Roy comes from Montana."},{"id":"hoot-008","group":"s03","type":"mc","q":"On Friday, what happens when Roy tries to get off the bus to chase the boy?","choices":["Dana chokes him, and Roy punches back and breaks Dana's nose","Beatrice pulls Dana off him","The bus driver stops the bus and scolds Dana","Roy trips on the steps and breaks his arm"],"answer":0,"explain":"Dana chokes Roy from behind, Roy punches him in the nose, and then races off the bus."},{"id":"hoot-009","group":"s03","type":"mc","q":"What is Roy's punishment for the bus fight?","choices":["Miss Hennepin suspends him from the bus and orders an apology letter to Dana","He is expelled from Trace Middle School","Dana is suspended and Roy gets a reward","Nothing happens to anyone"],"answer":0,"explain":"The vice principal, Miss Hennepin, punishes Roy instead of Dana."},{"id":"hoot-010","group":"s04","type":"mc","q":"Which business plans to build a new location on the land?","choices":["Mother Paula's All-American Pancake House","Captain Crab's Seafood Shack","Coconut Cove Burger Barn","Miss Mary's Ice Cream Parlor"],"answer":0,"explain":"Mother Paula's All-American Pancake House wants to build on the lot."},{"id":"hoot-011","group":"s04","type":"mc","q":"Where is the Mother Paula's construction site?","choices":["The corner of East Oriole and Woodbury","Next to Trace Middle School","On the golf course","Inside the junkyard"],"answer":0,"explain":"The empty lot is at East Oriole and Woodbury."},{"id":"hoot-012","group":"s05","type":"mc","q":"What protected animal lives in burrows on the construction site?","choices":["Burrowing owls","Armadillos","Alligators","Cottonmouth snakes"],"answer":0,"explain":"Tiny burrowing owls live in holes in the ground on the lot."},{"id":"hoot-013","group":"s05","type":"mc","q":"About how big are the burrowing owls?","choices":["Only eight or nine inches tall","About three feet tall","About two feet tall","About as big as a bald eagle"],"answer":0,"explain":"They are tiny owls, only about eight or nine inches tall."},{"id":"hoot-014","group":"s05","type":"mc","q":"What does Roy buy at a bait shop to feed the owls?","choices":["Live crickets","Earthworms","Minnows","Hamburger"],"answer":0,"explain":"Owls eat bugs, not hamburger, so Roy buys live crickets."},{"id":"hoot-015","group":"s06","type":"mc","q":"Which of these did the vandal NOT do at the construction site?","choices":["Burn down the construction trailer","Put live alligators in the portable toilets","Pull up the survey stakes and fill the holes","Take the seats off the bulldozers"],"answer":0,"explain":"The vandal never burned anything; the pranks were meant to delay construction without destroying things."},{"id":"hoot-016","group":"s06","type":"mc","q":"What did Officer Delinko find inside the portable toilet tanks?","choices":["Live alligators","Rattlesnakes","Raccoons","Snapping turtles"],"answer":0,"explain":"He shined his flashlight into a toilet and found live alligators."},{"id":"hoot-017","group":"s06","type":"mc","q":"What did the vandal do to the survey stakes?","choices":["Pulled them all up and filled in the holes","Painted them bright pink","Stole them and sold them","Moved them into the road"],"answer":0,"explain":"The stakes mark where to build, so pulling them up delayed the work."},{"id":"hoot-018","group":"s07","type":"mc","q":"What happens while Officer Delinko is asleep in his patrol car?","choices":["Someone spray-paints his windows black","Someone slashes his tires","Someone steals his radio","Someone puts an alligator in his trunk"],"answer":0,"explain":"Delinko wakes up late in a dark car because the windows were painted black."},{"id":"hoot-019","group":"s07","type":"mc","q":"Who pounds on Delinko's car and opens the door to wake him?","choices":["Curly, the foreman","Chuck Muckle","Roy","The police captain"],"answer":0,"explain":"Curly finds the sleeping officer and bangs on his car."},{"id":"hoot-020","group":"s07","type":"mc","q":"What happens to Delinko because he fell asleep on duty?","choices":["He is put on desk duty and embarrassed","He is fired right away","He gets a promotion","He is sent back to Boston"],"answer":0,"explain":"The story made it into the paper, and Delinko was punished with desk duty."},{"id":"hoot-021","group":"s08","type":"mc","q":"How did Mullet Fingers get his nickname?","choices":["He can catch mullet (fish) with his bare hands","He sells mullet at the market","He cooks mullet for his friends","He wears a mullet-shaped ring"],"answer":0,"explain":"Mullet are slippery fish, and he can grab them by hand."},{"id":"hoot-022","group":"s08","type":"mc","q":"What is a mullet, in this story?","choices":["A small, slippery silver fish","A type of snake","A kind of owl","A type of turtle"],"answer":0,"explain":"Mullet are slippery, silvery baitfish."},{"id":"hoot-023","group":"s08","type":"mc","q":"Where does Roy watch Mullet Fingers catch a mullet?","choices":["On the old crab boat, the Molly Bell, stuck up a creek","On the dock at the pancake house","At the junkyard","On an Everglades airboat"],"answer":0,"explain":"The Molly Bell was swept up a creek by a storm surge; its pilothouse is a perfect lookout."},{"id":"hoot-024","group":"s09","type":"mc","q":"Why does Mullet Fingers refuse to live at home with his mother and stepfather?","choices":["He does not get along with his mother, Lonna","He wants to live in Montana","He is too young to go to school","His stepfather Leon sent him away"],"answer":0,"explain":"Mullet Fingers doesn't get along with his mother. She keeps sending him away to schools, so he runs away and lives on his own."},{"id":"hoot-025","group":"s09","type":"mc","q":"What did Lonna do when Mullet Fingers brought home an orphaned baby raccoon?","choices":["She sent him away to a military school","She let him keep it","She took the raccoon to a vet","She called the police"],"answer":0,"explain":"After the raccoon, Lonna shipped him off to military school."},{"id":"hoot-026","group":"s09","type":"mc","q":"Where does Mullet Fingers stay while he's on the run?","choices":["In an old ice cream truck at the junkyard, and a camp by the golf course","In Roy's garage","In the Leeps' attic","In a motel"],"answer":0,"explain":"He moves between his camp near the golf course and the abandoned ice cream truck."},{"id":"hoot-027","group":"s10","type":"mc","q":"What injured Mullet Fingers at the construction site?","choices":["Guard dogs bit him","A snake bit him","He fell off a bulldozer","An alligator scraped him"],"answer":0,"explain":"Mullet Fingers was bitten by guard dogs, and the bites became infected."},{"id":"hoot-028","group":"s10","type":"mc","q":"What excuse do Roy and Beatrice give Mrs. Eberhardt for the first-aid supplies and ground beef?","choices":["A messy science experiment","A bake sale","A camping trip","Feeding a stray dog"],"answer":0,"explain":"They said they were working on a messy science project."},{"id":"hoot-029","group":"s10","type":"mc","q":"Why was Mullet Fingers reaching through the fence when the dogs bit him?","choices":["He was putting cottonmouth snakes on the site to scare the dogs away","He was feeding the dogs hamburger","He was trying to steal the bulldozer","He was rescuing a kitten"],"answer":0,"explain":"The snakes had their mouths taped shut, and he later set them free somewhere safe."},{"id":"hoot-030","group":"s11","type":"mc","q":"Why does Beatrice first threaten Roy?","choices":["She's protecting Mullet Fingers and wants Roy to stay out of it","Roy told on her to Miss Hennepin","Roy joined her soccer team","Roy borrowed her bike without asking"],"answer":0,"explain":"Beatrice doesn't want Roy poking around about the running boy, her stepbrother."},{"id":"hoot-031","group":"s11","type":"mc","q":"What changes Beatrice's attitude toward Roy?","choices":["She sees he brought shoes for the boy and realizes he cares and can be trusted","Roy gives her money","Roy's dad is a police officer","Roy wins a fight with Dana"],"answer":0,"explain":"The shoebox full of shoes shows Roy means no harm."},{"id":"hoot-032","group":"s11","type":"mc","q":"How does Beatrice rescue Roy from Dana in the school?","choices":["She pulls Dana off him and ties him to the flagpole in his underwear","She calls the police","She tells Miss Hennepin","She hits Dana with a soccer ball"],"answer":0,"explain":"Beatrice saves Roy from the janitor's closet and then needs his help for Mullet Fingers."},{"id":"hoot-033","group":"s12","type":"mc","q":"At the emergency room, whose name is used for Mullet Fingers?","choices":["Roy's own name","Dana Matherson's","Garrett's","Leon Leep's"],"answer":0,"explain":"Roy gave his own name, address and phone number so Mullet Fingers could get treated."},{"id":"hoot-034","group":"s12","type":"mc","q":"Why does Mullet Fingers use Roy's name in the emergency room?","choices":["He did not want his parents to know he was in Coconut Cove","He wanted to play a joke on Roy","He forgot his own name","He was too sleepy to talk"],"answer":0,"explain":"According to the answer key, he used Roy's name because he didn't want his parents to know he was in Coconut Cove."},{"id":"hoot-035","group":"s12","type":"mc","q":"Who is pretending to be “Roy” when the Eberhardts rush to the hospital?","choices":["Mullet Fingers, who then escapes through a window","Beatrice","Dana","Garrett"],"answer":0,"explain":"Mullet Fingers sneaks out a window, and the hospital can't find their patient."},{"id":"hoot-036","group":"s13","type":"mc","q":"What does Mrs. Eberhardt tell Roy about lying?","choices":["It's not okay to lie, even to protect a friend, but use your best judgment when right and wrong aren't clear","Lying is always fine if you don't get caught","He is grounded for a month","He must never help a friend again"],"answer":0,"explain":"She tells him she loves him and that some situations aren't clear-cut."},{"id":"hoot-037","group":"s13","type":"mc","q":"What does Mr. Eberhardt tell Roy when Roy explains about the owls?","choices":["The company probably has all its permits, but he'll think about it","He will stop the pancake house tonight","Owls can't be protected by law","He wants Roy to forget the owls"],"answer":0,"explain":"Mr. Eberhardt says the company likely has permits, which shocks Roy, and he suggests a walk."},{"id":"hoot-038","group":"s13","type":"mc","q":"How do Roy's parents feel about Roy at the end of that night?","choices":["They are proud of him","They are ashamed of him","They want to send him to boarding school","They are too busy to care"],"answer":0,"explain":"Mrs. Eberhardt says she and Mr. Eberhardt are proud of him."},{"id":"hoot-039","group":"s14","type":"mc","q":"What does Roy's apology letter to Dana promise?","choices":["Not to hit Dana again if Dana stops bothering him on the bus","To do Dana's homework","To leave Trace Middle School","To pay Dana money"],"answer":0,"explain":"The letter is really a truce offer."},{"id":"hoot-040","group":"s14","type":"mc","q":"How does Roy act when Dana confronts him on the bus later?","choices":["He stays calm and stops acting scared","He hides behind the bus driver","He begs Dana for mercy","He throws his comic at Dana"],"answer":0,"explain":"Roy tells Dana to hit him and then goes back to his comic, refusing to show fear."},{"id":"hoot-041","group":"s14","type":"mc","q":"Where does Roy hand-deliver his apology letter?","choices":["Dana's house","Miss Hennepin's office","The bus stop","Beatrice's locker"],"answer":0,"explain":"Mrs. Eberhardt drives Roy to Dana's house, where Dana has gauze on his nose and two black eyes."},{"id":"hoot-042","group":"s15","type":"mc","q":"What does Roy tell Dana is hidden in the construction trailer?","choices":["A case of cigarettes","A pile of cash","A set of video games","A gold trophy"],"answer":0,"explain":"Roy lies that there's a case of cigarettes (his weakness) so Dana will break in."},{"id":"hoot-043","group":"s15","type":"mc","q":"What is stuck to Dana's shoes when Officer Delinko catches him?","choices":["Rattraps","Glue","Handcuffs","Banana peels"],"answer":0,"explain":"Curly set rattraps around the trailer, and Dana stepped into them."},{"id":"hoot-044","group":"s15","type":"mc","q":"What name does Dana give when Curly catches him at the site?","choices":["Roy Eberhardt","Napoleon Bridger","Mullet Fingers","Garrett"],"answer":0,"explain":"Dana gave Roy's name, but Delinko knew it wasn't Roy."},{"id":"hoot-045","group":"s16","type":"mc","q":"What job does Officer Delinko dream of having?","choices":["Detective","Police chief","Reporter","Construction foreman"],"answer":0,"explain":"Delinko is bored with traffic work and wants to be a detective."},{"id":"hoot-046","group":"s16","type":"mc","q":"According to the answer key, why does Officer Delinko investigate the construction site events so thoroughly?","choices":["To get promoted and have the case go on his permanent record","To win a prize from Mother Paula's","To get back at Curly","To move back to Boston"],"answer":0,"explain":"The answer key says Delinko wants to get promoted and have the case on his permanent record. (He also wants to redeem himself after falling asleep.)"},{"id":"hoot-047","group":"s16","type":"mc","q":"What makes Delinko start to care about the owls?","choices":["He finds a baby owl in a burrow and realizes what will happen to it","Roy gives him a speech","He reads a newspaper story","Muckle orders him to protect them"],"answer":0,"explain":"When Delinko discovers a baby owl in a burrow, he realizes the bulldozers would bury it."},{"id":"hoot-048","group":"s17","type":"mc","q":"How does Chuck Muckle treat Curly when the project falls behind?","choices":["Aggressively, impatiently, and disrespectfully, and he threatens to fire him","He praises him and gives him a raise","He apologizes to him","He offers to help dig"],"answer":0,"explain":"Muckle won't listen to Curly's problems and threatens his job."},{"id":"hoot-049","group":"s17","type":"mc","q":"Why does Muckle need the groundbreaking done quickly?","choices":["Kimberly Lou Dixon has only a short window before she starts filming a movie","The mayor is leaving town","The owls' nesting season is ending","The building permit is about to expire"],"answer":0,"explain":"Dixon plays Mother Paula, and her filming schedule limits the date."},{"id":"hoot-050","group":"s17","type":"mc","q":"What does Muckle tell Curly to say if an owl shows up?","choices":["That it's a chicken","That it's a bat","That it's an escaped pet","Nothing; call the police"],"answer":0,"explain":"Muckle insists there are no owls and says to call any that appear chickens."},{"id":"hoot-051","group":"s18","type":"mc","q":"What does Muckle insist about the owls even though Curly knows better?","choices":["There are no owls on the property","The owls are only a rumor spread by kids","The owls will move away on their own","The owls only come out at night"],"answer":0,"explain":"Muckle tells Curly there are no owls and that it isn't illegal to destroy empty nests."},{"id":"hoot-052","group":"s18","type":"mc","q":"Where does the missing report about the owls finally turn up?","choices":["In Councilman Grandy's golf bag, along with $4,500","In Curly's trailer","In Muckle's limo","In the City Hall basement"],"answer":0,"explain":"The hidden report showed the company had evidence of the owls."},{"id":"hoot-053","group":"s18","type":"mc","q":"How many pairs of nesting owls did the Environmental Impact Statement document?","choices":["Three pairs","One pair","Ten pairs","None"],"answer":0,"explain":"The report that was hidden showed three pairs of nesting burrowing owls on the site."},{"id":"hoot-054","group":"s19","type":"mc","q":"What does Mr. Eberhardt do with the permit file from City Hall?","choices":["Copies it, takes it to environmental lawyers, then has Roy give it to a reporter","Throws it away","Gives it to Muckle","Keeps it in a drawer"],"answer":0,"explain":"Mr. Eberhardt used his know-how to get the file to the press."},{"id":"hoot-055","group":"s19","type":"mc","q":"What does Mrs. Eberhardt lend Roy for the owl project?","choices":["Her camera","Her car","Her binoculars","Her laptop"],"answer":0,"explain":"Roy and Mullet Fingers use her camera to try to get a photo of an owl."},{"id":"hoot-056","group":"s19","type":"mc","q":"What do Roy's parents allow him to do on groundbreaking day?","choices":["Leave school at lunch to attend with a permission note","Skip the whole week of school","Stay home and watch on TV","Borrow the family car"],"answer":0,"explain":"Mr. Eberhardt says yes as long as Roy behaves."},{"id":"hoot-057","group":"s20","type":"mc","q":"What do the kids do when Muckle wants Mullet Fingers dug out of the burrow?","choices":["Link arms around Mullet Fingers to protect him","Run away","Leave the site","Call the police"],"answer":0,"explain":"Roy, Beatrice, and the students form a circle around him."},{"id":"hoot-058","group":"s20","type":"mc","q":"Which song does Beatrice lead the kids in singing?","choices":["“This Land Is Your Land”","“Amazing Grace”","“Happy Birthday”","“The Star-Spangled Banner”"],"answer":0,"explain":"Singing it helps show the land belongs to everyone, including the owls."},{"id":"hoot-059","group":"s20","type":"mc","q":"Where is Mullet Fingers during the groundbreaking protest?","choices":["In an owl burrow with just his head above ground","Up in a tree","On top of a bulldozer","Inside the limo"],"answer":0,"explain":"He squeezes into a burrow and says that if they bury the owls they must bury him too."},{"id":"hoot-060","group":"s21","type":"mc","q":"How does Roy's idea of home change from the beginning to the end of the book?","choices":["At first he misses Montana; by the end he calls himself a real Florida boy","He stays homesick the whole book","He starts hating his new friends","He decides to move back"],"answer":0,"explain":"According to the answer key, Roy misses Montana at first, but by the end he calls himself a real Florida boy."},{"id":"hoot-061","group":"s21","type":"mc","q":"Which best describes Roy's idea of home by the end?","choices":["Home is the people and places you care about","Only the town where you were born","Only a place with mountains","Any place you pay rent"],"answer":0,"explain":"Roy finds belonging through friendship and caring for the owls."},{"id":"hoot-062","group":"s22","type":"mc","q":"Why does Mullet Fingers break the law?","choices":["To protect the owls from being buried","To get on the news","Because he hates Curly","Because he wants to be arrested"],"answer":0,"explain":"He trespasses and pranks the site to stop the bulldozers."},{"id":"hoot-063","group":"s22","type":"mc","q":"What lesson does Roy learn about laws and what's right?","choices":["Something can be legal and still be wrong","Laws are always right","You should never break any rule","If it's illegal it's always wrong"],"answer":0,"explain":"Roy realizes permits didn't make burying owls right."},{"id":"hoot-064","group":"s23","type":"mc","q":"How is Roy brave?","choices":["He helps Mullet Fingers at the ER, stands up to Dana, and speaks up for the owls","He fights Dana every day","He never gets scared","He hides from Beatrice"],"answer":0,"explain":"Roy takes risks for what he believes is right."},{"id":"hoot-065","group":"s23","type":"mc","q":"How is Beatrice brave?","choices":["She protects her stepbrother, hides him from adults, and stands up to Dana","She never talks to anyone","She runs away from home","She sneaks into Mother Paula's"],"answer":0,"explain":"Beatrice looks out for Mullet Fingers when the adults won't."},{"id":"hoot-066","group":"s23","type":"mc","q":"Which action best shows Mullet Fingers' courage?","choices":["Hiding in an owl burrow to face the company and the crowd","Running from the police","Staying hidden in the junkyard","Avoiding Roy"],"answer":0,"explain":"He stands up to the powerful company by himself."},{"id":"hoot-067","group":"s24","type":"mc","q":"How does Chuck Muckle show corporate greed?","choices":["He puts profit and the party before the owls and hides the truth","He donates money to save the owls","He hires an owl expert","He cancels the pancake house"],"answer":0,"explain":"Muckle pretends there are no owls so the restaurant can be built."},{"id":"hoot-068","group":"s24","type":"mc","q":"How do the people of Coconut Cove contrast with Muckle?","choices":["Kids and parents care about the owls and stand up for what's right","They want the pancake house no matter what","They don't care about animals","They all side with Muckle"],"answer":0,"explain":"Students, parents, and even Kimberly Lou Dixon join the protest."},{"id":"hoot-069","group":"s24","type":"mc","q":"What happens to Mother Paula's at the end?","choices":["The company says the land will become an owl sanctuary and later cancels the location","The pancake house opens early","Muckle is promoted","The owls are moved away"],"answer":0,"explain":"After the scandal the company promises to preserve the property, and Muckle is demoted."},{"id":"hoot-070","group":"s25","type":"mc","q":"What do the burrowing owls symbolize in Hoot?","choices":["Innocence","Wisdom and intelligence","Wealth","Danger"],"answer":0,"explain":"The tiny, helpless owls stand for innocence and small things worth protecting."},{"id":"hoot-071","group":"s25","type":"mc","q":"What does the owls' situation show about the book's message?","choices":["Small, innocent things need protection from powerful interests","Wild animals are a problem for builders","Only big animals matter","Owls can take care of themselves"],"answer":0,"explain":"Roy and his friends protect the owls against a big company."},{"id":"hoot-072","group":"s26","type":"mc","q":"How do Roy's parents compare with Mullet Fingers' mother?","choices":["Roy's parents are supportive, while Lonna is cruel and doesn't want her son","Both are equally supportive","Both are strict","Lonna is more supportive"],"answer":0,"explain":"The Eberhardts listen and trust Roy, while Lonna sends her son away."},{"id":"hoot-073","group":"s26","type":"mc","q":"How does Lonna act when she shows up at the protest?","choices":["She acts like a proud mom for the cameras to get attention","She scolds the reporters","She apologizes to Roy","She hides from the news"],"answer":0,"explain":"She dresses up and tells reporters she's proud of her son, but really wants attention."},{"id":"hoot-074","group":"s27","type":"mc","q":"What kind of power does Dana have?","choices":["Physical power: he's big and bullies people","Money and connections","A lot of friends","The power to fire people"],"answer":0,"explain":"Dana relies on size and strength to bully."},{"id":"hoot-075","group":"s27","type":"mc","q":"What kind of power does Chuck Muckle have?","choices":["Institutional power: a big company, money, and connections","Physical strength","Musical talent","Luck"],"answer":0,"explain":"Muckle uses his company, the city officials, and the ability to fire people."},{"id":"hoot-076","group":"s27","type":"mc","q":"What finally defeats both Dana and Muckle?","choices":["Kids standing together and the truth getting out","More bullies","Bigger bulldozers","Hiding from everyone"],"answer":0,"explain":"Roy's plans, teamwork, and the news make the difference."},{"id":"hoot-077","group":"s28","type":"mc","q":"What is the author's message about environment and progress?","choices":["Progress shouldn't destroy nature; protect what you can and be kind","Nature always loses","Only adults can protect nature","Progress is always good"],"answer":0,"explain":"The book's message is about caring for the environment even when business wants otherwise."},{"id":"hoot-078","group":"s28","type":"mc","q":"Which statement would the author most likely agree with?","choices":["Protecting wildlife matters even when development is profitable","Restaurants are more important than owls","Kids should never speak up","Laws always protect animals"],"answer":0,"explain":"The story sides with the owls and the kids who defend them."},{"id":"hoot-079","group":"s29","type":"mc","q":"What is an Environmental Impact Statement?","choices":["A report on how a building project would affect nature and wildlife","A list of all the company's restaurants","A permit to hold a party","A newspaper ad"],"answer":0,"explain":"Companies need one to show how construction affects the environment."},{"id":"hoot-080","group":"s29","type":"mc","q":"What did the missing Environmental Impact Statement suggest?","choices":["Mother Paula's either never filed it or hid it on purpose","The owls were not real","The city didn't care about permits","Curly lost it"],"answer":0,"explain":"Missing papers showed a violation and a cover-up."},{"id":"hoot-081","group":"s29","type":"mc","q":"Who does Roy hand the permit file to?","choices":["Reporter Kelly Colfax","Officer Delinko","Miss Hennepin","Councilman Grandy"],"answer":0,"explain":"Roy hands it to Kelly Colfax so the news can report it."},{"id":"hoot-082","group":"s30","type":"mc","q":"What helps change Roy's view of Florida?","choices":["The Everglades trip, the owls, and his new friends","Winning a skateboard contest","Moving to a bigger house","Being suspended from the bus"],"answer":0,"explain":"Roy sees how wild and beautiful Florida is."},{"id":"hoot-083","group":"s30","type":"mc","q":"By the end, how does Roy feel about Montana?","choices":["He doesn't miss it as much, though he still misses real seasons","He is angry about it","He plans to move back","He has forgotten it"],"answer":0,"explain":"Florida has become home."},{"id":"hoot-084","group":"s30","type":"mc","q":"What does Roy want to do again at the end of the book?","choices":["Catch a mullet with his hands, like a real Florida boy","Go to the pancake house","Fight Dana","Run away to Montana"],"answer":0,"explain":"He tries to catch one at the Molly Bell and will keep trying."},{"id":"hoot-085","group":"c_beatrice","type":"mc","q":"Which character is a tall, strong soccer player who acts tough to protect her stepbrother?","choices":["Beatrice Leep","Kimberly Lou Dixon","Lonna Leep","Garrett"],"answer":0,"explain":"Beatrice is known as “the Bear.”"},{"id":"hoot-086","group":"c_mullet","type":"mc","q":"Which words best describe Mullet Fingers?","choices":["Brave, outdoorsy, and determined","Prissy, prim, and glamorous","Bossy, rude, and aggressive","Lazy, selfish, and cruel"],"answer":0,"explain":"He loves nature and keeps trying to save the owls."},{"id":"hoot-087","group":"c_curly","type":"mc","q":"Which words best describe Curly, the foreman?","choices":["Cranky, unsmiling, and desperate to keep his job","Cheerful, kind, and generous","Brave, outdoorsy, and determined","Prissy, prim, and glamorous"],"answer":0,"explain":"Curly is stressed, rude, and afraid of Muckle."},{"id":"hoot-088","group":"c_dana","type":"mc","q":"Which character is a big, strong school bully?","choices":["Dana Matherson","Garrett","Mr. Ryan","Kalo"],"answer":0,"explain":"Dana bullies younger kids and chokes Roy."},{"id":"hoot-089","group":"c_muckle","type":"mc","q":"Who is the vice president of corporate relations for Mother Paula's?","choices":["Chuck Muckle","Leon Leep","Councilman Grandy","Curly"],"answer":0,"explain":"Muckle is the main villain, who pretends there are no owls."},{"id":"hoot-090","group":"c_dixon","type":"mc","q":"Who plays “Mother Paula” in the commercials?","choices":["Kimberly Lou Dixon","Lonna Leep","Mrs. Eberhardt","Miss Hennepin"],"answer":0,"explain":"Dixon is a former Miss America runner-up and actress."},{"id":"hoot-091","group":"c_dixon","type":"mc","q":"What does Kimberly Lou Dixon do at the groundbreaking?","choices":["She sides with the owls and joins the circle of kids","She fires Curly","She helps Muckle arrest Mullet Fingers","She leaves in her limo"],"answer":0,"explain":"She says she doesn't want to hurt birds and joins the protest."},{"id":"hoot-092","group":"c_leon","type":"mc","q":"Which adult is a former NBA player who wants Mullet Fingers to come home?","choices":["Leon Leep","Mr. Eberhardt","Mr. Matherson","Mr. Ryan"],"answer":0,"explain":"Leon is nicer than Lonna, though he is not very involved at home."},{"id":"hoot-093","group":"c_lonna","type":"mc","q":"Which adult is rude and loves attention?","choices":["Lonna Leep","Mrs. Eberhardt","Miss Hennepin","Mrs. Matherson"],"answer":0,"explain":"Lonna is cruel to her son and craves the spotlight."},{"id":"hoot-094","group":"c_eberhardt","type":"mc","q":"Which words describe Roy's parents?","choices":["Understanding, nice, and helpful","Rude, mean, and bossy","Stern, strict, and unfair","Selfish and cruel"],"answer":0,"explain":"The Eberhardts support Roy and help the owls."},{"id":"hoot-095","group":"c_roy","type":"mc","q":"Which words best describe Roy Eberhardt?","choices":["Helpful, understanding, and honest","Bossy and aggressive","Prissy and prim","Lazy and dishonest"],"answer":0,"explain":"Roy is thoughtful and kind, and stands up for what's right."},{"id":"hoot-096","group":"c_delinko","type":"mc","q":"Which words best describe Officer Delinko by the end?","choices":["Ambitious, but heartfelt toward the owls","Cruel and selfish","Bossy and rude","Lazy and uncaring"],"answer":0,"explain":"He wants to be a detective but comes to care about the owls."},{"id":"hoot-097","group":"c_mr","type":"mc","q":"What is Mr. Eberhardt's job?","choices":["He works for the Department of Justice","He is a police captain","He is a construction foreman","He is a reporter"],"answer":0,"explain":"His job helps him know how to handle the permit file."},{"id":"hoot-098","group":"c_garrett","type":"mc","q":"Which classmate is Roy's skateboarding friend, known for fake-fart noises?","choices":["Garrett","Mr. Ryan","Dana","Kalo"],"answer":0,"explain":"Garrett is a class clown who befriends Roy."},{"id":"hoot-099","group":"c_hennepin","type":"mc","q":"Who is the vice principal who suspends Roy from the bus?","choices":["Miss Hennepin","Mrs. Matherson","Dr. Gonzalez","Mrs. Eberhardt"],"answer":0,"explain":"Miss Hennepin punishes Roy rather than Dana."},{"id":"hoot-100","group":"s11","type":"mc","q":"What does Beatrice realize about Roy that changes her attitude?","choices":["That he cares, is trustworthy, and doesn't want to get Mullet Fingers in trouble","That he is stronger than Dana","That he plays soccer","That his dad works for the police"],"answer":0,"explain":"The answer key says Beatrice changes because she realizes Roy cares, is trustworthy, and doesn't want to get Mullet Fingers in trouble."},{"id":"hoot-101","group":"s10","type":"mc","q":"According to the answer key, how do Roy and Beatrice help Mullet Fingers after the dog bite?","choices":["They bandage him with supplies from Roy's house, then take him to the hospital","They call Officer Delinko","They hide him at school","They take him to Miss Hennepin"],"answer":0,"explain":"He was bitten by a Rottweiler; Roy and Beatrice bandaged him and took him to the hospital."},{"id":"hoot-102","group":"s13","type":"mc","q":"How do Roy's parents react when they find out he lied to hospital personnel to help a friend?","choices":["They were upset at first, but understood why he wanted to help his friend","They were delighted and gave him a prize","They didn't care at all","They refused to ever speak to him again"],"answer":0,"explain":"His parents were upset at first but understood. Mrs. Eberhardt said lying isn't okay, but to use his best judgment."},{"id":"hoot-103","group":"s14","type":"mc","q":"What strategy does Roy use to stop Dana Matherson from harassing him on the bus?","choices":["He goes to Dana's house and gives him a written apology","He asks the bus driver for a new seat","He reports Dana to the police","He gets Mr. Eberhardt to call Dana's parents"],"answer":0,"explain":"According to the answer key, Roy goes to Dana's house and gives him a written apology (an apology that also offers a truce)."},{"id":"hoot-104","group":"s15","type":"mc","q":"What trick does Roy play to lure Dana to the construction site?","choices":["He tells Dana he hid cigarettes in the trailer","He tells Dana a prize is hidden in the trailer","He dares Dana to climb a bulldozer","He says Beatrice is waiting there"],"answer":0,"explain":"Cigarettes were Dana's weakness, so he went to the site and got caught."},{"id":"hoot-105","group":"s16","type":"mc","q":"What does Officer Delinko hope will go on his permanent record?","choices":["Solving the construction site case so he can get promoted","Falling asleep in his patrol car","Fixing his spray-painted windows","Finding the alligators"],"answer":0,"explain":"According to the answer key, he investigates thoroughly to get promoted and have the case on his permanent record."},{"id":"hoot-106","group":"s17","type":"mc","q":"Which words best describe how Muckle treats Curly?","choices":["Aggressive, impatient, mean, and disrespectful","Kind, patient, and helpful","Cheerful and generous","Shy and quiet"],"answer":0,"explain":"Muckle threatens to fire Curly and won't listen to his problems."},{"id":"hoot-107","group":"s18","type":"mc","q":"Who was paid $4,500 and had the Environmental Impact Statement in his golf bag?","choices":["Councilman Grandy","Curly","Chuck Muckle","Mr. Ryan"],"answer":0,"explain":"The EIS was evidence that Mother Paula's management knew about the owls."},{"id":"hoot-108","group":"s18","type":"mc","q":"What does EIS stand for?","choices":["Environmental Impact Statement","Emergency Inspection Survey","Endangered Island Species","Electric Installation Study"],"answer":0,"explain":"The EIS is the report that showed owls on the site."},{"id":"hoot-109","group":"s19","type":"mc","q":"According to the answer key, how do Roy's parents help him handle the construction company situation?","choices":["They support him, let him go to the Groundbreaking Ceremony, and Dad gives him a copy of the file with the missing EIS","They take him out of school for a week","They write a letter to Muckle","They tell him to stay out of it"],"answer":0,"explain":"The Eberhardts supported Roy's plan and Dad handed him the file to give to the reporter."},{"id":"hoot-110","group":"s19","type":"mc","q":"What does Mr. Eberhardt give Roy to hand to the reporter?","choices":["A copy of the file with the missing EIS","Mrs. Eberhardt's camera","A letter from the mayor","Dana's police report"],"answer":0,"explain":"The file showed the Environmental Impact Statement was missing."},{"id":"hoot-111","group":"s20","type":"mc","q":"What do the students do at the groundbreaking ceremony?","choices":["Form a circle around Mullet Fingers, hold homemade signs, and sing “This Land Is Your Land”","Hide in the limo and wait for the mayor","Dig up the lot with shovels","Leave school and go home"],"answer":0,"explain":"The students protected Mullet Fingers and protested for the owls."},{"id":"hoot-112","group":"s21","type":"mc","q":"At the end of the book, what does Roy call himself?","choices":["A real Florida boy","A Montana cowboy","A city kid","An Everglades guide"],"answer":0,"explain":"Roy misses Montana at first, but ends up a real Florida boy."},{"id":"hoot-113","group":"s06","type":"mc","q":"Which of these is a vandalism act at the construction site?","choices":["Putting cottonmouth moccasins on the grounds","Setting the trailer on fire","Stealing the pancake batter","Breaking the windows of Muckle's limo"],"answer":0,"explain":"Vandals pulled stakes, put alligators in the port-a-potties, and put cottonmouths on the grounds."},{"id":"hoot-114","group":"s07","type":"mc","q":"How does Officer Delinko get caught off guard while guarding the site overnight?","choices":["He falls asleep in his patrol car and the windows get spray-painted black","He gets locked in the trailer","He chases an alligator into the woods","He is attacked by the guard dogs"],"answer":0,"explain":"Mullet Fingers spray-painted his windows while he slept."},{"id":"hoot-115","group":"s01","type":"mc","q":"According to the answer key, where did Roy live before Coconut Cove?","choices":["Montana","Wyoming","Alaska","Colorado"],"answer":0,"explain":"Roy lived in Montana before Florida."}]},
    "religion-ch5": {"sections":[{"id":"patriarchs","title":"Patriarchs & Canaan","short":"1. Patriarchs","html":"<h2>The Patriarchs Are Our Ancestors in Faith</h2><p>Items marked <strong style=\"color:#ff69b4\">⭐ likely on test</strong> were highlighted in pink on your guided notes — know those first!</p>\n<ul style=\"padding-left:0\"><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">At the end of Genesis, God formed a <b>people</b> for himself.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">A <b>patriarch</b> is a <b>father or founder</b> of a clan. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">A <b>clan</b> is a group of related <b>people</b>.</li></ul>\n<h3>The four Old Testament patriarchs & matriarchs</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Abraham</b> &amp; <b>Sarah</b> <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Isaac</b> &amp; <b>Rebekah</b> <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Jacob</b> &amp; <b>Rachel / Leah</b> <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Joseph</b> <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<h3>The land of Canaan</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">The patriarchs and matriarchs lived in and traveled throughout the land of <b>Canaan</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Canaan was an area in western Palestine that included most of present-day <b>Israel</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Canaan was made up of many <b>city-states</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">The people there thought of one another as distant <b>cousins</b> because they spoke the same language. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<h3>Ancestors in faith</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">The Patriarchs and Matriarchs are our <b>ancestors</b> in faith. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">We call them our ancestors because they are part of the story of how God formed his <b>people</b>.</li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\"><b>Faith</b> is a gift from God that enables us to <b>believe in God</b> and <b>accept all that God has revealed</b>.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">We should look to the Patriarchs and Matriarchs as examples of <b>faith</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">They trusted God and tried to follow his <b>will</b>.</li></ul>\n<div class=\"callout\"><b>Hebrews 11:1</b> — “Faith is the realization of what is hoped for and evidence of things not seen.”</div>"},{"id":"daily","title":"Daily life of the patriarchs","short":"2. Daily life","html":"<h2>Daily Life of the Patriarchs</h2>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">They grew <b>grain</b> and many varieties of fruits and vegetables. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">They <b>traded</b> with other people for what they needed. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">They traveled mostly on <b>foot</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Their lives centered around their <b>family</b> and clan. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>"},{"id":"abraham","title":"Abraham: call, faith & covenant","short":"3. Abraham","html":"<h2>Abraham: Father of God's People</h2>\n<h3>God calls Abram</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God appeared to a man named <b>Abram</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Abram gathered his wife, family, and <b>property (possessions)</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">He then made a journey to the land of <b>Canaan</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<h3>Abram's faith</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Abram was about <b>75</b> years old when God called him. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">He was not famous or <b>powerful</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">His wife, <b>Sarai</b>, could not have children. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Even though Abram faced many challenges, he had great <b>faith</b>.</li></ul>\n<div class=\"callout\"><b>Remember:</b> Abram is one of the most important Old Testament models of <b>faith</b>.</div>\n<h3>The journey of faith</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Abram's journey to Canaan symbolizes the journey of <b>faith</b> that we make throughout our lives. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Like Abram, we may not always know exactly where God is leading us.</li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">We are called to <b>trust</b> God and follow his will.</li></ul>\n<h3>God's covenant with Abraham</h3>\n<ul style=\"padding-left:0\"><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">A <b>covenant</b> is a sacred <b>promise</b> between God and his people.</li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Abram would <b>trust</b> God and follow his ways.</li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">God promised Abram a <b>son</b>.</li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">God promised to make Abram into a “<b>great nation</b>.”</li></ul>\n<h3>Abram becomes Abraham</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God changed Abram's name to <b>Abraham</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Sarai's name was changed to <b>Sarah</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Their new names symbolized a new <b>life</b> and a new relationship / covenant with God. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<div class=\"callout\"><em><b>Extra detail (Genesis 17):</b> “Abraham” and “Sarah” are different forms of their old names. Abraham comes from “father of a multitude of nations,” and Sarah means “princess.”</em></div>"},{"id":"isaac","title":"Isaac & the connection to Jesus","short":"4. Isaac","html":"<h2>Isaac</h2>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Abraham and Sarah eventually had a son named <b>Isaac</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Isaac was the son God had promised to Abraham.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God tested Abraham's faith by telling him to <b>sacrifice</b> Isaac. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Abraham trusted <b>God</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God provided another way, and Isaac's life was spared. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<div class=\"callout\"><em><b>Extra detail (Genesis 22):</b> God provided a ram caught in a thicket to be offered in Isaac's place.</em></div>\n<h3>Connection to Jesus</h3>\n<p>Abraham's willingness to offer his only son points forward to the New Testament:</p>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God the Father offered his only <b>Son</b>, Jesus Christ, to save us. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Isaac is therefore seen as a <b>foreshadow</b> of Christ in this story. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>"},{"id":"jacob","title":"Jacob: Esau, Haran & Israel","short":"5. Jacob","html":"<h2>Jacob: Father of the Israelites</h2>\n<h3>Isaac's family</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Isaac inherited his father's position as <b>patriarch</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Isaac and Rebekah had twin sons: <b>Esau</b> and <b>Jacob</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Esau was the <b>1st</b>-born. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Jacob was the <b>2nd</b>-born. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">God made clear that <b>Jacob</b> would inherit the position of patriarch.</li></ul>\n<h3>Jacob the trickster</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Jacob was known as a <b>trickster</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">He eventually fled to the land of <b>Haran</b>.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">While Jacob was away, God spoke to him and promised that he would always <b>protect</b> him. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<div class=\"callout\"><em><b>Extra detail (Genesis 28 &amp; 31):</b> Jacob's wives were <b>Rachel and Leah</b>, the daughters of Laban. Genesis 31 says Jacob spent twenty years in Laban's household.</em></div>\n<h3>Jacob returns</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Jacob spent about <b>20</b> years away. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">During this time, he had many children — <b>12 sons</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Eventually, Jacob returned to the land of <b>Canaan</b>.</li></ul>\n<h3>Jacob becomes Israel</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">God changed Jacob's name to <b>Israel</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">The name Israel became an important name for God's <b>people</b>.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Jacob's descendants became known as the <b>Israelites</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>"},{"id":"joseph","title":"Joseph & God's Providence","short":"6. Joseph","html":"<h2>Joseph: God Cares for His People</h2>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Joseph</b> was the last of the Old Testament patriarchs. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Joseph was one of Jacob's <b>sons</b> (not his brothers!).</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Joseph and his brothers did not always get along. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Joseph was given a special <b>coat</b> that caused jealousy among his brothers. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Joseph's story is found especially in Genesis chapters ____ (this blank was left empty on Mazie's sheet; it is commonly <b>Genesis 37–50</b>, so ask your teacher if she wants a specific range).</li></ul>\n<div class=\"callout\"><em><b>Extra detail:</b> Genesis 35 lists Joseph among Jacob's twelve sons (he was born to Rachel; in the order of Genesis 29–30 he is the 11th son). Genesis 37 says Jacob loved Joseph best, and his brothers hated him for it. The “special coat” is also called a “coat of many colors” or a “long ornamented tunic.”</em></div>\n<h3>God's Providence</h3>\n<ul style=\"padding-left:0\"><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\"><b>Providence</b> means God's <b>plan</b> for and <b>protection</b> of all creation. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">God's Providence means that God is always working in and caring for his <b>people</b>.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Joseph's story shows God's Providence through the fulfillment of <b>dreams</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>\n<h3>Joseph in Egypt</h3>\n<ul style=\"padding-left:0\"><li style=\"list-style:none;margin:6px 0;padding:3px 8px;\">Joseph eventually ended up in <b>Egypt</b>.</li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Egypt was ruled by a king called the <b>Pharaoh</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li><li style=\"background:rgba(255,105,180,0.22);border-left:4px solid #ff69b4;padding:3px 8px;border-radius:6px;list-style:none;margin:6px 0;\">Joseph's story shows how God could bring good out of very difficult <b>situations</b>. <span style=\"font-size:0.75rem;font-weight:700;color:#ff69b4;white-space:nowrap;\">⭐ likely on test</span></li></ul>"}],"flashcards":[{"term":"Patriarch","def":"A father or founder of a clan"},{"term":"Clan","def":"A group of related people"},{"term":"A people","def":"What God formed for himself at the end of Genesis"},{"term":"Abraham & Sarah","def":"The first patriarch and matriarch pair"},{"term":"Rebekah","def":"Isaac's wife"},{"term":"Rachel and Leah","def":"Jacob's wives (matriarchs in our notes)"},{"term":"Joseph","def":"The last of the Old Testament patriarchs"},{"term":"Canaan","def":"The land the patriarchs and matriarchs lived in and traveled through"},{"term":"Many city-states","def":"What Canaan was made up of"},{"term":"They spoke the same language","def":"Why Canaan's people saw each other as distant cousins"},{"term":"They are part of the story of how God formed his people","def":"Why we call the patriarchs “our ancestors in faith”"},{"term":"Faith","def":"A gift from God that lets us believe in God and accept all he has revealed"},{"term":"Hebrews 11:1","def":"Verse: “Faith is the realization of what is hoped for and evidence of things not seen”"},{"term":"As examples of faith","def":"How we should look at the patriarchs and matriarchs"},{"term":"Grain, fruits, and vegetables","def":"Crops the patriarchs grew"},{"term":"They traded with others","def":"How the patriarchs got things they couldn't grow"},{"term":"On foot","def":"How the patriarchs mostly traveled"},{"term":"Family and clan","def":"What the patriarchs' lives centered around"},{"term":"Abram","def":"Abraham's name before God changed it"},{"term":"Sarai","def":"Sarah's name before God changed it"},{"term":"75","def":"About how old Abram was when God called him"},{"term":"Our journey of faith through life","def":"What Abram's journey to Canaan symbolizes"},{"term":"Covenant","def":"A sacred promise between God and his people"},{"term":"A son, and to make him a “great nation”","def":"What God promised Abram in the covenant"},{"term":"A new life and new relationship/covenant with God","def":"What Abram's new name symbolized"},{"term":"Isaac","def":"The son God promised Abraham and Sarah"},{"term":"He told him to sacrifice Isaac","def":"How God tested Abraham's faith"},{"term":"God provided another way and Isaac's life was spared","def":"What happened to Isaac after the test"},{"term":"Abraham was willing to offer his only son, as God the Father offered his only Son, Jesus","def":"Why Isaac is seen as a “foreshadow” of Christ"},{"term":"Esau and Jacob","def":"Isaac and Rebekah's twin sons"},{"term":"Jacob (the 2nd-born)","def":"The twin God chose to inherit the patriarch position"},{"term":"A trickster","def":"What Jacob was known as"},{"term":"Haran","def":"The land Jacob fled to"},{"term":"To always protect him","def":"What God promised Jacob while he was away"},{"term":"About 20 years","def":"About how long Jacob was away"},{"term":"12","def":"Number of sons Jacob had"},{"term":"Israel","def":"Name God gave Jacob"},{"term":"The Israelites","def":"What Jacob's descendants were called"},{"term":"A special coat","def":"What caused jealousy among Joseph's brothers"},{"term":"Providence","def":"God's plan for and protection of all creation"},{"term":"Dreams","def":"What Joseph's story shows about God's Providence (fulfillment of ...)"},{"term":"Egypt","def":"Land Joseph eventually ended up in"},{"term":"Pharaoh","def":"Title of Egypt's king"},{"term":"Bring good out of them","def":"What Joseph's story shows God can do in hard situations"}],"quiz":[{"id":"rel5-001","group":"g01","type":"mc","q":"What is a patriarch?","choices":["A father or founder of a clan","A king of Egypt","A priest in the Temple","A judge who settles disputes"],"answer":0,"explain":"A patriarch is a father or founder of a clan."},{"id":"rel5-002","group":"g01","type":"mc","q":"Which word means “a father or founder of a clan”?","choices":["Patriarch","Matriarch","Pharaoh","Prophet"],"answer":0,"explain":"Patriarch = father or founder of a clan. (A matriarch is a mother of the clan.)"},{"id":"rel5-003","group":"g01","type":"mc","q":"At the end of Genesis, what did God form for himself?","choices":["A people","A kingdom of angels","A great city","A new temple"],"answer":0,"explain":"At the end of Genesis, God formed a people for himself."},{"id":"rel5-004","group":"g02","type":"mc","q":"What is a clan?","choices":["A group of related people","A group of soldiers","A group of traveling merchants","A group of shepherds hired by a king"],"answer":0,"explain":"A clan is a group of related people."},{"id":"rel5-005","group":"g02","type":"mc","q":"The patriarchs were the fathers or founders of a ______.","choices":["Clan","Kingdom","Army","Temple"],"answer":0,"explain":"A patriarch is a father or founder of a clan, a group of related people."},{"id":"rel5-006","group":"g03","type":"mc","q":"Which pair is correctly matched as patriarch and matriarch?","choices":["Abraham and Sarah","Abraham and Rebekah","Isaac and Sarah","Jacob and Sarah"],"answer":0,"explain":"Abraham & Sarah; Isaac & Rebekah; Jacob & Rachel/Leah; and then Joseph."},{"id":"rel5-007","group":"g03","type":"mc","q":"Who was Isaac's wife?","choices":["Rebekah","Sarah","Rachel","Leah"],"answer":0,"explain":"Isaac and Rebekah had the twin sons Esau and Jacob."},{"id":"rel5-008","group":"g03","type":"mc","q":"Which list matches the four Old Testament patriarch/matriarch groups in Chapter 5?","choices":["Abraham & Sarah; Isaac & Rebekah; Jacob & Rachel/Leah; Joseph","Adam & Eve; Cain & Abel; Noah; Moses","Abraham & Sarah; Moses & Miriam; David; Solomon","Isaac & Sarah; Jacob & Rebekah; Esau; Joseph"],"answer":0,"explain":"These four groups are the patriarchs and matriarchs we study in Chapter 5."},{"id":"rel5-009","group":"g03","type":"mc","q":"Who was the LAST of the Old Testament patriarchs in our notes?","choices":["Joseph","Abraham","Isaac","Esau"],"answer":0,"explain":"Joseph was the last of the Old Testament patriarchs."},{"id":"rel5-010","group":"g04","type":"mc","q":"In which land did the patriarchs and matriarchs live and travel?","choices":["Canaan","Egypt","Rome","Babylon"],"answer":0,"explain":"They lived in and traveled throughout the land of Canaan."},{"id":"rel5-011","group":"g04","type":"mc","q":"Canaan was an area in western Palestine that included most of present-day ______.","choices":["Israel","Egypt","Italy","Greece"],"answer":0,"explain":"Canaan included most of present-day Israel."},{"id":"rel5-012","group":"g05","type":"mc","q":"Canaan was made up of many ______.","choices":["City-states","Large empires","Islands","Desert tribes with no towns"],"answer":0,"explain":"Canaan was made up of many city-states."},{"id":"rel5-013","group":"g06","type":"mc","q":"Why did the people living in Canaan think of one another as distant cousins?","choices":["Because they spoke the same language","Because they all worshiped the same idol","Because they all had the same king","Because they all wore the same clothes"],"answer":0,"explain":"They thought of each other as distant cousins because they spoke the same language."},{"id":"rel5-014","group":"g07","type":"mc","q":"Why do we call the patriarchs and matriarchs our “ancestors in faith”?","choices":["They are part of the story of how God formed his people","They wrote the New Testament","They were the first Christians","They founded the Church in Rome"],"answer":0,"explain":"They are part of the story of how God formed his people."},{"id":"rel5-015","group":"g07","type":"mc","q":"The patriarchs and matriarchs are our ______ in faith.","choices":["Ancestors","Judges","Kings","Apostles"],"answer":0,"explain":"They are our ancestors in faith."},{"id":"rel5-016","group":"g08","type":"mc","q":"What is faith?","choices":["A gift from God that enables us to believe in God and accept all that God has revealed","A feeling you get only at church","A rule that we must earn by being perfect","Something we can see with our own eyes"],"answer":0,"explain":"Faith is a gift from God that enables us to believe in God and accept all that he has revealed."},{"id":"rel5-017","group":"g08","type":"mc","q":"Faith is a gift from God. It enables us to believe in God and to accept all that God has ______.","choices":["Revealed","Forgotten","Hidden","Written"],"answer":0,"explain":"Faith lets us accept all that God has revealed."},{"id":"rel5-018","group":"g09","type":"mc","q":"Which Bible verse says, “Faith is the realization of what is hoped for and evidence of things not seen”?","choices":["Hebrews 11:1","Genesis 12:1","John 3:16","Psalm 23:1"],"answer":0,"explain":"This is Hebrews 11:1."},{"id":"rel5-019","group":"g09","type":"mc","q":"According to Hebrews 11:1, faith is the realization of what is hoped for and evidence of things ______.","choices":["Not seen","Already seen","Written down","Bought and sold"],"answer":0,"explain":"Faith is the evidence of things not seen."},{"id":"rel5-020","group":"g10","type":"mc","q":"How should we look to the patriarchs and matriarchs?","choices":["As examples of faith","As rulers who made all the laws","As gods to be worshiped","As people who never made mistakes"],"answer":0,"explain":"We look to them as examples of faith."},{"id":"rel5-021","group":"g10","type":"mc","q":"What did the patriarchs and matriarchs try to do?","choices":["Trust God and follow his will","Conquer the nations around them","Build the biggest cities","Avoid traveling"],"answer":0,"explain":"They trusted God and tried to follow his will."},{"id":"rel5-022","group":"g11","type":"mc","q":"Which of these was part of the patriarchs' daily life?","choices":["Growing grain and many varieties of fruits and vegetables","Flying to other cities","Working in factories","Attending public school"],"answer":0,"explain":"They grew grain, fruits, and vegetables."},{"id":"rel5-023","group":"g11","type":"mc","q":"How did the patriarchs get what they needed but could not grow?","choices":["They traded with other people","They bought it with paper money","They ordered it online","They asked the king to send it"],"answer":0,"explain":"They traded with other people for what they needed."},{"id":"rel5-024","group":"g12","type":"mc","q":"How did the patriarchs mostly travel?","choices":["On foot","By train","By car","By ship only"],"answer":0,"explain":"They traveled mostly on foot."},{"id":"rel5-025","group":"g12","type":"mc","q":"What did the patriarchs' lives center around?","choices":["Family and clan","Sports","Money and shopping","Schools and books"],"answer":0,"explain":"Their lives centered around their family and clan."},{"id":"rel5-026","group":"g13","type":"mc","q":"To whom did God appear and call to journey to a new land?","choices":["Abram","Isaac","Joseph","Esau"],"answer":0,"explain":"God appeared to a man named Abram and called him."},{"id":"rel5-027","group":"g13","type":"mc","q":"When God called Abram, he gathered his wife, family, and ______ and journeyed to Canaan.","choices":["Property (possessions)","Soldiers","Idols","Priests"],"answer":0,"explain":"Abram gathered his wife, family, and property/possessions and journeyed to Canaan."},{"id":"rel5-028","group":"g13","type":"mc","q":"Where did Abram make a journey after God called him?","choices":["The land of Canaan","The land of Egypt","The land of Rome","The land of Babylon"],"answer":0,"explain":"He journeyed to the land of Canaan."},{"id":"rel5-029","group":"g14","type":"mc","q":"About how old was Abram when God called him?","choices":["75","25","50","100"],"answer":0,"explain":"Abram was about 75 years old (Genesis 12:4)."},{"id":"rel5-030","group":"g14","type":"mc","q":"Abram was about ______ years old when God called him.","choices":["75","40","60","99"],"answer":0,"explain":"Abram was 75 when he left Haran."},{"id":"rel5-031","group":"g15","type":"mc","q":"Which best describes Abram when God called him?","choices":["Not famous or powerful","A famous king","A mighty general","A wealthy emperor"],"answer":0,"explain":"Abram was not famous or powerful, yet he had great faith."},{"id":"rel5-032","group":"g15","type":"mc","q":"What was a big challenge for Abram and his wife Sarai?","choices":["Sarai could not have children","They had no water","They were kicked out of Canaan","They had too many children"],"answer":0,"explain":"Sarai could not have children."},{"id":"rel5-033","group":"g16","type":"mc","q":"Abram is one of the most important Old Testament models of ______.","choices":["Faith","War","Wealth","Power"],"answer":0,"explain":"Abram is one of the most important Old Testament models of faith."},{"id":"rel5-034","group":"g16","type":"mc","q":"Even though Abram faced many challenges, he had great ______.","choices":["Faith","Fame","Power","Fear of the Pharaoh"],"answer":0,"explain":"He had great faith."},{"id":"rel5-035","group":"g17","type":"mc","q":"What does Abram's journey to Canaan symbolize?","choices":["The journey of faith that we make throughout our lives","The journey of the Israelites to Egypt","A vacation from work","The journey to get rich"],"answer":0,"explain":"Abram's journey symbolizes our journey of faith."},{"id":"rel5-036","group":"g17","type":"mc","q":"Like Abram, we may not always know exactly where God is leading us. What are we called to do?","choices":["Trust God and follow his will","Go back where we started","Wait until we see everything first","Decide everything by ourselves"],"answer":0,"explain":"We are called to trust God and follow his will."},{"id":"rel5-037","group":"g18","type":"mc","q":"What is a covenant?","choices":["A sacred promise between God and his people","A law made by a king","A gift of money","A story that is not true"],"answer":0,"explain":"A covenant is a sacred promise between God and his people."},{"id":"rel5-038","group":"g18","type":"mc","q":"A covenant is a sacred ______ between God and his people.","choices":["Promise","Trade","Journey","Sacrifice"],"answer":0,"explain":"Covenant = sacred promise."},{"id":"rel5-039","group":"g19","type":"mc","q":"In God's covenant with Abram, what was Abram to do?","choices":["Trust God and follow his ways","Build a temple","Become a king","Leave his family forever"],"answer":0,"explain":"Abram would trust God and follow his ways."},{"id":"rel5-040","group":"g19","type":"mc","q":"In the covenant, what did God promise Abram?","choices":["A son, and to make him a great nation","Gold and silver","A palace in Egypt","An army"],"answer":0,"explain":"God promised Abram a son and to make him a “great nation.”"},{"id":"rel5-041","group":"g19","type":"mc","q":"God promised to make Abram into a ______.","choices":["Great nation","Great king","Great shepherd","Great army"],"answer":0,"explain":"God promised to make Abram into a “great nation.”"},{"id":"rel5-042","group":"g20","type":"mc","q":"What did God change Abram's name to?","choices":["Abraham","Isaac","Israel","Jacob"],"answer":0,"explain":"God changed Abram's name to Abraham."},{"id":"rel5-043","group":"g20","type":"mc","q":"What did God change Sarai's name to?","choices":["Sarah","Rebekah","Rachel","Leah"],"answer":0,"explain":"God changed Sarai's name to Sarah."},{"id":"rel5-044","group":"g21","type":"mc","q":"What did Abraham and Sarah's new names symbolize?","choices":["A new life and a new relationship (covenant) with God","That they were now royalty in Egypt","That they were moving away","That they had lost their faith"],"answer":0,"explain":"The new names symbolized a new life and a new relationship with God."},{"id":"rel5-045","group":"g22","type":"mc","q":"Who was the son God promised to Abraham and Sarah?","choices":["Isaac","Esau","Joseph","Jacob"],"answer":0,"explain":"Abraham and Sarah eventually had Isaac, the son God had promised."},{"id":"rel5-046","group":"g22","type":"mc","q":"Abraham and Sarah eventually had a son named ______.","choices":["Isaac","Jacob","Esau","Israel"],"answer":0,"explain":"Isaac was the son of the promise."},{"id":"rel5-047","group":"g23","type":"mc","q":"How did God test Abraham's faith?","choices":["He told him to sacrifice Isaac","He told him to leave Canaan","He sent a famine","He took away his flocks"],"answer":0,"explain":"God tested Abraham's faith by telling him to sacrifice Isaac."},{"id":"rel5-048","group":"g23","type":"mc","q":"In the test of Abraham's faith, Abraham trusted ______.","choices":["God","Sarah","Pharaoh","The king of Canaan"],"answer":0,"explain":"Abraham trusted God."},{"id":"rel5-049","group":"g24","type":"mc","q":"What happened at the end of the test on the mountain?","choices":["God provided another way and Isaac's life was spared","Isaac was sent to Egypt","Isaac became a king","Abraham lost his faith"],"answer":0,"explain":"God provided another way (a ram), and Isaac's life was spared."},{"id":"rel5-050","group":"g24","type":"mc","q":"What did God provide in place of Isaac?","choices":["A ram","A donkey","A gold statue","A loaf of bread"],"answer":0,"explain":"A ram caught in a thicket was offered in place of Isaac (Genesis 22:13)."},{"id":"rel5-051","group":"g25","type":"mc","q":"Abraham's willingness to offer his only son points forward to the New Testament. Who offered his only Son to save us?","choices":["God the Father offered Jesus Christ","Jacob offered Joseph","Isaac offered Esau","Moses offered Aaron"],"answer":0,"explain":"God the Father offered his only Son, Jesus Christ, to save us."},{"id":"rel5-052","group":"g25","type":"mc","q":"In this story, Isaac is seen as a ______ of Christ.","choices":["Foreshadow","Descendant","Judge","Brother"],"answer":0,"explain":"Isaac is seen as a foreshadow of Christ."},{"id":"rel5-053","group":"g25","type":"mc","q":"“Foreshadow” means that Isaac's story ______.","choices":["Hints at or points ahead to Jesus","Happened after Jesus","Is a different story about Jesus' birth","Has nothing to do with Jesus"],"answer":0,"explain":"A foreshadow points ahead. Isaac's story points forward to Christ."},{"id":"rel5-054","group":"g26","type":"mc","q":"Isaac inherited his father's position as ______.","choices":["Patriarch","King","Pharaoh","Judge"],"answer":0,"explain":"Isaac inherited his father's position as patriarch."},{"id":"rel5-055","group":"g26","type":"mc","q":"Who inherited Abraham's position as patriarch?","choices":["Isaac","Esau","Jacob","Joseph"],"answer":0,"explain":"Isaac was Abraham's heir as patriarch."},{"id":"rel5-056","group":"g27","type":"mc","q":"Isaac and Rebekah had twin sons. What were their names?","choices":["Esau and Jacob","Jacob and Joseph","Isaac and Ishmael","Abraham and Esau"],"answer":0,"explain":"Esau and Jacob were Isaac and Rebekah's twin sons."},{"id":"rel5-057","group":"g27","type":"mc","q":"Which twin was born first?","choices":["Esau","Jacob","Joseph","Isaac"],"answer":0,"explain":"Esau was the first-born; Jacob was the second-born."},{"id":"rel5-058","group":"g27","type":"mc","q":"Jacob was the ______ born of the twins.","choices":["Second","First","Third","Fourth"],"answer":0,"explain":"Jacob was the second-born."},{"id":"rel5-059","group":"g28","type":"mc","q":"Who did God make clear would inherit the position of patriarch?","choices":["Jacob","Esau","Joseph","Ishmael"],"answer":0,"explain":"God made clear that Jacob would inherit the position of patriarch."},{"id":"rel5-060","group":"g28","type":"mc","q":"Even though Esau was older, who was to inherit the position of patriarch?","choices":["Jacob, the second-born twin","Esau, the first-born twin","Joseph, the youngest son","Isaac's servant"],"answer":0,"explain":"God chose Jacob."},{"id":"rel5-061","group":"g29","type":"mc","q":"What was Jacob known as?","choices":["A trickster","A king","A farmer who never left home","A judge"],"answer":0,"explain":"Jacob was known as a trickster."},{"id":"rel5-062","group":"g29","type":"mc","q":"Where did Jacob eventually flee?","choices":["Haran","Egypt","Bethlehem","Sinai"],"answer":0,"explain":"He fled to the land of Haran (Genesis 28:10)."},{"id":"rel5-063","group":"g29","type":"mc","q":"Why did Jacob have to leave home and go to Haran?","choices":["His brother Esau was angry at him and wanted to harm him","He was called to be a king","The Pharaoh sent for him","He wanted to see the ocean"],"answer":0,"explain":"Esau was so angry over the stolen blessing that he planned to kill Jacob (Genesis 27:41–45)."},{"id":"rel5-064","group":"g30","type":"mc","q":"While Jacob was away, God spoke to him and promised that he would always ______ him.","choices":["Protect","Punish","Forget","Test"],"answer":0,"explain":"God promised to always protect Jacob (Genesis 28:15)."},{"id":"rel5-065","group":"g30","type":"mc","q":"What did God promise Jacob while he was away from home?","choices":["That he would always protect him","That he would make him a pharaoh","That he would never have children","That he would never return home"],"answer":0,"explain":"God promised to protect him."},{"id":"rel5-066","group":"g31","type":"mc","q":"About how many years was Jacob away?","choices":["About 20","About 2","About 5","About 50"],"answer":0,"explain":"Jacob spent about 20 years away (Genesis 31:38, 41)."},{"id":"rel5-067","group":"g31","type":"mc","q":"How many sons did Jacob have?","choices":["12","2","7","20"],"answer":0,"explain":"Jacob had twelve sons; their families became the twelve tribes."},{"id":"rel5-068","group":"g31","type":"mc","q":"After being away, where did Jacob return?","choices":["The land of Canaan","Egypt","Haran","Rome"],"answer":0,"explain":"Jacob returned to Canaan."},{"id":"rel5-069","group":"g32","type":"mc","q":"What name did God give Jacob?","choices":["Israel","Isaac","Abraham","Esau"],"answer":0,"explain":"God changed Jacob's name to Israel."},{"id":"rel5-070","group":"g32","type":"mc","q":"The name Israel became an important name for God's ______.","choices":["People","Temple","Enemies","Land only"],"answer":0,"explain":"Israel became an important name for God's people."},{"id":"rel5-071","group":"g32","type":"mc","q":"God changed Jacob's name to ______.","choices":["Israel","Joseph","Canaan","Haran"],"answer":0,"explain":"Jacob became Israel."},{"id":"rel5-072","group":"g33","type":"mc","q":"What were Jacob's descendants called?","choices":["Israelites","Egyptians","Canaanites","Romans"],"answer":0,"explain":"Jacob's descendants became known as the Israelites."},{"id":"rel5-073","group":"g33","type":"mc","q":"The Israelites are named after ______.","choices":["Israel (Jacob)","Isaac","Esau","Abraham"],"answer":0,"explain":"The Israelites are the descendants of Israel, who was Jacob."},{"id":"rel5-074","group":"g34","type":"mc","q":"Joseph was one of Jacob's ______.","choices":["Sons","Brothers","Fathers","Uncles"],"answer":0,"explain":"Joseph was one of Jacob's twelve sons."},{"id":"rel5-075","group":"g34","type":"mc","q":"Who was Joseph's father?","choices":["Jacob (Israel)","Isaac","Abraham","Esau"],"answer":0,"explain":"Joseph was Jacob's son."},{"id":"rel5-076","group":"g34","type":"mc","q":"Joseph and his brothers ______.","choices":["Did not always get along","Always agreed","Lived far apart and never met","Were twins"],"answer":0,"explain":"Joseph and his brothers did not always get along."},{"id":"rel5-077","group":"g35","type":"mc","q":"What special gift caused jealousy among Joseph's brothers?","choices":["A special coat (robe)","A gold ring","A flock of sheep","A horse"],"answer":0,"explain":"Joseph was given a special coat that caused jealousy among his brothers."},{"id":"rel5-078","group":"g35","type":"mc","q":"Why were Joseph's brothers jealous of him?","choices":["Because their father Jacob loved him best and gave him a special coat","Because he was the oldest","Because he was a pharaoh","Because he lived in Egypt"],"answer":0,"explain":"Their father loved Joseph best; the special coat made the brothers jealous."},{"id":"rel5-079","group":"g36","type":"mc","q":"What does “providence” mean?","choices":["God's plan for and protection of all creation","A city in Egypt","A sacrifice on a mountain","A list of laws"],"answer":0,"explain":"Providence is God's plan for and protection of all creation."},{"id":"rel5-080","group":"g36","type":"mc","q":"God's Providence means that God is always working in and caring for his ______.","choices":["People (creation)","Enemies","Idols","Rulers only"],"answer":0,"explain":"God is always working in and caring for his people."},{"id":"rel5-081","group":"g36","type":"mc","q":"God's ______ for and protection of all creation is called providence.","choices":["Plan","Anger","Temple","Wish list"],"answer":0,"explain":"Providence: God's plan for and protection of all creation."},{"id":"rel5-082","group":"g37","type":"mc","q":"Joseph's story shows God's Providence through the fulfillment of ______.","choices":["Dreams","Battles","Laws","Miracles of healing"],"answer":0,"explain":"Joseph's dreams came true, showing God's providence."},{"id":"rel5-083","group":"g38","type":"mc","q":"Where did Joseph eventually end up?","choices":["Egypt","Haran","Babylon","Rome"],"answer":0,"explain":"Joseph eventually ended up in Egypt."},{"id":"rel5-084","group":"g38","type":"mc","q":"Egypt was ruled by a king called the ______.","choices":["Pharaoh","Patriarch","Emperor","Caesar"],"answer":0,"explain":"The king of Egypt was called the Pharaoh."},{"id":"rel5-085","group":"g38","type":"mc","q":"What is the title of the king of Egypt?","choices":["Pharaoh","Patriarch","Israel","Covenant"],"answer":0,"explain":"Egypt's king was called Pharaoh."},{"id":"rel5-086","group":"g39","type":"mc","q":"What does Joseph's story show about difficult situations?","choices":["God can bring good out of very difficult situations","Bad things never happen to good people","God leaves us alone in trouble","Difficult situations are always our fault"],"answer":0,"explain":"Joseph's story shows God can bring good out of very difficult situations."},{"id":"rel5-087","group":"g39","type":"mc","q":"Which statement best explains God's Providence in Joseph's story?","choices":["Even after being sold and sent to Egypt, God worked to bring good from it","Joseph planned everything himself","Joseph's brothers never had to be forgiven","God stopped caring for Joseph in Egypt"],"answer":0,"explain":"God brought good from Joseph's hard situations."},{"id":"rel5-088","group":"g40","type":"mc","q":"Who were Jacob's wives, who are matriarchs in our notes?","choices":["Rachel and Leah","Sarah and Rebekah","Rebekah and Rachel","Leah and Sarah"],"answer":0,"explain":"Jacob's matriarchs are Rachel and Leah."},{"id":"rel5-089","group":"g40","type":"mc","q":"Which matriarch is paired with Isaac?","choices":["Rebekah","Leah","Rachel","Sarah"],"answer":0,"explain":"Isaac & Rebekah."}]}

  };

  function unitContent() {
    if (!currentUnit) return { sections: [], flashcards: [], quiz: [] };
    return UNIT_CONTENT[currentUnit.id] || { sections: [], flashcards: [], quiz: [] };
  }

  // ——— State ———
  let flashOrder = [];
  let flashIndex = 0;
  let flashFlipped = false;
  let knowSet = new Set();
  let learningSet = new Set();

  let quizSet = null;   // the question list for the current round (pool units); null = use unitContent().quiz
  let quizOrder = [];
  let quizIndex = 0;
  let quizAnswers = []; // { selected, correct, qIndex }
  let quizSelected = [];
  let quizLocked = false;

  // ——— DOM ———
  const $ = (sel) => document.querySelector(sel);
  const gate = $("#gate");
  const app = $("#app");
  const btnHome = $("#btn-home");
  const brandTitle = $("#brand-title");
  const brandSubtitle = $("#brand-subtitle");

  // Gate
  function checkGate() {
    if (sessionStorage.getItem(GATE_KEY) === "1") {
      gate.classList.add("hidden");
      app.classList.remove("hidden");
    }
  }
  $("#gate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = $("#gate-pw").value.trim();
    if (pw === PASSWORD) {
      sessionStorage.setItem(GATE_KEY, "1");
      $("#gate-error").classList.add("hidden");
      gate.classList.add("hidden");
      app.classList.remove("hidden");
    } else {
      $("#gate-error").classList.remove("hidden");
      $("#gate-pw").value = "";
      $("#gate-pw").focus();
    }
  });

  // ——— Hub / unit branding ———
  function setHubBrand() {
    brandTitle.textContent = "Mazie's Study Hub";
    brandSubtitle.textContent = "Pick a subject to study";
  }

  function setUnitBrand(unit) {
    brandTitle.textContent = unit.emoji + " " + unit.title;
    brandSubtitle.textContent = unit.subtitle;
  }

  function renderUnits() {
    const grid = $("#units-grid");
    grid.innerHTML = "";
    UNITS.forEach((unit) => {
      const btn = document.createElement("button");
      btn.className = "mode-card unit-card";
      btn.type = "button";
      btn.dataset.unit = unit.id;
      btn.innerHTML =
        '<span class="mode-emoji">' + unit.emoji + "</span>" +
        '<span class="mode-title">' + unit.title + "</span>" +
        '<span class="mode-desc">' + unit.subtitle + "</span>";
      btn.addEventListener("click", () => selectUnit(unit.id));
      grid.appendChild(btn);
    });
  }

  function selectUnit(id) {
    const unit = UNITS.find((u) => u.id === id);
    if (!unit) return;
    currentUnit = unit;
    setUnitBrand(unit);
    $("#unit-welcome").textContent = unit.welcome;
    const quizTitle = $("#quiz-intro-title");
    if (quizTitle) quizTitle.textContent = unit.quizTitle || "Quiz";
    showView("unit-home");
  }

  // Navigation
  // views: units (hub) → unit-home (modes) → study | flash | quiz
  function showView(name) {
    ["units", "unit-home", "study", "flash", "quiz"].forEach((v) => {
      const el = $("#view-" + v);
      if (el) el.classList.toggle("hidden", v !== name);
    });
    btnHome.classList.toggle("hidden", name === "units");
  }

  btnHome.addEventListener("click", () => {
    const studyEl = $("#view-study");
    const flashEl = $("#view-flash");
    const quizEl = $("#view-quiz");
    const unitHomeEl = $("#view-unit-home");
    const inMode =
      (studyEl && !studyEl.classList.contains("hidden")) ||
      (flashEl && !flashEl.classList.contains("hidden")) ||
      (quizEl && !quizEl.classList.contains("hidden"));
    if (inMode) {
      showView("unit-home");
      if (currentUnit) setUnitBrand(currentUnit);
    } else if (unitHomeEl && !unitHomeEl.classList.contains("hidden")) {
      currentUnit = null;
      setHubBrand();
      showView("units");
    } else {
      currentUnit = null;
      setHubBrand();
      showView("units");
    }
  });

  document.querySelectorAll(".mode-card[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "study") { initStudy(); showView("study"); }
      else if (mode === "flash") { initFlash(); showView("flash"); }
      else if (mode === "quiz") { initQuizHome(); showView("quiz"); }
    });
  });

  // ——— Study ———
  function initStudy() {
    const nav = $("#study-nav");
    nav.innerHTML = "";
    const secs = unitContent().sections;
    if (!secs.length) {
      $("#study-content").innerHTML = "<p>Study guide coming soon!</p>";
      return;
    }
    secs.forEach((s, i) => {
      const chip = document.createElement("button");
      chip.className = "sec-chip" + (i === 0 ? " active" : "");
      chip.textContent = s.short;
      chip.addEventListener("click", () => {
        nav.querySelectorAll(".sec-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        $("#study-content").innerHTML = s.html;
        window.scrollTo(0, 0);
      });
      nav.appendChild(chip);
    });
    $("#study-content").innerHTML = secs[0].html;
  }

  // ——— Flashcards ———
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function initFlash() {
    flashOrder = shuffle(unitContent().flashcards.map((_, i) => i));
    flashIndex = 0;
    flashFlipped = false;
    knowSet = new Set();
    learningSet = new Set();
    renderFlash();
  }

  function currentFlash() {
    return unitContent().flashcards[flashOrder[flashIndex]];
  }

  function renderFlash() {
    const card = currentFlash();
    $("#flash-term").textContent = card.def;
    $("#flash-def").textContent = card.term;
    $("#flashcard").classList.toggle("flipped", flashFlipped);
    $("#flash-progress").textContent = (flashIndex + 1) + " / " + flashOrder.length;
    $("#stat-know").textContent = knowSet.size;
    $("#stat-learning").textContent = learningSet.size;
  }

  function flipCard() {
    flashFlipped = !flashFlipped;
    $("#flashcard").classList.toggle("flipped", flashFlipped);
  }

  $("#flashcard").addEventListener("click", flipCard);
  $("#flashcard").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipCard(); }
  });

  $("#btn-shuffle").addEventListener("click", () => {
    flashOrder = shuffle(unitContent().flashcards.map((_, i) => i));
    flashIndex = 0;
    flashFlipped = false;
    renderFlash();
  });

  $("#btn-prev").addEventListener("click", () => {
    flashIndex = (flashIndex - 1 + flashOrder.length) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });
  $("#btn-next").addEventListener("click", () => {
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });

  $("#btn-know").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    knowSet.add(id);
    learningSet.delete(id);
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });
  $("#btn-learning").addEventListener("click", () => {
    const id = flashOrder[flashIndex];
    learningSet.add(id);
    knowSet.delete(id);
    flashIndex = (flashIndex + 1) % flashOrder.length;
    flashFlipped = false;
    renderFlash();
  });

  // ——— Quiz ———
  function initQuizHome() {
    $("#quiz-start").classList.remove("hidden");
    $("#quiz-play").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    const qz = unitContent().quiz;
    const hasMs = qz.some((q) => q.type === "ms");
    if (currentUnit && currentUnit.quizPool) {
      const per = Math.min(currentUnit.quizPerRound || 15, qz.length);
      $("#quiz-q-count").textContent = per + " questions each round · new mix every time · multiple choice";
    } else {
      $("#quiz-q-count").textContent = qz.length + " questions · " + (hasMs ? "mix of multiple choice & multi-select" : "multiple choice");
    }
  }

  // ——— Rotating question pool (only for units with quizPool: true) ———
  function seenKey() { return "mazie_quiz_seen_" + (currentUnit ? currentUnit.id : ""); }
  function loadSeen() {
    try { const v = JSON.parse(localStorage.getItem(seenKey()) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; }
  }
  function saveSeen(ids) {
    try { localStorage.setItem(seenKey(), JSON.stringify(ids)); } catch (e) { /* storage unavailable: still works, just no memory */ }
  }
  // Pick `per` questions: at most one per group (variants of the same source question), preferring unseen ones.
  function drawPoolRound(pool, per, seenIds) {
    const seen = new Set(seenIds);
    const groups = {};
    pool.forEach((q) => { const g = q.group || q.id; (groups[g] = groups[g] || []).push(q); });
    const gkeys = Object.keys(groups);
    const fresh = shuffle(gkeys.filter((g) => groups[g].some((q) => !seen.has(q.id))));
    const picks = [];
    fresh.slice(0, per).forEach((g) => {
      const opts = groups[g].filter((q) => !seen.has(q.id));
      picks.push(opts[Math.floor(Math.random() * opts.length)]);
    });
    let newSeen = seenIds.concat(picks.map((q) => q.id));
    if (picks.length < per) {
      // Not enough unseen left: pool is exhausted → reset memory and fill from the other groups
      const used = new Set(picks.map((q) => q.group || q.id));
      const rest = shuffle(gkeys.filter((g) => !used.has(g)));
      rest.slice(0, per - picks.length).forEach((g) => {
        const opts = groups[g];
        picks.push(opts[Math.floor(Math.random() * opts.length)]);
      });
      newSeen = picks.map((q) => q.id);
    }
    return { picks: shuffle(picks), seen: newSeen };
  }
  function shuffledCopy(q) {
    // Shuffle the answer order and remap the correct index
    const order = shuffle(q.choices.map((_, i) => i));
    const copy = Object.assign({}, q);
    copy.choices = order.map((i) => q.choices[i]);
    copy.answer = order.indexOf(q.answer);
    return copy;
  }

  function startQuiz() {
    if (currentUnit && currentUnit.quizPool) {
      const pool = unitContent().quiz;
      const per = Math.min(currentUnit.quizPerRound || 15, pool.length);
      const res = drawPoolRound(pool, per, loadSeen());
      saveSeen(res.seen);
      quizSet = res.picks.map(shuffledCopy);
      quizOrder = quizSet.map((_, i) => i);
    } else {
      quizSet = null;
      quizOrder = shuffle(unitContent().quiz.map((_, i) => i));
    }
    quizIndex = 0;
    quizAnswers = [];
    $("#quiz-start").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    $("#quiz-play").classList.remove("hidden");
    renderQuestion();
  }

  function currentQ() {
    return (quizSet || unitContent().quiz)[quizOrder[quizIndex]];
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const as = a.slice().sort((x, y) => x - y);
    const bs = b.slice().sort((x, y) => x - y);
    return as.every((v, i) => v === bs[i]);
  }

  function renderQuestion() {
    const q = currentQ();
    quizSelected = [];
    quizLocked = false;
    const pct = (quizIndex / quizOrder.length) * 100;
    $("#quiz-bar").style.width = pct + "%";
    $("#quiz-num").textContent = "Question " + (quizIndex + 1) + " of " + quizOrder.length;
    const typeLabel = q.type === "ms" ? "Multi-select — pick all that apply" : "Multiple choice";
    $("#quiz-question").innerHTML = '<span class="q-type">' + typeLabel + "</span><br>" + escapeHtml(q.q);

    const box = $("#quiz-choices");
    box.innerHTML = "";
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice" + (q.type === "ms" ? " multi" : "");
      btn.dataset.idx = i;
      const letter = String.fromCharCode(65 + i);
      btn.innerHTML = '<span class="marker">' + (q.type === "ms" ? "☐" : letter) + "</span><span>" + escapeHtml(c) + "</span>";
      btn.addEventListener("click", () => onChoice(i, btn));
      box.appendChild(btn);
    });

    $("#quiz-feedback").classList.add("hidden");
    $("#btn-submit-q").classList.remove("hidden");
    $("#btn-submit-q").disabled = false;
    $("#btn-next-q").classList.add("hidden");
  }

  function onChoice(i, btn) {
    if (quizLocked) return;
    const q = currentQ();
    if (q.type === "mc") {
      quizSelected = [i];
      $("#quiz-choices").querySelectorAll(".choice").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
    } else {
      const pos = quizSelected.indexOf(i);
      if (pos >= 0) {
        quizSelected.splice(pos, 1);
        btn.classList.remove("selected");
        btn.querySelector(".marker").textContent = "☐";
      } else {
        quizSelected.push(i);
        btn.classList.add("selected");
        btn.querySelector(".marker").textContent = "☑";
      }
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  $("#btn-submit-q").addEventListener("click", () => {
    if (quizLocked) return;
    const q = currentQ();
    if (quizSelected.length === 0) {
      $("#quiz-feedback").textContent = "Pick an answer first — you've got this!";
      $("#quiz-feedback").className = "quiz-feedback no";
      $("#quiz-feedback").classList.remove("hidden");
      return;
    }
    quizLocked = true;
    const correctAns = q.type === "mc" ? [q.answer] : q.answer.slice();
    const isCorrect = arraysEqual(quizSelected, correctAns);

    const choiceEls = $("#quiz-choices").querySelectorAll(".choice");
    choiceEls.forEach((el) => {
      const idx = +el.dataset.idx;
      if (correctAns.indexOf(idx) >= 0) el.classList.add("correct");
      if (quizSelected.indexOf(idx) >= 0 && correctAns.indexOf(idx) < 0) el.classList.add("wrong");
    });

    const fb = $("#quiz-feedback");
    if (isCorrect) {
      fb.className = "quiz-feedback ok";
      fb.textContent = "Nice work! ✓ " + q.explain;
    } else {
      fb.className = "quiz-feedback no";
      fb.textContent = "Not quite — keep going! " + q.explain;
    }
    fb.classList.remove("hidden");

    quizAnswers.push({
      qIndex: quizOrder[quizIndex],
      selected: quizSelected.slice(),
      correct: isCorrect
    });

    $("#btn-submit-q").classList.add("hidden");
    $("#btn-next-q").classList.remove("hidden");
    $("#btn-next-q").textContent =
      quizIndex + 1 >= quizOrder.length ? "See Results →" : "Next Question →";
  });

  $("#btn-next-q").addEventListener("click", () => {
    if (quizIndex + 1 >= quizOrder.length) {
      showResults();
    } else {
      quizIndex++;
      renderQuestion();
      window.scrollTo(0, 0);
    }
  });

  function showResults() {
    $("#quiz-play").classList.add("hidden");
    $("#quiz-results").classList.remove("hidden");
    $("#quiz-bar").style.width = "100%";

    const total = quizAnswers.length;
    const right = quizAnswers.filter((a) => a.correct).length;
    const pct = Math.round((right / total) * 100);

    $("#results-score").textContent = right + " / " + total + " (" + pct + "%)";

    const readyMsg = (currentUnit && currentUnit.readyMsg) || "You're ready for that test!";
    let emoji = "🌟", title = "Amazing!", msg = readyMsg;
    if (pct < 60) {
      emoji = "💪"; title = "Keep practicing!";
      msg = "Review the wrong answers below, then try the quiz again. You've got this, Mazie!";
    } else if (pct < 80) {
      emoji = "👍"; title = "Good job!";
      msg = "Solid work! Check the ones you missed, then retry to lock it in.";
    } else if (pct < 100) {
      emoji = "🎉"; title = "Great job!";
      msg = "You're almost perfect — peek at the review, then crush it next time!";
    }

    $("#results-emoji").textContent = emoji;
    $("#results-title").textContent = title;
    $("#results-msg").textContent = msg;

    const review = $("#results-review");
    review.innerHTML = "";
    const wrongs = quizAnswers.filter((a) => !a.correct);
    if (wrongs.length === 0) {
      review.innerHTML = '<p style="text-align:center;color:var(--teal);font-weight:600;">You got every question right! 🏆</p>';
    } else {
      const h = document.createElement("h3");
      h.textContent = "Review missed questions";
      h.style.color = "var(--sand)";
      h.style.marginBottom = "12px";
      review.appendChild(h);

      wrongs.forEach((a) => {
        const q = (quizSet || unitContent().quiz)[a.qIndex];
        const correctIdx = q.type === "mc" ? [q.answer] : q.answer;
        const correctText = correctIdx.map((i) => q.choices[i]).join("; ");
        const yourText = a.selected.map((i) => q.choices[i]).join("; ") || "(none)";
        const item = document.createElement("div");
        item.className = "review-item";
        item.innerHTML =
          "<h4>" + escapeHtml(q.q) + "</h4>" +
          "<p>Your answer: " + escapeHtml(yourText) + "</p>" +
          '<p class="correct-ans">Correct: ' + escapeHtml(correctText) + "</p>" +
          '<p class="explain">' + escapeHtml(q.explain) + "</p>";
        review.appendChild(item);
      });
    }
  }

  $("#btn-start-quiz").addEventListener("click", startQuiz);
  $("#btn-retry").addEventListener("click", startQuiz);
  $("#btn-quiz-home").addEventListener("click", () => {
    showView("unit-home");
    if (currentUnit) setUnitBrand(currentUnit);
  });

  // Boot
  checkGate();
  renderUnits();
  setHubBrand();
  showView("units");
})();
