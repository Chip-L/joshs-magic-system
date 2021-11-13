const domains = [
  "Abomination",
  "Air",
  "Ambition",
  "Change",
  "Cities",
  "Cold",
  "Confidence",
  "Creation",
  "Darkness",
  "Death",
  "Decay",
  "Delirium",
  "Destruction",
  "Dreams",
  "Dust",
  "Duty",
  "Earth",
  "Family",
  "Fate",
  "Fire",
  "Freedom",
  "Glyph",
  "Healing",
  "Indulgence",
  "Knowledge",
  "Lightning",
  "Luck",
  "Magic",
  "Might",
  "Moon",
  "Nature",
  "Nightmares",
  "Pain",
  "Passion",
  "Perfection",
  "Plague",
  "Protection",
  "Repose",
  "Secrecy",
  "Sorrow",
  "Soul",
  "Star",
  "starknife",
  "Sun",
  "Swarm",
  "Time",
  "Toil",
  "Travel",
  "Trickery",
  "Truth",
  "Tyranny",
  "Undeath",
  "Vigil",
  "Void",
  "Water",
  "Wealth",
  "Wyrmkin",
  "Zeal",
];

const mysteries = [
  {
    mystery: "Ancestors",
    source: "Advanced Players Guide",
    page: "73",
    description: "Voices of past generations teach and haunt you.",
    benefit:
      "The whispers of your ancestors have bestowed additional knowledge upon you. You gain an additional ancestry feat at first level and another additional ancestry feat at 11th level. These feats can’t be ones that grant physiological effects, such as additional senses or unarmed attacks.",
    trained_skill: ["Society"],
    granted_cantrip: "guidance",
    revelation_spells: {
      initial: "ancestral touch",
      advanced: "ancestral defense",
      greater: "ancestral form",
    },
    related_domains: ["death", "family"],
    curse: {
      name: "Curse of Ancestral Meddling",
      description:
        "The ancestral spirits you commune with haunt you and meddle with your belongings and actions, either out of a well-intentioned (but ultimately detrimental) attempt to assist you, as punishment for your audacity in circumventing the traditional means of achieving divine power, for their own amusement, or a mixture of the above. Your hair, clothing, and belongings constantly shift and stir, seemingly of their own volition.",
      minor:
        "One of your ancestors becomes predominant in their meddling. The first time you gain this effect each day, roll 1d4 on Table 2–4: Ancestral Influence on page 75 to determine which type of ancestor becomes predominant. This predominant ancestor guides you to use their preferred type of action. When you try to use one of the types of actions listed for the other ancestors, you must succeed at a DC 4 flat check. On a failure, you spend the action but gain no effect (though you don’t lose the spell if you were Casting a Spell). If your action would take 1 minute or longer, it’s long enough that you can overcome the meddling, and you don’t need to attempt a flat check.\nDuring combat or another tense, round-by-round encounter, other ancestors wrestle for control of your actions. When you roll initiative, and then at the end of each of your turns during the encounter, roll 1d4 and change your predominant ancestor appropriately. Once the encounter ends, you return to the influence of the ancestor you first rolled for the day",
      moderate:
        "The flat check DC to use other actions is 6, and you get the moderate curse benefit listed for your predominant ancestor in Table 2–4.",
      major:
        "The flat check DC is 8, and you get the major curse benefit listed for your predominant ancestor instead of the moderate curse benefit.",
    },
  },
  {
    mystery: "Battle",
    source: "Advanced Players Guide",
    page: "74",
    benefit:
      "You are no stranger to the trappings of warfare. You are trained in medium and heavy armor. At 13th level, if you gain the light armor expertise class feature, you also gain expert proficiency in these armors. \nChoose one weapon group that embodies your mystery. You are trained in all martial weapons of that group. At 11th level, if you gain the weapon expertise class feature, you also gain expert proficiency for martial weapons in your chosen group, and you become trained in advanced weapons in that group.",
    trained_skill: ["Athletics"],
    granted_cantrip: "shield",
    description: "You embody the virtues upheld by heroes of legend.",
    revelation_spells: {
      initial: "call to arms",
      advanced: "battlefield persistence",
      greater: "heroic feat",
    },
    related_domains: ["might", "zeal"],
    curse: {
      name: "Curse of the Hero’s Burden",
      description:
        "You thrive while adrenaline flows and your life depends on your might alone, but holding the collective battle prowess of the ages within you leaves your body weakened after a fight. You smell faintly of steel and blood no matter how you try to remove or mask the scent, you appear more muscular than you actually are, and you hear the faint clash and clamor of battle in the distance at all times.",
      minor:
        "Your body languishes when you aren’t bringing harm to your foes. You take a –2 status penalty to AC and saving throws, but each time you make a Strike, you can suspend these penalties until the start of your next turn.",
      moderate:
        "The strain of conflict wears upon your body, even though you gain vitality from it. Making a Strike reduces the penalty from your minor curse to –1 rather than suspending it entirely. You gain a +2 status bonus to weapon and unarmed damage rolls. You also gain fast healing equal to half your level while in a non-trivial combat encounter.",
      major:
        "Your body proves capable of truly heroic feats, but doing so interferes with your mental focus. Your moderate curse’s fast healing is equal to your level, and its damage bonus is +6. You gain a +1 status bonus to weapon and unarmed attack rolls, but you are stupefied 2",
    },
  },
  {
    mystery: "Bones",
    source: "Advanced Players Guide",
    page: "75",
    description: "Death always seems near, and the dead speak to you.",
    benefit:
      "You can cleverly leverage the subtleties of life and death to your benefit. Each day during your preparations, you can choose to align yourself in the confluence of positive and negative energy so as to gain negative healing, which means you are harmed by positive damage and healed by negative effects as if you were undead. If you already have negative healing, instead the DC of your recovery checks is equal to 9 + your current dying value.",
    trained_skill: ["Medicine"],
    granted_cantrip: "chill touch",
    revelation_spells: {
      initial: "soul siphon",
      advanced: "armor of bones",
      greater: "claim undead",
    },
    related_domains: ["death", "undeath"],
    curse: {
      name: "Curse of living Death",
      description:
        "Your body is slowly decaying even though you are alive, and using your powers furthers this unnatural living death. You carry a touch of the grave about you, manifesting as bloodless pallor, a faint smell of earth, or deathly cold skin.",
      minor:
        "Bones protrude through your skin and your flesh rots, combining with a stench of decay and an unearthly chill. Non-magical effects that would restore your Hit Points only grant you half as many HP as normal.",
      moderate:
        "Your dead flesh continues to rot, affecting your health. You become drained 1, and this drained condition is cumulative with any other drained conditions you gain. This drained condition is removed only when you Refocus; effects that normally remove the drained condition reduce your drained condition to drained 1 instead. In addition, you gain resistance to poison equal to half your level. You gain a +4 status bonus to saves against diseases, poisons, and death effects, and if you roll a success on such a save, you get a critical success instead.",
      major:
        "You stand just steps from the grave. You become wounded 1. This wounded condition is removed only when you Refocus; effects that normally remove the wounded condition reduce your wounded condition to wounded 1 instead. When you would attempt a recovery check, you can choose to get an automatic success instead of rolling, and if you roll a critical failure on a save against a disease, poison, or death effect, you get a failure instead.",
    },
  },
  {
    mystery: "Cosmos",
    source: "Advanced Players Guide",
    page: "75",
    description: "You draw power from the stars and the spaces between.",
    benefit:
      "Your body is as much an astronomical one as it is physical. You gain resistance equal to 2+ half your level against all physical damage.",
    trained_skill: ["Nature"],
    granted_cantrip: "dancing lights",
    revelation_spells: {
      initial: "spray of stars",
      advanced: "interstellar void",
      greater: "moonlight bridge",
    },
    related_domains: ["darkness", "moon"],
    curse: {
      name: "Curse of the SkY’s Call",
      description:
        "You have your head in the clouds—and not just figuratively. Your body is drawn toward the heavens, making you lighter and less substantial than you should be. Your eyes glow with starry light, and your hair and clothing float and drift around you.",
      minor:
        "Your unnatural lightness makes it hard to keep your footing and interact with other physical objects. You are enfeebled 1 and take a –2 penalty to saves and DCs against Grapple, Shove, and other forms of forced movement.",
      moderate:
        "Your body is drawn further skyward. You are enfeebled 2, and the penalty from your minor curse increases to –3. You are treated as one size smaller for wind effects. You gain a +2 status bonus against Trip attempts, you only take half as much damage from falls, and you gain the effects of the Powerful Leap and Quick Jump skill feats. You weigh only half as much, and your Bulk, should someone need to carry you, is also half as much.",
      major:
        "As your body rises, you float just above the ground beneath you. You become enfeebled 4, and the penalty from your minor curse increases to –4. You can walk on liquids as if they were solid; you gain the effects of the Cloud Jump skill feat; and you don’t leave tracks, trigger weight-sensitive pressure plates, or otherwise connect with the ground below you.",
    },
  },
  {
    mystery: "Flames",
    source: "Advanced Players Guide",
    page: "76",
    description:
      "You dance with fire and do your best to remain unscorched by it.",
    benefit:
      "Like fire itself, you flicker and dance, avoiding effects that would quench your vitality. You have expert proficiency in Reflex saves. At 13th level, if you gain the lightning reflexes class feature, your proficiency rank for Reflex saves increases to master, and when you roll a success on a Reflex save, you get a critical success instead.",
    trained_skill: ["Acrobatics"],
    granted_cantrip: "produce flame",
    revelation_spells: {
      initial: "incendiary aura",
      advanced: "whirling flames",
      greater: "flaming fusillade",
    },
    related_domains: ["fire", "sun"],
    curse: {
      name: "Curse of Engulfing FlameS",
      description:
        "You see flames and smoke wherever you look. These flames might be imagined, or they might be a preternatural glimpse of the metaphorical fires that empower the entire multiverse—but you always see them. Fires flare noticeably (though not dangerously) in your presence, you occasionally smoke slightly, and your body is almost painfully hot to the touch.",
      minor:
        "The smoke, heat, and crackling flames of your curse fill your vision and all your other senses. Creatures further than 30 feet are concealed from you. You can’t benefit from effects that would allow you to ignore or mitigate this concealment, as normal for effects of an oracular curse.",
      moderate:
        "Smoke and flickering visions of flame fill your senses more completely, and harmless flickers of obscuring flames also fill your space. You are concealed from other creatures, though as the other creatures aren’t cursed themselves, they can benefit from effects that would allow them to ignore or mitigate the concealed condition, as normal. All other creatures and objects are concealed from you regardless of distance; however, when casting a fire spell, you automatically succeed at the flat check for this concealed condition for targets within 30 feet.\nAll your senses become imprecise beyond 30 feet, meaning everything past 30 feet that you’d normally be able to see is hidden from you.",
      major:
        "The flames surrounding you are no longer simply visions. An aura of fire surrounds you in a 10-foot emanation, dealing 4d6 fire damage (basic Reflex save) to all other creatures in the aura at the end of each of your turns. You lose 1d6 Hit Points at the end of your turn each round, with no save; if you have a weakness to fire, increase the number of HP you lose by that weakness. You can suppress your aura until the start of your next turn by spending a single action, which has the concentrate trait, to diminish the flames, causing neither you nor anyone in the aura to take damage. While Refocusing to reduce your curse, you are continually diminishing the flames, so you don’t lose HP. The flames subside if you fall unconscious, but they resume when you wake up unless you rested for long enough to reset your curse. As usual for oracular curses, you can’t mitigate or reduce the lost Hit Points in any way, though you can still heal the lost HP normally after the fact.",
    },
  },
  {
    mystery: "Life",
    source: "Advanced Players Guide",
    page: "77",
    description:
      "The teeming energies of life flow through you out into the world.",
    benefit:
      "Your body is a deep reservoir of life energy. At each level, you gain Hit Points equal to 10 + your Constitution modifier from the oracle class, instead of 8+ your Constitution modifier.",
    trained_skill: ["Medicine"],
    granted_cantrip: "stabilize",
    revelation_spells: {
      initial: "life link",
      advanced: "delay affliction",
      greater: "life-giving form",
    },
    related_domains: ["death", "healing"],
    curse: {
      name: "Curse of Outpouring Life",
      description:
        "Life energy flows outward from you and connects you to all living things, but you expend your vital essence to do so. Your presence comforts the ill and injured, causes scars to fade slightly, spurs new growth in plants, and otherwise infuses your surroundings with vitality.",
      minor:
        "As your life force seeps outward, it becomes more difficult to keep your body functioning. Effects that restore Hit Points to you take a status penalty equal to half your level (minimum 1) to the number of HP you recover.",
      moderate:
        "The flow of life energy away from you can’t, be reversed. In addition to the effects of your minor curse, you can’t be healed by magical effects originating from other creatures. However, if you are unconscious, magical effects can restore you to 1 HP (but no higher). You are affected normally by healing elixirs, potions, and other items. When you cast heal and all your targets are living creatures, you roll d12s instead of d8s for the amount of healing.\nWhenever you finish casting a non-cantrip spell, you restore Hit Points equal to the spell level to your choice of either one target of the spell or the creature nearest to you. You can’t heal yourself in this way. This healing has the healing, necromancy, and positive traits, as well as the tradition trait of the spell.",
      major:
        "Life energy tears through you to empower your magic. Some of your spells carry positive energy with them. Each time you use a spell slot to cast a fifth-level or higher spell that takes 2 or more actions to cast, you disperse positive energy in a 30-foot burst with the effects of a 3-action heal spell with a level 4 lower than that of the spell you cast. This healing occurs immediately after you finish Casting the Spell. You don’t benefit from this healing. Instead, you lose double the number of Hit Points rolled for the heal spell.",
    },
  },
  {
    mystery: "Lore",
    source: "Advanced Players Guide",
    page: "77",
    description: "You gain access to unparalleled, overwhelming knowledge.",
    benefit:
      "You hold more mystical knowledge within you than most. You have one additional spell in your repertoire of each level you can cast.",
    trained_skill: ["Occultism", "Lore skill of your choice"],
    cantrip: "read aura",
    revelation_spells: {
      initial: "brain drain",
      advanced: "access lore",
      greater: "dread secret",
    },
    related_domains: ["knowledge", "truth"],
    curse: {
      name: "Curse of Torrential Knowledge",
      description:
        "You have a link to true divine knowledge, but your mortal mind struggles to process and act on what you know. Loose materials around you, such as dust, grains of rice, and droplets of water, slowly shift to form strange runes or faint indecipherable writing, and you sometimes speak unintelligible truths or statements in unknown languages without realizing it.",
      minor:
        "You take a –4 penalty to initiative, as trying to process a surge of information about what’s happening around you slows your ability to respond to it.",
      moderate:
        "The flow of information through your mind grows. The attention you divert to process this huge influx of information means you are always flat-footed. At the start of each of your turns, you automatically make one check to Recall Knowledge as a free action. This uses a skill of your choice that has the Recall Knowledge action, using a result equal to 10 + your proficiency bonus in that skill (with no other bonuses, penalties, or modifiers).",
      major:
        "The massive flow of information clouding your mind overwhelms your ability to communicate with others. You can understand all languages, but you can’t speak, use linguistic effects, or otherwise communicate with your allies. If you Cast a Spell with a verbal component, you must succeed at a DC 5 flat check or the spell is lost. You gain a +4 status bonus on saving throws against linguistic effects.",
    },
  },
  {
    mystery: "Tempest",
    source: "Advanced Players Guide",
    page: "78",
    description: "Wind, waves, and storms rage at your beck and call.",
    benefit:
      "You can see perfectly through wind and water, and you send electric charges through both air and water. You never take penalties to Perception from wind, rain, fog, or other precipitation, or from looking through water or being underwater, and such conditions don’t cause anything to be concealed from you.\nWhen you deal physical damage with a non-cantrip air or water spell, you deal an additional 1 electricity damage per spell level.",
    trained_skill: ["Nature"],
    cantrip: "electric arc",
    revelation_spells: {
      initial: "tempest touch",
      advanced: "thunderburst",
      greater: "tempest form",
    },
    related_domains: ["Air", "Water"],
    curse: {
      name: "Curse of the Perpetual Storm",
      description:
        "You are the center of your own tiny tempest, ever surrounded by wind and rain that worsens the more you tap into your elemental powers. Even when you are calm and at rest, your hair and clothing are blown about by gentle winds, you are slightly damp, and your touch often comes with a static shock.",
      minor:
        "An aura of a whirling storm whips up in a 5-foot emanation around you and in your space. The aura puts out small non-magical fires 1 round after they’re lit or brought into your aura. Electrical energy builds up within your storm, turning you into a lightning rod; you gain weakness 2 to electricity, and electricity spells or effects that have additional effects for a creature wearing or holding metal treat you as though you were wearing metal.",
      moderate:
        "Your minor curse’s aura expands to a 10-foot emanation and carries rain on the winds. The whirling winds impose a –2 circumstance penalty on ranged attack rolls using physical ammunition that target you or originate from you. Your weakness to electricity increases to 5 or half your level, whichever is greater, but torrential rain grants you an equal amount of fire resistance.",
      major:
        "Your minor curse’s aura expands to a 15-foot emanation and grows stronger. High winds blowing outward in the aura impede creatures’ progress. The aura is difficult terrain for Large and smaller creatures on the ground, and for Huge or smaller flying creatures. You aren’t affected by this difficult terrain.\nThe electricity arcing through you becomes dangerous. Any creature that touches you, including with a touch spell or a melee unarmed attack, takes 1d6 electricity damage.",
    },
  },
];

