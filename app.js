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
    }

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
    $("#quiz-q-count").textContent = qz.length + " questions · " + (hasMs ? "mix of multiple choice & multi-select" : "multiple choice");
  }

  function startQuiz() {
    quizOrder = shuffle(unitContent().quiz.map((_, i) => i));
    quizIndex = 0;
    quizAnswers = [];
    $("#quiz-start").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    $("#quiz-play").classList.remove("hidden");
    renderQuestion();
  }

  function currentQ() {
    return unitContent().quiz[quizOrder[quizIndex]];
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
        const q = unitContent().quiz[a.qIndex];
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
