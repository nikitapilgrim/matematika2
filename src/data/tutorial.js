import {LAYOUTS} from "./stages";

export default [
    {
        layout: LAYOUTS.speech,
        phrase: `Zdravo!
        Pokazaću ti kako se koristi ovaj program! Klikni da bismo išli dalje.`,
        type: 'tutorial',
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Da bi uključio ili isključio muziku klikni na ovaj simbol. Klikni sada na njega.`,
        type: 'tutorial',
        elem: 'music'
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Ako si zapeo negdje i treba ti pomoć, klikni ovdje.`,
        type: 'tutorial',
        elem: 'menu'
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Klikni ovdje da bi direktno izabrao kviz koji želiš odigrati.`,
        type: 'tutorial',
        elem: 'help'
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Ako si spreman, krenućemo sada sa prvim kvizom!`,
        type: 'tutorial'
    },
    {
       animation: 'kviz'
    }
]