const bloodlines = [
  {
    name: "Aberrant",
    source: "Core Rulebook",
    page: 195,
    description:
      "Something speaks to you from beyond the stars or below the earth. Ancient and unknowable, this alien influence presses against your mind.",
    spell_list: "occult",
    bloodline_skills: ["Intimidation", "Occultism"],
    granted_spells: {
      cantrip: "daze",
      first: "spider sting",
      second: "touch of idiocy",
      third: "vampiric touch",
      fourth: "confusion",
      fifth: "black tentacles",
      sixth: "feeblemind",
      seventh: "warp mind",
      eighth: "uncontrollable dance",
      nineth: "unfathomable song",
    },
    bloodline_spells: {
      initial: "tentacular limbs",
      advanced: "aberrant whispers",
      greater: "unusual anatomy",
    },
    blood_magic:
      "Aberrant whispers shield one target’s mind or your own, granting a +2 status bonus to Will saving throws for 1 round.",
  },
  {
    name: "Angelic",
    source: "Core Rulebook",
    page: 195,
    description:
      "One of your forebears hailed from a celestial realm, or your ancestors’ devotion led to their lineage being blessed.",
    spell_list: "divine",
    bloodline_skills: ["Diplomacy", "Religion"],
    granted_spells: {
      cantrip: "light",
      first: "heal",
      second: "spiritual weapon",
      third: "searing light",
      fourth: "divine wrath",
      fifth: "flame strike",
      sixth: "blade barrier",
      seventh: "divine decree",
      eighth: "divine aura",
      nineth: "foresight",
    },
    bloodline_spells: {
      initial: "angelic halo",
      advanced: "angelic wings",
      greater: "celestial brand",
    },
    blood_magic:
      "An angelic aura protects you or one target, granting a +1 status bonus to saving throws for 1 round.",
  },
  {
    name: "Demonic",
    source: "Core Rulebook",
    page: 195,
    description:
      "Demons debase all they touch. One of your ancestors fell victim to their corruption, and you are burdened by that sin.",
    spell_list: "divine",
    bloodline_skills: ["Intimidation", "Religion"],

    granted_spells: {
      cantrip: "acid splash",
      first: "fear",
      second: "enlarge",
      third: "slow",
      fourth: "divine wrath",
      fifth: "abyssal plague",
      sixth: "disintegrate",
      seventh: "divine decree",
      eighth: "divine aura",
      nineth: "implosion",
    },
    bloodline_spells: {
      initial: "glutton's jaw",
      advanced: "swamp of sloth",
      greater: "abyssal wrath",
    },
    blood_magic:
      "The corruption of sin weakens a target’s defenses or makes you more imposing. Either a target takes a –1 status penalty to AC for 1 round, or you gain a +1 status bonus to Intimidation checks for 1 round.",
  },
  {
    name: "Diabolic",
    source: "Core Rulebook",
    page: 196,
    description:
      "Devils are evil with a silver tongue, and one of your ancestors dallied in darkness or made an infernal pact.",
    spell_list: "divine",
    bloodline_skills: ["Deception", "Religion"],
    granted_spells: {
      cantrip: "produce flame",
      first: "charm",
      second: "flaming sphere",
      third: "enthrall",
      fourth: "suggestion",
      fifth: "crushing despair",
      sixth: "true seeing",
      seventh: "divine decree",
      eighth: "divine aura",
      nineth: "meteor swarm",
    },
    bloodline_spells: {
      initial: "diabolic edict",
      advanced: "embrace the pit",
      greater: "hellfire plume",
    },
    blood_magic:
      "Hellfire scorches a target or fills your tongue with lies. Either a target takes 1 fire damage per spell level (if the spell already deals initial fire damage, combine this with the spell’s initial damage before determining weaknesses and resistances), or you gain a +1 status bonus to Deception checks for 1 round.",
  },
  {
    name: "Draconic",
    source: "Core Rulebook",
    page: 196,
    description:
      "The blood of dragons flows through your veins. These beasts are both fearsome in combat and skilled at magic.",
    spell_list: "arcane",
    bloodline_skills: ["Arcana", "Intimidation"],
    granted_spells: {
      cantrip: "shield",
      first: "true strike",
      second: "resist energy",
      third: "haste",
      fourth: "spell immunity",
      fifth: "chromatic wall",
      sixth: "dragon form",
      seventh: "mask of terror",
      eighth: "prismatic wall",
      nineth: "overwhelming presence",
    },
    bloodline_spells: {
      initial: "dragon claws",
      advanced: "dragon breath",
      greater: "dragon wings",
    },
    blood_magic:
      "Draconic scales grow briefly on you or one target, granting a +1 status bonus to AC for 1 round.",
    subsets: [
      {
        name: "Dragon Type",
        source: "Core Rulebook",
        page: 196,
        description:
          "At first level, choose the type of dragon that influenced your bloodline. You can't change your dragon type later. This choice affects how some of your }, bloodline_spells: { function. The good metallic dragons and their damage types are brass (fire), bronze (electricity), copper (acid), gold (fire), and silver (cold). The evil chromatic dragons and their damage types are black (acid), blue (electricity), green (poison), red (fire), and white (cold).",
      },
      {
        name: "Related Bloodlines",
        source: "Mwangi Expanse",
        page: 76,
        description:
          "Because the wyrmblessed and draconic bloodlines have similar origins, they count the same as each other for the purposes of prerequisites and access requirements.",
      },
    ],
  },
  {
    name: "Elemental",
    source: "Core Rulebook",
    page: 196,
    description:
      "A genie ancestor or some other elemental influence has imbued your blood with primal fury, affecting how the }, bloodline_spells: { and granted_spells: { marked with an asterisk (*), as well as your }, blood_magic:, function.",
    spell_list: "primal",
    bloodline_skills: ["Intimidation", "Nature"],
    granted_spells: {
      cantrip: "produce flame*",
      first: "burning hands*",
      second: "resist energy",
      third: "fireball*",
      fourth: "freedom of movement",
      fifth: "elemental form",
      sixth: "repulsion",
      seventh: "energy aegis",
      eighth: "prismatic wall",
      nineth: "storm of vengeance",
    },
    bloodline_spells: {
      initial: "elemental toss*",
      advanced: "elemental motion",
      greater: "elemental blast*",
    },
    blood_magic:
      "Elemental energy surrounds you or a target. Either you gain a +1 status bonus to Intimidation checks for 1 round, or a target takes 1 damage per spell level. The damage is bludgeoning or fire, according to your elemental type (see below). If the spell already deals that type of damage, combine it with the spell’s initial damage before determining weaknesses and resistances.",
    subsets: [
      {
        name: "Elemental Type",
        source: "Core Rulebook",
        page: 196,
        description:
          "Choose the type of elemental that influenced your bloodline: air, earth, fire, or water. If your element is air, you buffet your foes with powerful winds; if it's earth, you toss huge chunks of rock; if it's fire, you incinerate your foes with flame; and if it's water, you inundate your foes with torrents of water. For fire, all marked spells deal fire damage. For other elements, they deal bludgeoning damage. You replace any existing elemental traits with the trait of the element you chose.",
      },
    ],
  },
  {
    name: "Fey",
    source: "Core Rulebook",
    page: 197,
    description:
      "Fey whimsy or a tryst in a moonlit grove put the bewitching magic of the First World into your family’s bloodline.",
    spell_list: "primal",
    bloodline_skills: ["Deception", "Nature"],
    granted_spells: {
      cantrip: "ghost sound",
      first: "charm",
      second: "hideous laughter",
      third: "enthrall",
      fourth: "suggestion",
      fifth: "cloak of colors",
      sixth: "mislead",
      seventh: "visions of danger",
      eighth: "uncontrollable dance",
      nineth: "resplendent mansion",
    },
    bloodline_spells: {
      initial: "faerie dust",
      advanced: "fey disappearance",
      greater: "fey glamour",
    },
    blood_magic:
      "Colorful fey glamours dance around you or one target, causing them to be concealed for 1 round. Such obvious concealment can’t be used to Hide.",
  },
  {
    name: "Genie",
    source: "Advanced Player's Guide",
    page: 138,
    description:
      "Through lineage, magic, or wishes made real, the blood of a noble genie flows through your veins.",
    spell_list: "arcane",
    bloodline_skills: ["Arcana", "Deception"],
    granted_spells: {
      cantrip: "detect magic",
      first: "illusory disguise",
      second: "variable",
      third: "enthrall",
      fourth: "creation",
      fifth: "variable",
      sixth: "true seeing",
      seventh: "energy aegis",
      eighth: "variable",
      nineth: "resplendent mansion",
    },
    bloodline_spells: {
      initial: "genie's veil",
      advanced: "heart's desire",
      greater: "wish-twisted form",
    },
    blood_magic:
      "Your spellcasting warps reality and distracts your foes. Either you gain a +1 status bonus to Deception checks for 1 round, or a target takes a –1 status penalty to Perception for 1 round.",
    subsets: [
      {
        name: "Genie Type",
        source: "Advanced Player's Guide",
        page: 138,
        description:
          "At first level, choose the type of genie that influenced your bloodline: janni, djinni, efreeti, marid, or shaitan. You can't change your genie type later. This determines what granted_spells: { you receive at second, fifth, and eighth level.\nJanni second: create food; fifth: banishment; eighth: scintillating pattern\nDjinni second: invisibility; fifth: illusory scene; eighth: punishing winds\nEfreeti second: enlarge; fifth: elemental form (fire only); eighth: maze\nMarid second: water walk; fifth: control water; eighth: horrid wilting\nShaitan second: glitterdust; fifth: wall of stone; eighth: earthquake",
      },
    ],
  },
  {
    name: "Hag",
    source: "Core Rulebook",
    page: 197,
    descriotion:
      "A hag long ago cursed your family, or you are a descendant of a hag or changeling, and their accursed corruption infests your blood and soul.",
    spell_list: "occult",
    bloodline_skills: ["Deception", "Occultism"],
    granted_spells: {
      cantrip: "daze",
      first: "illusory disguise",
      second: "touch of idiocy",
      third: "blindness",
      fourth: "outcast's curse",
      fifth: "mariner's curse",
      sixth: "baleful polymorph",
      seventh: "warp mind",
      eighth: "spiritual epidemic",
      nineth: "nature's enmity",
    },
    bloodline_spells: {
      initial: "jealous hex",
      advanced: "horrific visage",
      greater: "you're mine",
    },
    blood_magic:
      "Spiteful curses punish your foes. The first creature that deals damage to you before the end of your next turn takes 2 mental damage per spell level and must attempt a basic Will save.",
  },

  {
    name: "Imperial",
    source: "Core Rulebook",
    page: 198,
    descriotion:
      "One of your ancestors was a mortal who mastered magic. Such magical blood can remain latent for generations, but in you it manifested in full.",
    spell_list: "arcane",
    bloodline_skills: ["Arcana", "Society"],
    granted_spells: {
      cantrip: "detect magic",
      first: "magic missile",
      second: "dispel magic",
      third: "haste",
      fourth: "dimension door",
      fifth: "prying eye",
      sixth: "disintegrate",
      seventh: "prismatic spray",
      eighth: "maze",
      nineth: "prismatic sphere",
    },
    bloodline_spells: {
      initial: "ancestral memories",
      advanced: "extend spell",
      greater: "arcane countermeasure",
    },
    blood_magic:
      "A surge of ancestral memories grants you or one target a +1 status bonus to skill checks for 1 round.",
  },

  {
    name: "Nymph",
    source: "Advanced Player's Guide",
    page: 138,
    description:
      "One of your ancestors was inspired by a nymph, or perhaps was a nymph themself, and now the beauty of nature lives in you.",
    spell_list: "primal",
    bloodline_skills: ["Diplomacy", "Nature"],
    granted_spells: {
      cantrip: "tanglefoot",
      first: "charm",
      second: "calm emotions",
      third: "animal vision",
      fourth: "vital beacon",
      fifth: "crushing despair",
      sixth: "repulsion",
      seventh: "unfettered pack",
      eighth: "moment of renewal",
      nineth: "overwhelming presence",
    },
    bloodline_spells: {
      initial: "nymph's token",
      advanced: "blinding beauty",
      greater: "establish ward",
    },
    blood_magic:
      "Nymph grace accentuates your movements and distracts your foes, either granting you a +1 status bonus to Diplomacy checks for 1 round or imposing a –1 status penalty on one target's Will saves for 1 round.",
  },
  {
    name: "Phoenix",
    rarity: "Uncommon",
    source: "Pathfinder #168: King of the Mountain",
    page: 74,
    description:
      "You have been blessed by a phoenix, perhaps via some magical interaction with a similarly blessed individual.\nGrant this new sorcerer bloodline to players who finish the Fists of the Ruby Phoenix Adventure Path. Players can then choose this bloodline for any new sorcerer characters they create for future campaigns.",
    spell_list: "primal",
    bloodline_skills: ["Diplomacy", "Nature"],
    granted_spells: {
      cantrip: "detect magic",
      first: "burning hands",
      second: "see invisibility",
      third: "fireball",
      fourth: "remove curse",
      fifth: "breath of life",
      sixth: "disintegrate",
      seventh: "contingency",
      eighth: "moment of renewal",
      nineth: "meteor swarm",
    },
    bloodline_spells: {
      initial: "rejuvenating flames",
      advanced: "shroud of flame",
      greater: "cleansing flames",
    },
    blood_magic:
      "The primal fire of life and death flows through you or one target. Choose to have either you or a target of the spell gain temporary Hit Points equal to the spell's level for 1 round, or to have a target of the spell take fire damage equal to the spell's level (if the spell already deals initial fire damage, combine this with the spell's initial damage before determining weaknesses and resistances).",
  },
  {
    name: "Psychopomp",
    source: "Advanced Player's Guide",
    page: 138,
    description:
      "For good or ill, your ancestors' deeds drew the attention of psychopomps, or you might somehow count one in your family tree. The presence of these shepherds of souls and enemies of undeath has left an indelible mark on you.",
    spell_list: "divine",
    bloodline_skills: ["Intimidation", "Religion"],
    granted_spells: {
      cantrip: "disrupt undead",
      first: "heal",
      second: "calm emotions",
      third: "searing light",
      fourth: "dimensional anchor",
      fifth: "death ward",
      sixth: "spirit blast",
      seventh: "finger of death",
      eighth: "spirit song",
      nineth: "massacre",
    },
    bloodline_spells: {
      initial: "sepulchral mask",
      advanced: "spirit veil",
      greater: "shepherd of souls",
    },
    blood_magic:
      "The border between life and death becomes blurred to you. Either you gain a +2 status bonus to Fortitude saving throws for 1 round, or a target takes 1 damage per spell level. The damage is negative if the target is living or positive if the target is undead. If the spell already deals that type of damage, combine it with the spell's initial damage before determining weaknesses and resistances.",
  },
  {
    name: "Shadow",
    source: "Advanced Player's Guide",
    page: 138,
    description:
      "Whether due to a velstrac's manipulations or a planar jaunt gone horribly wrong, your bloodline was infused with a vein of shadow.",
    spell_list: "occult",
    bloodline_skills: ["Occultism", "Stealth"],
    granted_spells: {
      cantrip: "chill touch",
      first: "grim tendrils",
      second: "darkness",
      third: "chilling darkness",
      fourth: "phantasmal killer",
      fifth: "shadow siphon",
      sixth: "collective transposition",
      seventh: "duplicate foe",
      eighth: "disappearance",
      nineth: "weird",
    },
    bloodline_spells: {
      initial: "dim the light",
      advanced: "steal shadow",
      greater: "consuming darkness",
    },
    blood_magic:
      "Shadows grow deeper around you or one target, either granting a +1 status bonus to Stealth or imposing a –1 status penalty to Perception for 1 round.",
  },
  {
    name: "Undead",
    source: "Core Rulebook",
    page: 198,
    description:
      "The touch of undeath runs through your blood. Your family tree might contain powerful undead, like a vampire, or perhaps you died and returned a bit different.",
    spell_list: "divine",
    bloodline_skills: ["Intimidation", "Religion"],
    granted_spells: {
      cantrip: "chill touch",
      first: "harm",
      second: "false life",
      third: "bind undead",
      fourth: "talking corpse",
      fifth: "cloudkill",
      sixth: "vampiric exsanguination",
      seventh: "finger of death",
      eighth: "horrid wilting",
      nineth: "wail of the banshee",
    },
    bloodline_spells: {
      initial: "undeath's blessing",
      advanced: "drain life",
      greater: "grasping grave",
    },
    blood_magic:
      "Necromantic energy flows through you or one target. Either you gain temporary Hit Points equal to the spell’s level for 1 round, or a target takes 1 negative damage per spell level (if the spell already deals initial negative damage, combine this with the spell’s initial damage before determining weaknesses and resistances).",
  },
  {
    name: "Wyrmblessed",
    source: "The Mwangi Expanse",
    page: 75,
    description:
      "You lay claim to the might of dragons, but your powers are sacred instead of arcane—born from a worship of draconic might so powerful it infused your blood or, perhaps, from a celestial or draconic power blessing one of your ancestors received.",
    spell_list: "divine",
    bloodline_skills: ["Intimidation", "Religion"],
    granted_spells: {
      cantrip: "read aura",
      first: "mage armor",
      second: "resist energy",
      third: "haste",
      fourth: "reflective scales",
      fifth: "cloak of colors",
      sixth: "repulsion",
      seventh: "mask of terror",
      eighth: "divine inspiration",
      nineth: "overwhelming presence",
    },
    bloodline_spells: {
      initial: "dragon claws",
      advanced: "dragon breath",
      greater: "dragon wings",
    },
    blood_magic:
      "Draconic might carries in your voice. Either you gain a +1 status bonus to Intimidation checks for 1 round, or a target takes a –1 status penalty to Will saves for 1 round.",
    subsets: [
      {
        name: "Dragon Type",
        source: "The Mwangi Expanse",
        page: 75,
        description:
          "At first level, choose the type of dragon that influenced your bloodline. You can't change your dragon type later. This choice affects how some of your }, bloodline_spells: { function. The good metallic dragons and their damage types are brass (fire), bronze (electricity), copper (acid), gold (fire), and silver (cold). The evil chromatic dragons and their damage types are black (acid), blue (electricity), green (poison), red (fire), and white (cold). The primal dragons of planar origin and their damage types are brine (acid), cloud (electricity), crystal (piercing), magma (fire), and umbral (negative). The imperial dragons and their damage types are forest (piercing), sea (bludgeoning), sky (electricity), sovereign (mental), and underworld (fire). For the dragon breath focus spell, the area is a 60-foot line for a brine dragon; a 30-foot cone for a cloud, crystal, forest, magma, sovereign, or umbral dragon; and a 10-foot burst within 30 feet for a sea, sky, or underworld dragon.",
      },
      {
        name: "Related Bloodline",
        source: "The Mwangi Expanse",
        page: 75,
        description:
          "Because the wyrmblessed and draconic bloodlines have similar origins, they count the same as each other for the purposes of prerequisites and access requirements.",
      },
    ],
  },
];

