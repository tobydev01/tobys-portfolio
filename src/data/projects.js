// all your project data, including detailPage flag and detail template
import QuestSystemThumb from "../components/images/QuestSystem.png";
import DungeonSystemThumb from "../components/images/DungeonSystemShowcase.png";
import MovementSystemThumb from "../components/images/MovementSystem.png";
import UIThumb from "../components/images/UI.png";

export const projects = [
  {
    slug: "quest-system",
    title: "Quest System",
    desc: "A fully functional Quest System which includes a journal log book, a daily collect herb quest, and a collect herb quest to start a storyline.",
    tags: ["Lua", "UI", "DataStoreService", "RemoteEvents"],
    videoUrl:
      "https://drive.google.com/file/d/13bUQHskrE2Q6N3HXG6LVlE828uwyAebY/view",
    thumbnail: QuestSystemThumb,

    testimonialEnabled: true,
    testimonial: {
      name: "America",
      text: "Toby is a very good script writer and works very fast, especially for how much I payed!",
      rating: 5,
    },
    detailPage: true, // ← toggles the sub-page link

    // ← this is your template for detailed sub-page content:
    detail: {
      longDescription: `
        The Quest System I built supports:
        • Tiered quest chains with branching conditions  
        • A journal UI that saves read/unread status  
        • Daily quests with reset timers  
        • Customizable reward packs (XP, items, cosmetics)
      `,
      features: [
        "Branching quest logic",
        "Persistent save states via DataStoreService",
        "Dynamic objectives (collect, kill, talk)",
        "Rich UI with typewriter effect",
      ],
      gallery: [QuestSystemThumb],
      // repoUrl: "https://github.com/yourusername/roblox-quest-system",
      demoUrl: "https://youtu.be/your-demo-video",
      dateCompleted: "March 2025",
      client: "Client: America4332",
    },
  },

  {
    slug: "dungeon-system",
    title: "Dungeon System",
    desc: "Four unique maps plus a treasure room. Showcases AI & Pathfinding—you must defeat enemies spawning from the floor to progress.",
    tags: ["Lua", "Pathfinding", "Multiplayer", "AI"],
    videoUrl:
      "https://drive.google.com/file/d/1FoH1k-ONiDtXkPcq-unqpD8eZx9WzSa5/view?usp=sharing",
    thumbnail: DungeonSystemThumb,

    testimonialEnabled: true,
    testimonial: {
      name: "Client: .",
      text: "Toby was a pleasure to work with, and scripted my whole game in a very short time. Would hire again & recommend!",
      rating: 5,
    },
    detailPage: false, // no sub-page
    // no `detail` needed here
  },

  {
    slug: "movement-system",
    title: "Movement System",
    desc: "A fully functional Movement System, which included double tap W to sprint. It also includes 4 different dash types: forward, backward, left, and right. Upon each dash, the player would dash and have a VFX trail behind them.",
    tags: ["Lua", "VFX", "Movement", "Client/Server Comms"],
    videoUrl:
      "https://drive.google.com/file/d/1-ZaE9P1NUbARy0X42Rq2vtcDyQhrsTH5/view?usp=sharing",
    thumbnail: MovementSystemThumb,

    testimonialEnabled: false,
    testimonial: {
      name: "America",
      text: "Toby is a very good script writer and works very fast, especially for how much I payed!",
      rating: 5,
    },
    detailPage: true, // ← toggles the sub-page link

    // ← this is your template for detailed sub-page content:
    detail: {
      longDescription: `
        The Movement System I built supports:
        • Double Tapping W to sprint
        • 4 different dash types: forward, backward, left, and right  
        • Custom VFX trails on each dash
        • Customizable dash speed and cooldowns  
        • Client/Server communication for dash effects
        • Smooth camera transitions during dashes  
        • Camera locking to determine dash direction
      `,
      features: [
        "Double tap W to sprint",
        "4 different dash types",
        "Custom VFX trails",
        "Customizable dash speed and cooldowns",
      ],
      gallery: [MovementSystemThumb],
      // repoUrl: "https://github.com/yourusername/roblox-quest-system",
      demoUrl: "https://youtu.be/your-demo-video",
      dateCompleted: "April 26, 2025",
      client: "Client: ezon",
    },
  },

  {
    slug: "ui-system",
    title: "UI System",
    desc: "Fully scripted UI system with a custom tweening animation. It includes a typewriter effect for text, and a custom tweening system for animations.",
    tags: ["Lua", "UI", "TweenService", "Animations"],
    videoUrl:
      "https://drive.google.com/file/d/1wAaySq1_pYlVMlc2nauvXgdpMcVYr-yD/view?usp=sharing",
    thumbnail: UIThumb,

    testimonialEnabled: false,
    detailPage: true, // ← toggles the sub-page link

    // ← this is your template for detailed sub-page content:
    detail: {
      longDescription: `
        The UI I scripted supports:
        • A shop system with working gamepasses/dev products.
        • A custom tweening animation system for UI elements.
        • A typewriter effect for text elements.
        • A custom tweening system for animations.
        • A map system with working teleportation to different areas.
        • A settings system with working day/night cycle & weather controls.
        • A car spawning system with working car models.
      `,
      features: [
        "Custom tweening animation system",
        "Typewriter effect for text",
        "Custom tweening system for animations",
        "Shop system with working gamepasses/dev products",
        "Map system with working teleportation to different areas",
      ],
      gallery: [MovementSystemThumb],
      // repoUrl: "https://github.com/yourusername/roblox-quest-system",
      demoUrl:
        "https://drive.google.com/file/d/1wAaySq1_pYlVMlc2nauvXgdpMcVYr-yD/view?usp=sharing",
      dateCompleted: "January, 2025",
      // client: "Client: ezon",
    },
  },

  // …more projects…
];
