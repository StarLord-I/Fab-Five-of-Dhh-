// src/data/dhhArtists.js
import { 
  krsnaMain, krsnalest, krsnaright, 
  emiwayMain, emiwayleft, emiwayright, 
  raftaarMain, raftaarleft, raftaarright, 
  youngstunnasMain, anjum, yunus, 
  seedhemautMain, calm, Abj 
} from './image'; // Import variables cleanly[cite: 3]

export const dhhArtists = [
  {
    id: "01",
    name: "KR$NA",
    tagline: "THE LYRICISM GOD // RAW DELHI BARS",
    bio: "pioneering Indian rapper and songwriter, widely recognized for his intricate lyricism, technical skill, and role in shaping the Desi Hip-Hop (DHH) movement.",
    editorialPhotos: [
      {
        id: "krshn-01",
        img: krsnaMain, // FIXED: Removed string quotes to reference the variable directly!
        aspectRatio: "aspect-[3/4]",
        parallaxSpeed: 0.2
      },
      {
        id: "krshn-02",
        img: krsnalest, // FIXED: Reference variable directly[cite: 3]
        aspectRatio: "aspect-square",
        parallaxSpeed: -0.4
      },
      {
        id: "krshn-03",
        img: krsnaright, // FIXED: Reference variable directly[cite: 3]
        aspectRatio: "aspect-[4/3]",
        parallaxSpeed: 0.1
      }
    ],
    discography: {
      featuredAlbum: "Still Here",
      tracks: [
        { id: "t1", title: "No Cap", duration: "3:24" },
        { id: "t2", title: "Prarthana", duration: "3:41" },
        { id: "t3", title: "Makasam", duration: "4:52" },
        { id: "t4", title: "Kaha Tak", duration: "3:15" }
      ]
    }
  },
  {
    id: "02",
    name: "EMIWAY",
    tagline: "THE INDEPENDENT KING // MUMBAI STREETS",
    bio: "a self-made rap icon, known for his explosive street anthems and relentless hustle that has redefined independence in the Indian hip-hop scene.",
    editorialPhotos: [
      {
        id: "emiway-01",
        img: emiwayMain, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[3/4]",
        parallaxSpeed: 0.2
      },
      {
        id: "emiway-02",
        img: emiwayleft, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-square",
        parallaxSpeed: -0.4
      },
      {
        id: "emiway-03",
        img: emiwayright, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[4/3]",
        parallaxSpeed: 0.1
      }
    ],
    discography: {
      featuredAlbum: "Machayenge",
      tracks: [
        { id: "t1", title: "Machayenge", duration: "3:45" },
        { id: "t2", title: "Company", duration: "4:12" },
        { id: "t3", title: "STILL NUMBER 1", duration: "3:30" },
        { id: "t4", title: "KING OF INDIAN HIP HOP", duration: "4:05" }
      ]
    } 
  },
  {
    id: "03",
    name: "RAFTAR",
    tagline: "THE MULTIVERSE ALPHA // KALAMKAAR RECORD",
    bio: "a master lyricist, producer, and mentor whose pen carves deep truths while establishing institutional frameworks that redefine commercial rap.",
    editorialPhotos: [
      {
        id: "raftaar-01",
        img: raftaarMain, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[3/4]",
        parallaxSpeed: 0.2
      },
      {
        id: "raftaar-02",
        img: raftaarleft, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-square",
        parallaxSpeed: -0.4
      },
      {
        id: "raftaar-03",
        img: raftaarright, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[4/3]",
        parallaxSpeed: 0.1
      }
    ],
    discography: {
      featuredAlbum: "Proud",
      tracks: [
        { id: "t1", title: "Proud", duration: "3:50" },
        { id: "t2", title: "Saza-E-Maut", duration: "4:20" },
        { id: "t3", title: "Black Sheep", duration: "3:35" },
        { id: "t4", title: "Mantramugdh", duration: "4:00" }
      ]
    }   
  },
  {
    id: "04",
    name: "Young Stunners",
    tagline: "THE DUO THAT REDEFINED URDU RAP // KARACHI LEGENDS",
    bio: "a dynamic duo known for their innovative approach to Urdu rap, blending traditional themes with modern beats.",
    editorialPhotos: [
      {
        id: "ys-01",
        img: youngstunnasMain, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[3/4]",
        parallaxSpeed: 0.2
      },
      {
        id: "ys-02",
        img: anjum, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-square",
        parallaxSpeed: -0.4
      },
      {
        id: "ys-03",
        img: yunus, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[4/3]",
        parallaxSpeed: 0.1
      }
    ],
    discography: {
      featuredAlbum: "Don't Mind",
      tracks: [
        { id: "t1", title: "Don't Mind", duration: "3:40" },
        { id: "t2", title: "Wild", duration: "4:10" },
        { id: "t3", title: "Quarantine", duration: "3:25" },
        { id: "t4", title: "Agency", duration: "4:15" }
      ]
    }
  },
  {
    id: "05",
    name: "SEEDHE MAUT",
    tagline: "DELHI CHAOS // RAW UNDERGROUND ENERGY",
    bio: "Re-writing the dictionary of competitive hip-hop. Calm and Encore ABJ operate as a single mind across twin bodies, weaponizing relentless rapid-fire technicality, unmatched chemistry, and a fiercely independent spirit born in the capital.",
    editorialPhotos: [
      {
        id: "sm-01",
        img: seedhemautMain, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[3/4]",
        parallaxSpeed: 0.2
      },
      {
        id: "sm-02",
        img: calm, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-square",
        parallaxSpeed: -0.4
      },
      {
        id: "sm-03",
        img: Abj, // FIXED: Quote marks removed[cite: 3]
        aspectRatio: "aspect-[4/3]",
        parallaxSpeed: 0.1
      }
    ],
    discography: {
      featuredAlbum: "Nayaab",
      tracks: [
        { id: "sm-t1", title: "Nunchaku", duration: "3:46" },
        { id: "sm-t2", title: "Namastute", duration: "2:58" },
        { id: "sm-t3", title: "Maina", duration: "4:12" },
        { id: "sm-t4", title: "Pankh", duration: "3:35" }
      ]
    }
  }
];