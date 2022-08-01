//Config for home.jsx
import iconNormal from "../assets/icon-type-normal.png"
import iconFire from "../assets/icon-type-fire.png"
import iconWater from "../assets/icon-type-water.png"
import iconElectric from "../assets/icon-type-electric.png"
import iconGrass from "../assets/icon-type-grass.png"
import iconIce from "../assets/icon-type-ice.png"
import iconFighting from "../assets/icon-type-fighting.png"
import iconPoison from "../assets/icon-type-poison.png"
import iconGround from "../assets/icon-type-ground.png"
import iconFlying from "../assets/icon-type-flying.png"
import iconPsychic from "../assets/icon-type-psychic.png"
import iconBug from "../assets/icon-type-bug.png"
import iconRock from "../assets/icon-type-rock.png"
import iconGhost from "../assets/icon-type-ghost.png"
import iconDragon from "../assets/icon-type-dragon.png"
import iconSteel from "../assets/icon-type-steel.png"
import iconDark from "../assets/icon-type-tenebre.png"

export const typesElementsPkm = [
    {
        type: "Normal",
        color: "#8e99a1",
        icon: iconNormal
    },
    {
        type: "Feu",
        color: "#ff9451",
        icon: iconFire
    },
    {
        type: "Eau",
        color: "#4286d7",
        icon: iconWater
    },
    {
        type: "Électrique",
        color: "#f7da35",
        icon: iconElectric
    },
    {
        type: "Plante",
        color: "#00c952",
        icon: iconGrass
    },
    {
        type: "Glace",
        color: "#3cd6c0",
        icon: iconIce
    },
    {
        type: "Combat",
        color: "#e3006a",
        icon: iconFighting
    },
    {
        type: "Poison",
        color: "#b83ac8",
        icon: iconPoison
    },
    {
        type: "Sol",
        color: "#ea6d43",
        icon: iconGround
    },
    {
        type: "Vol",
        color: "#a5bbf0",
        icon: iconFlying
    },
    {
        type: "Psy",
        color: "#ff4b73",
        icon: iconPsychic
    },
    {
        type: "Insecte",
        color: "#72d128",
        icon: iconBug
    },
    {
        type: "Roche",
        color: "#c8bb8a",
        icon: iconRock
    },
    {
        type: "Spectre",
        color: "#575bad",
        icon: iconGhost
    },
    {
        type: "Dragon",
        color: "#0056c2",
        icon: iconDragon
    },
    {
        type: "Acier",
        color: "#40869b",
        icon: iconSteel
    },
    {
        type: "Ténèbres",
        color: "#5d4e64",
        icon: iconDark
    }
]


//register.jsx
export const numberParticipants = Array.apply(null, new Array(10)).map((el, i) => {return ++i})

//my-types.jsx

export const challenger = [
    {
        name: "Kriss",
        pseudo: "Similiss",
        type: "Vol",
        team: [
            "Pkm1",
            "Pkm2",
            "Pkm3",
            "Pkm4",
            "Pkm5",
            "Pkm6"
        ]
    },
    {
        name: "Jefafa",
        pseudo: "Groundella",
        type: "Sol",
        team: [
            "Pkm1",
            "Pkm2",
            "Pkm3",
            "Pkm4",
            "Pkm5",
            "Pkm6",
        ]
    },
    {
        name: "Pierre",
        pseudo: "Inconnu1",
        type: "Acier",
        team: [
            "Pkm1",
            "Pkm2",
            "Pkm3",
            "Pkm4",
            "Pkm5",
            "Pkm6",
        ]
    },
    {
        name: "Flow",
        pseudo: "Inconnu2",
        type: "Électrique",
        team: [
            "Pkm1",
            "Pkm2",
            "Pkm3",
            "Pkm4",
            "Pkm5",
            "Pkm6",
        ]
    },
    {
        name: "Sacha",
        pseudo: "Inconnu3",
        type: "Combat",
        team: [
            "Pkm1",
            "Pkm2",
            "Pkm3",
            "Pkm4",
            "Pkm5",
            "Pkm6",
        ]
    }
]