const patrons = [
  {
    name: "Baba Yaga",
    rarity: "Rare",
    source: "Legends",
    page: 32,
    description:
      "Baba Yaga teaches you how to transfer spirits into objects and freeze your foes. A witch with Baba Yaga as their patron can choose an inanimate object as a familiar. If they do, they still can gain master abilities and some familiar abilities that don’t require movement. The object familiar has no Speeds and must select a Speed familiar ability before it can move, coming to life in a way appropriate to the chosen Speed and using the statistics of a normal familiar for that day.",
    spell_list: "occult",
    patron_skill: ["Occultism"],
    hex_cantrip: "spirit object",
    granted_spell: "chilling spray",
  },
  {
    name: "Curse",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Foiling foes and undermining those who stand in your way are the tools of the curse patrons.",
    spell_list: "occult",
    patron_skill: ["Occultism"],
    hex_cantrip: "evil eye",
    granted_spell: "ray of enfeeblement",
  },
  {
    name: "Fate",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Through your patron, you gain glimpses of the future and insight into the ever-woven tapestry of time.",
    spell_list: "occult",
    patron_skill: ["Occultism"],
    hex_cantrip: "nudge fate",
    granted_spell: "true strike",
  },
  {
    name: "Fervor",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Your patron represents a grand ideal or goal, granting you magic to further their mission and bring others to the cause.",
    spell_list: "divine",
    patron_skill: ["Religion"],
    hex_cantrip: "stoke the heart",
    granted_spell: "command",
  },
  {
    name: "Night",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Your patron speaks from the shadows, granting you power over darkness and dreams.",
    spell_list: "occult",
    patron_skill: ["Occultism"],
    hex_cantrip: "shroud of night",
    granted_spell: "sleep",
  },
  {
    name: "Rune",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Your patron is one of sigils and symbols, tomes and texts, words and wisdom.",
    spell_list: "arcane",
    patron_skill: ["Arcana"],
    hex_cantrip: "discern secrets",
    granted_spell: "magic weapon",
  },
  {
    name: "Wild",
    source: "Advanced Player's Guide",
    page: 99,
    description: "The wild places of the world feel the touch of your patron.",
    spell_list: "primal",
    patron_skill: ["Nature"],
    hex_cantrip: "wilding word",
    granted_spell: "your choice of summon animal or summon plant or fungus",
  },
  {
    name: "Winter",
    source: "Advanced Player's Guide",
    page: 99,
    description:
      "Your patron reflects the frozen reaches of the world, bitterly cruel to those who underestimate that power.",
    spell_list: "primal",
    patron_skill: ["Nature"],
    hex_cantrip: "clinging ice",
    granted_spell: "gust of wind",
  },
];

const lessons = [
  {
    name: "Lesson of Calamity",
    rarity: "Uncommon",
    source: "Pathfinder #169: Kindled Magic",
    page: 75,
    lesson_type: "Basic",
    description:
      "You gain the stumbling curse hex, and your familiar learns ill omen.",
  },
  {
    name: "Lesson of Dreams",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Basic",
    description:
      "You gain the veil of dreams hex, and your familiar learns sleep.",
  },
  {
    name: "Lesson of Life",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Basic",
    description:
      "You gain the life boost hex, and your familiar learns spirit link.",
  },
  {
    name: "Lesson of Protection",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Basic",
    description:
      "You gain the blood ward hex, and your familiar learns mage armor.",
  },
  {
    name: "Lesson of the Elements",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Basic",
    description:
      "You gain the elemental betrayal hex. Your familiar learns your choice of burning hands, air bubble, hydraulic push, or pummeling rubble.",
  },
  {
    name: "Lesson of Vengeance",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Basic",
    description:
      "You gain the needle of vengeance hex, and your familiar learns phantom pain.",
  },
  {
    name: "Lesson of Mischief",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Greater",
    description:
      "You gain the deceiver's cloak hex, and your familiar learns mad monkeys.",
  },
  {
    name: "Lesson of Shadow",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Greater",
    description:
      "You gain the malicious shadow hex, and your familiar learns chilling darkness.",
  },
  {
    name: "Lesson of Snow",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Greater",
    description:
      "You gain the personal blizzard hex, and your familiar learns wall of wind.",
  },
  {
    name: "Lesson of Death",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Major",
    description:
      "You gain the curse of death hex, and your familiar learns raise dead.",
  },
  {
    name: "Lesson of Renewal",
    source: "Advanced Player's Guide",
    page: 100,
    lesson_type: "Major",
    description:
      "You gain the restorative moment hex, and your familiar learns field of life.",
  },
  {
    name: "Lesson of the Frozen Queen",
    rarity: "Rare",
    source: "Legends",
    page: 32,
    lesson_type: "Major",
    description:
      "You gain the glacial heart hex, and your familiar learns wall of ice.",
  },
];

const schools = [
  {
    name: "Abjuration",
    source: "Core Rulebook",
    page: 297,
    description:
      "Abjurations protect and ward. They create barriers that keep out attacks, effects, or even certain types of creatures. They also create effects that harm trespassers or banish interlopers.",
  },
  {
    name: "Conjuration",
    source: "Core Rulebook",
    page: 297,
    description:
      "Conjuration spells transport creatures via teleportation, create an object, or bring a creature or object from somewhere else (typically from another plane) to follow your commands.\nConjuration spells often have the teleportation trait, and the creatures summoned by conjuration spells have the summoned trait.",
  },
  {
    name: "Divination",
    source: "Core Rulebook",
    page: 297,
    description:
      "Divinations allow you to learn the secrets of the present, past, and future. They bestow good fortune, grant you the ability to perceive remote locations, and reveal secret knowledge.\nDivinations often have the detection trait if they find something, the prediction trait if they grant you insight about what might happen in the future, the revelation trait if they show things as they truly are, or the scrying trait if they let you perceive another location.",
  },
  {
    name: "Enchantment",
    source: "Core Rulebook",
    page: 297,
    description:
      "Enchantments affect the minds and emotions of other creatures—sometimes to influence and control them, and other times to bolster them to greater heights of courage. Enchantment spells almost always have the mental trait, and many have the emotion trait or the fear trait.",
    aside: {
      name: "Magic and Morality",
      description:
        "While magic allows you to perform wondrous acts in the game, it can be used for terrible purposes. While some spells are obviously vile or have the evil trait and a direct connection to the profane, other spells can be used for good or ill. Using magic does not free you from the morality of the outcome.\nNowhere is this more true than when it comes to enchantment spells, especially those used to compel a character to do something. These spells can remove the power of choice from a character and can very easily be used in ways that are evil. Dominating an ogre and forcing him to abandon his guard post is not necessarily evil, but using that same spell to force a merchant to give you all of his wares certainly is. Using a spell for an evil purpose can cause a player character’s alignment to shift to evil, with the ultimate judgment of whether a player is using a spell for an evil purpose left up to the GM.\nRegardless of in-game effects, all players should take care when using such spells. These effects can negatively affect people at the table, as they might create situations that echo truly awful experiences players might have had, creating uncomfortable or hostile environments. Players and GMs should work to prevent these situations so everyone can focus on having fun at the table.",
    },
  },
  {
    name: "Evocation",
    source: "Core Rulebook",
    page: 298,
    description:
      "Evocations capture magical energy and then shape it to harm your foes or protect your allies. Evocation spells often have a trait that comes from the type of damage they deal, such as acid, cold, fire, force, or sonic.",
  },
  {
    name: "Illusion",
    source: "Core Rulebook",
    page: 298,
    description:
      "Illusions create the semblance of something real, fooling the eyes, ears, and other senses. Depending on how the illusion is perceived, it might have the auditory or visual traits, and some also have the mental trait.",
    aside: {
      name: "Disbelieving Illusions",
      description:
        "Sometimes illusions allow an affected creature a chance to disbelieve the spell, which lets the creature effectively ignore the spell if it succeeds at doing so. This usually happens when a creature Seeks or otherwise spends actions to engage with the illusion, comparing the result of its Perception check (or another check or saving throw, at the GM’s discretion) to the caster’s spell DC. Mental illusions typically provide rules in the spell’s description for disbelieving the effect (often allowing the affected creature to attempt a Will save).\nIf the illusion is visual, and a creature interacts with the illusion in a way that would prove it is not what it seems, the creature might know that an illusion is present, but it still can’t ignore the illusion without successfully disbelieving it. For instance, if a character is pushed through the illusion of a door, they will know that the door is an illusion, but they still can’t see through it. Disbelieving an illusion makes it and those things it blocks seem hazy and indistinct, so even in the case where a visual illusion is disbelieved, it may, at the GM’s discretion, block vision enough to make those on the other side concealed.",
    },
  },
  {
    name: "Necromancy",
    source: "Core Rulebook",
    page: 298,
    description:
      "Necromancy spells harness the power of life and death. They can sap life essence or sustain creatures with life-saving healing. Necromancy spells often have the curse, death, healing, negative, or positive traits.",
  },
  {
    name: "Transmutation",
    source: "Core Rulebook",
    page: 297,
    description:
      "Transmutation spells make alterations to or transform the physical form of a creature or object. The morph and polymorph traits appear primarily in transmutation spells.",
  },
];
