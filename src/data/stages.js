export const LAYOUTS = {
    simple: 'simple',
    manyInputs: 'manyInputs',
    dragAndDrop: 'dragAndDrop',
    sortable: 'sortable',
    choice: 'choice',
    speech: 'speech',
    quiz: 'quiz'
};

export default [
    {
        layout: LAYOUTS.quiz
    },
    {
        id: 1,
        layout: LAYOUTS.simple,
        question: "4 + 5 = {{input}}",
        answer: 9,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Ponavljanje sabiranja i oduzimanja u prvoj desetici. Ukucaj tačan odgovor i pritisni ENTER ili klikni na "Dalje".`,
                audio: [require('../assets/sound/speech/speech2.aac')]
            },
        ]
    },
    {
        id: 2,
        layout: LAYOUTS.simple,
        question: "2 + 7 = {{input}}",
        answer: 9
    },
    {
        id: 3,
        layout: LAYOUTS.simple,
        question: "8 + 2 = {{input}}",
        answer: 10
    },
    {
        id: 4,
        layout: LAYOUTS.simple,
        question: "6 + 3 = {{input}}",
        answer: 9
    },
    {
        id: 5,
        layout: LAYOUTS.simple,
        question: "4 + 6 = {{input}}",
        answer: 10
    },
    {
        id: 6,
        layout: LAYOUTS.simple,
        question: "5 + 5 = {{input}}",
        answer: 10
    },
    {
        id: 7,
        layout: LAYOUTS.simple,
        question: "9 - 4 = {{input}}",
        answer: 5
    },
    {
        id: 8,
        layout: LAYOUTS.simple,
        question: "10 - 7 = {{input}}",
        answer: 3
    },
    {
        id: 9,
        layout: LAYOUTS.simple,
        question: "7 - 2 = {{input}}",
        answer: 5
    },
    {
        id: 10,
        layout: LAYOUTS.simple,
        question: "7 - 5 = {{input}}",
        answer: 2
    },
    {
        id: 11,
        layout: LAYOUTS.simple,
        question: "6 - 5 = {{input}}",
        answer: 1
    },
    {
        id: 12,
        layout: LAYOUTS.simple,
        question: "8 - 3 = {{input}}",
        answer: 5
    },
    {
        id: 13,
        layout: LAYOUTS.simple,
        question: "5+3-2 = {{input}}",
        answer: 6
    },
    {
        id: 14,
        layout: LAYOUTS.simple,
        question: "8-2+4 = {{input}}",
        answer: 10
    },
    {
        id: 15,
        layout: LAYOUTS.simple,
        question: "7+2-5 = {{input}}",
        answer: 4
    },
    {
        id: 16,
        layout: LAYOUTS.simple,
        question: "8+2-5 = {{input}}",
        answer: 5
    },
    {
        id: 17,
        layout: LAYOUTS.simple,
        question: "7+3-6 = {{input}}",
        answer: 4
    },
    {
        id: 18,
        layout: LAYOUTS.simple,
        question: "2+6-3 = {{input}}",
        answer: 5
    },
    {
        id: 19,
        layout: LAYOUTS.simple,
        question: "(7-5)+6 = {{input}}",
        answer: 8
    },
    {
        id: 20,
        layout: LAYOUTS.simple,
        question: "10-(7-3) = {{input}}",
        answer: 6
    },
    {
        id: 21,
        layout: LAYOUTS.simple,
        question: "9-(6+3) = {{input}}",
        answer: 0
    },
    {
        id: 22,
        layout: LAYOUTS.simple,
        question: "{{input}}-7=3",
        answer: 10,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `U kvadratić upiši odgovarajući broj i klikni na "Dalje" ili pritisni ENTER.`,
                audio: [require('../assets/sound/speech/speech3.aac')]
            },
        ]
    },
    {
        id: 23,
        layout: LAYOUTS.simple,
        question: "9-{{input}}=7",
        answer: 2
    },
    {
        id: 23,
        layout: LAYOUTS.simple,
        question: "4+{{input}}=10",
        answer: 6
    },
    {
        id: 25,
        layout: LAYOUTS.simple,
        question: "5+{{input}}=5",
        answer: 0
    },

    {layout: LAYOUTS.quiz},
    {
        id: 26,
        layout: LAYOUTS.simple,
        question: "Petnaest {{input}}",
        answer: 15,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši ciframa (znamenkama) brojeve u kvadratić.`,
                audio: [require('../assets/sound/speech/speech4.aac')]
            },
        ]
    },
    {
        id: 27,
        layout: LAYOUTS.simple,
        question: "Jedanaest {{input}}",
        answer: 11
    },
    {
        id: 28,
        layout: LAYOUTS.simple,
        question: "Trinaest {{input}}",
        answer: 13
    },
    {
        id: 29,
        layout: LAYOUTS.simple,
        question: "Sedamnaest {{input}}",
        answer: 17
    },
    {
        id: 30,
        layout: LAYOUTS.simple,
        question: "Dvanaest {{input}}",
        answer: 12
    },

    {
        id: 31,
        layout: LAYOUTS.simple,
        question: "16 {{input}}",
        answer: ['šesnaest', 'sesnaest'],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Napiši riječima brojeve koje vidiš u kvadratić.`,
                audio: [require('../assets/sound/speech/speech5.aac')]
            },
        ]
    },
    {
        id: 32,
        layout: LAYOUTS.simple,
        question: "18 {{input}}",
        answer: 'osamnaest'
    },
    {
        id: 33,
        layout: LAYOUTS.simple,
        question: "14 {{input}}",
        answer: ['cetrnaest', 'četrnaest']
    },
    {
        id: 34,
        layout: LAYOUTS.simple,
        question: "20 {{input}}",
        answer: 'dvadeset'
    },
    {
        id: 35,
        layout: LAYOUTS.simple,
        question: "19 {{input}}",
        answer: 'devetnaest'
    },

    {
        id: 36,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: 10,
                answer: 10
            },
            {
                placeholder: false,
                answer: 11
            },
            {
                placeholder: false,
                answer: 12
            },
            {
                placeholder: 13,
                answer: 13
            },
            {
                placeholder: false,
                answer: 14
            },
            {
                placeholder: false,
                answer: 15
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `U kvadrate upiši nedostajuće brojeve.`,
                audio: [require('../assets/sound/speech/speech6.aac')]
            },
        ]
    },

    {
        id: 37,
        layout: LAYOUTS.sortable,
        items: [
            {value: 19, id: 1},
            {value: 17, id: 2},
            {value: 9, id: 3},
            {value: 12, id: 4},
            {value: 10, id: 5},
            {value: 11, id: 6}
        ],
        answer: [
            {
                placeholder: '1',
                id: 3,
            },
            {
                placeholder: '2',
                id: 5,
            },
            {
                placeholder: '3',
                id: 6,
            },
            {
                placeholder: '4',
                id: 4,
            },
            {
                placeholder: '5',
                id: 2,
            },
            {
                placeholder: '6',
                id: 1
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Poredaj po veličini brojeve od manjeg ka većem.`,
                audio: [require('../assets/sound/speech/speech7.aac')]
            },
        ]
    },
    {
        id: 38,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: 3,
                answer: 3
            },
            {
                placeholder: false,
                answer: 4
            },
            {
                placeholder: false,
                answer: 5
            },
            {
                placeholder: 6,
                answer: 6
            },
            {
                placeholder: false,
                answer: 7
            },
            {
                placeholder: false,
                answer: 8
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši odgovarajući broj u kvadratić.`,
                audio: [require('../assets/sound/speech/speech8.aac')]
            },
        ]
    },
    {
        id: 39,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: 15,
                answer: 15
            },
            {
                placeholder: false,
                answer: 16
            },
            {
                placeholder: false,
                answer: 17
            },
            {
                placeholder: 6,
                answer: 18
            },
            {
                placeholder: false,
                answer: 19
            },
            {
                placeholder: 20,
                answer: 20
            },
        ],
    },

    {
        id: 40,
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 19,
                right: false,
            },
            {
                placeholder: 14,
                right: false
            },
            {
                placeholder: 13,
                right: true
            },
            {
                placeholder: 17,
                right: false
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Klikni na najmanji broj u kvadratu.`,
                audio: [require('../assets/sound/speech/speech9.aac')]
            },
        ]
    },
    {
        id: 41,
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 11,
                right: true,
            },
            {
                placeholder: 16,
                right: false
            },
            {
                placeholder: 15,
                right: false
            },
            {
                placeholder: 12,
                right: false
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Klikni na najmanji broj!`,
                audio: [require('../assets/sound/speech/speech9.aac')]
            },
        ]
    },
    {
        id: 42,
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 10,
                right: false,
            },
            {
                placeholder: 11,
                right: false
            },
            {
                placeholder: 17,
                right: false
            },
            {
                placeholder: 0,
                right: true
            },
        ],
    },
    {
        id: 43,
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 8,
                right: false,
            },
            {
                placeholder: 14,
                right: false
            },
            {
                placeholder: 5,
                right: true
            },
            {
                placeholder: 19,
                right: false
            },
        ],
    },
    {
        id: 44,
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 15,
                right: true,
            },
            {
                placeholder: 19,
                right: false
            },
            {
                placeholder: 20,
                right: false
            },
            {
                placeholder: 17,
                right: false
            },
        ],
    },
    {layout: LAYOUTS.quiz},

    {
        id: 45,
        layout: LAYOUTS.simple,
        question: "16+3={{input}}",
        answer: 19,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši ciframa (znamenkama) brojeve u kvadratić.`,
                audio: [require('../assets/sound/speech/speech4.aac')]
            },
        ]
    },

    {
        id: 46,
        layout: LAYOUTS.simple,
        question: "11+7={{input}}",
        answer: 18
    },

    {
        id: 47,
        layout: LAYOUTS.simple,
        question: "17+2={{input}}",
        answer: 19
    },

    {
        id: 48,
        layout: LAYOUTS.simple,
        question: "15+2={{input}}",
        answer: 17
    },

    {
        id: 49,
        layout: LAYOUTS.simple,
        question: "18+2={{input}}",
        answer: 20
    },

    {
        id: 50,
        layout: LAYOUTS.simple,
        question: "16+4={{input}}",
        answer: 20,
    },
    {
        id: 51,
        layout: LAYOUTS.simple,
        question: "13+5={{input}}",
        answer: 18
    },

    {
        id: 52,
        layout: LAYOUTS.simple,
        question: "12+4={{input}}",
        answer: 16
    },

    {
        id: 53,
        layout: LAYOUTS.simple,
        question: "11+8={{input}}",
        answer: 19
    },

    {
        id: 54,
        layout: LAYOUTS.simple,
        question: "9+3={{input}}",
        answer: 12
    },
    {
        id: 55,
        layout: LAYOUTS.simple,
        question: "5+9={{input}}",
        answer: 14,
    },
    {
        id: 56,
        layout: LAYOUTS.simple,
        question: "2+7={{input}}",
        answer: 9,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši odgovarajući broj u kvadratić.`,
                audio: [require('../assets/sound/speech/speech8.aac')]
            },
        ]
    },

    {
        id: 57,
        layout: LAYOUTS.simple,
        question: "9+6={{input}}",
        answer: 14
    },

    {
        id: 58,
        layout: LAYOUTS.simple,
        question: "6+7={{input}}",
        answer: 13,
    },
    {
        id: 59,
        layout: LAYOUTS.simple,
        question: "9+9={{input}}",
        answer: 18
    },
    {
        id: 60,
        layout: LAYOUTS.simple,
        question: "8+8={{input}}",
        answer: 16
    },

    {
        id: 61,
        layout: LAYOUTS.simple,
        question: "6+7={{input}}",
        answer: 13
    },

    {
        id: 62,
        layout: LAYOUTS.simple,
        question: "6+8={{input}}",
        answer: 14
    },

    {
        id: 63,
        layout: LAYOUTS.simple,
        question: "8+7={{input}}",
        answer: 15
    },

    {
        id: 64,
        layout: LAYOUTS.simple,
        question: "{{input}}+13=20",
        answer: 7,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Sabiranje u drugoj desetici`,
                audio: [require('../assets/sound/speech/speech10.aac')]
            },
        ]
    },

    {
        id: 65,
        layout: LAYOUTS.simple,
        question: "{{input}}+4=17",
        answer: 13
    },

    {
        id: 66,
        layout: LAYOUTS.simple,
        question: "{{input}}+5=13",
        answer: 8
    },
    {
        id: 67,
        layout: LAYOUTS.simple,
        question: "9+{{input}}=12",
        answer: 3
    },

    {
        id: 68,
        layout: LAYOUTS.simple,
        question: "1+{{input}}=20",
        answer: 19
    },


    {
        id: 69,
        layout: LAYOUTS.simple,
        question: "17+{{input}}=17",
        answer: 0
    },

    {
        id: 70,
        layout: LAYOUTS.simple,
        question: "{{input}}+13=20",
        answer: 7
    },
    {layout: LAYOUTS.quiz},
    {
        id: 71,
        layout: LAYOUTS.simple,
        question: "17-5={{input}}",
        answer: 12,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Oduzimanje u drugoj desetici.`,
                audio: [require('../assets/sound/speech/speech12.aac')]
            },
        ]
    },

    {
        id: 72,
        layout: LAYOUTS.simple,
        question: "20-7= {{input}}",
        answer: 13
    },
    {
        id: 73,
        layout: LAYOUTS.simple,
        question: "17-6={{input}}",
        answer: 11
    },
    {
        id: 74,
        layout: LAYOUTS.simple,
        question: "19-7={{input}}",
        answer: 12
    },
    {
        id: 75,
        layout: LAYOUTS.simple,
        question: "18-5={{input}}",
        answer: 13
    },
    {
        id: 76,
        layout: LAYOUTS.simple,
        question: "14-3={{input}}",
        answer: 11
    },
    {
        id: 77,
        layout: LAYOUTS.simple,
        question: "12-2={{input}}",
        answer: 10
    },
    {
        id: 78,
        layout: LAYOUTS.simple,
        question: "16-6={{input}}",
        answer: 10
    },
    {
        id: 79,
        layout: LAYOUTS.simple,
        question: "15-1={{input}}",
        answer: 14
    },
    {
        id: 80,
        layout: LAYOUTS.simple,
        question: "15-6={{input}}",
        answer: 9
    },
    {
        id: 81,
        layout: LAYOUTS.simple,
        question: "17-8={{input}}",
        answer: 9
    },
    {
        id: 82,
        layout: LAYOUTS.simple,
        question: "15-8={{input}}",
        answer: 7
    },
    {
        id: 83,
        layout: LAYOUTS.simple,
        question: "18-9={{input}}",
        answer: 9
    },
    {
        id: 84,
        layout: LAYOUTS.simple,
        question: "11-5={{input}}",
        answer: 6
    },
    {
        id: 85,
        layout: LAYOUTS.simple,
        question: "14-6={{input}}",
        answer: 8
    },

    {
        id: 86,
        layout: LAYOUTS.simple,
        question: "12-5={{input}}",
        answer: 7
    },
    {
        id: 87,
        layout: LAYOUTS.simple,
        question: "12-7={{input}}",
        answer: 5
    },
    {
        id: 88,
        layout: LAYOUTS.simple,
        question: "20-7={{input}}",
        answer: 13
    },
    {
        id: 89,
        layout: LAYOUTS.simple,
        question: "{{input}}-4=8",
        answer: 12
    },
    {
        id: 90,
        layout: LAYOUTS.simple,
        question: "{{input}}-6=9",
        answer: 15
    },
    {
        id: 91,
        layout: LAYOUTS.simple,
        question: "17-{{input}}=9",
        answer: 8
    },
    {
        id: 92,
        layout: LAYOUTS.simple,
        question: "15-{{input}}=6",
        answer: 9,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `U kvadratić upiši odgovarajući broj`,
                audio: [require('../assets/sound/speech/speech11.aac')]
            },
        ]
    },
    {layout: LAYOUTS.quiz},

    {
        id: 93,
        layout: LAYOUTS.dragAndDrop,
        question: "15-9{{drop(<)}}8",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Svojstvo zbira. Grupisanje sabiraka. Svojstvo razlike.`,
                audio: [require('../assets/sound/speech/speech14.aac')]
            },
        ]
    },

    {
        id: 94,
        layout: LAYOUTS.dragAndDrop,
        question: "14-8{{drop(=)}}6",
        items: [
            {
                placeholder: '<',
                id: 1
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ]
    },

    {
        id: 95,
        layout: LAYOUTS.dragAndDrop,
        question: "29-11{{drop(>)}}7",
        items: [
            {
                placeholder: '<',
                id: 1
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ]
    },

    {
        id: 96,
        layout: LAYOUTS.simple,
        question: "7+4+6={{input}}",
        answer: 17,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `U kvadratić upiši odgovarajući broj.`,
                audio: [require('../assets/sound/speech/speech15.aac')]
            },
        ]
    },
    {
        id: 97,
        layout: LAYOUTS.simple,
        question: "7+1+9={{input}}",
        answer: 17
    },
    {
        id: 98,
        layout: LAYOUTS.simple,
        question: "13+2+5={{input}}",
        answer: 20
    },
    {
        id: 99,
        layout: LAYOUTS.simple,
        question: "8+2+3={{input}}",
        answer: 13
    },
    {
        id: 100,
        layout: LAYOUTS.simple,
        question: "7+5+3={{input}}",
        answer: 15
    },
    {
        id: 101,
        layout: LAYOUTS.simple,
        question: "14+2+4={{input}}",
        answer: 20
    },
    {
        id: 102,
        layout: LAYOUTS.simple,
        question: "5+6+4={{input}}",
        answer: 15
    },
    {
        id: 103,
        layout: LAYOUTS.simple,
        question: "8+4+2={{input}}",
        answer: 14
    },
    {
        id: 104,
        layout: LAYOUTS.simple,
        question: "11+3+5={{input}}",
        answer: 19
    },
    {layout: LAYOUTS.quiz},

    {
        id: 105,
        layout: LAYOUTS.simple,
        question: "6+({{input}}+3)=16",
        answer: 7,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Poveži odgovarajuće brojeve.`,
                audio: [require('../assets/sound/speech/speech16.aac')]
            },
        ]
    },
    {
        id: 106,
        layout: LAYOUTS.simple,
        question: "(7+9)-{{input}}=11",
        answer: 5
    },

    {
        id: 107,
        layout: LAYOUTS.simple,
        question: "(7+9)-{{input}}=11",
        answer: 5
    },
    {
        id: 108,
        layout: LAYOUTS.simple,
        question: "(8+6)+{{input}}=20",
        answer: 6
    },

    {
        id: 109,
        layout: LAYOUTS.simple,
        question: "{{input}}-(4+7)=9",
        answer: 20
    },

    {
        id: 110,
        layout: LAYOUTS.simple,
        question: "18-11={{input}}",
        answer: 7
    },

    {
        id: 111,
        layout: LAYOUTS.simple,
        question: "15-{{input}}=6",
        answer: 9
    },

    {
        id: 112,
        layout: LAYOUTS.simple,
        question: "20-{{input}}=7",
        answer: 13
    },

    {
        id: 113,
        layout: LAYOUTS.simple,
        question: "13-6={{input}}",
        answer: 7
    },

    {
        id: 114,
        layout: LAYOUTS.simple,
        question: "14-{{input}}=0",
        answer: 14
    },

    {
        id: 115,
        layout: LAYOUTS.simple,
        question: "19-{{input}}=19",
        answer: 0
    },

    {
        id: 116,
        layout: LAYOUTS.simple,
        question: "17-{{input}}=5",
        answer: 12
    },

    {
        id: 117,
        layout: LAYOUTS.sortable,
        items: [
            {value: 'IV', id: 1},
            {value: 'VIII', id: 2},
            {value: 'VII', id: 3},
            {value: 'V', id: 4},
            {value: 'IX', id: 5},
            {value: 'I', id: 6}
        ],
        answer: [
            {
                placeholder: '1',
                id: 6,
            },
            {
                placeholder: '2',
                id: 1,
            },
            {
                placeholder: '3',
                id: 4,
            },
            {
                placeholder: '4',
                id: 3,
            },
            {
                placeholder: '5',
                id: 2,
            },
            {
                placeholder: '6',
                id: 5
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Napiši broj rimskim znakom`,
                audio: [require('../assets/sound/speech/speech17.aac')]
            },
        ]
    },
    {layout: LAYOUTS.quiz},

    {
        id: 118,
        layout: LAYOUTS.simple,
        question: "3={{input}}",
        answer: 'III',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Računaj koristeći rimske znakove.`,
                audio: [require('../assets/sound/speech/speech18.aac')]
            },
        ]
    },
    {
        id: 119,
        layout: LAYOUTS.simple,
        question: "9={{input}}",
        answer: 'IX'
    },
    {
        id: 120,
        layout: LAYOUTS.simple,
        question: "8={{input}}",
        answer: 'VIII'
    },
    {
        id: 121,
        layout: LAYOUTS.simple,
        question: "10={{input}}",
        answer: 'X'
    },
    {
        id: 122,
        layout: LAYOUTS.simple,
        question: "7={{input}}",
        answer: 'VII'
    },
    {
        id: 123,
        layout: LAYOUTS.simple,
        question: "6={{input}}",
        answer: 'VI'
    },
    {
        id: 124,
        layout: LAYOUTS.simple,
        question: "III+VI={{input}}",
        answer: 'IX'
    },
    {
        id: 125,
        layout: LAYOUTS.simple,
        question: "VIII+II={{input}}",
        answer: 'X'
    },
    {
        id: 126,
        layout: LAYOUTS.simple,
        question: "X-V={{input}}",
        answer: 'V'
    },
    {
        id: 127,
        layout: LAYOUTS.simple,
        question: "VII+II={{input}}",
        answer: 'IX'
    },
    {
        id: 128,
        layout: LAYOUTS.simple,
        question: "IX+I={{input}}",
        answer: 'X'
    },
    {
        id: 129,
        layout: LAYOUTS.simple,
        question: "VII-IV={{input}}",
        answer: 'III'
    },
    {
        id: 130,
        layout: LAYOUTS.simple,
        question: "V+IV={{input}}",
        answer: 'IX'
    },
    {
        id: 131,
        layout: LAYOUTS.simple,
        question: "VI+II={{input}}",
        answer: 'VIII'
    },
    {
        id: 132,
        layout: LAYOUTS.simple,
        question: "IX-III={{input}}",
        answer: 'VI'
    },
    {layout: LAYOUTS.quiz},

    {
        id: 133,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: 10,
                answer: 10
            },
            {
                placeholder: false,
                answer: 20
            },
            {
                placeholder: false,
                answer: 30
            },
            {
                placeholder: 13,
                answer: 40
            },
            {
                placeholder: false,
                answer: 50
            },
            {
                placeholder: false,
                answer: 60
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši brojeve koji nedostaju.`,
                audio: [require('../assets/sound/speech/speech19.aac')]
            },
        ]
    },
    {
        id: 134,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: false,
                answer: 20
            },
            {
                placeholder: 30,
                answer: 30
            },
            {
                placeholder: false,
                answer: 40
            },
        ],
    },
    {
        id: 135,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: false,
                answer: 60
            },
            {
                placeholder: 70,
                answer: 70
            },
            {
                placeholder: false,
                answer: 80
            },
        ],
    },
    {
        id: 136,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: false,
                answer: 70
            },
            {
                placeholder: 80,
                answer: 80
            },
            {
                placeholder: false,
                answer: 90
            },
        ],
    },
    {
        id: 137,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: false,
                answer: 80
            },
            {
                placeholder: 90,
                answer: 90
            },
            {
                placeholder: false,
                answer: 100
            },
        ],
    },
    {
        id: 138,
        layout: LAYOUTS.manyInputs,
        inputs: [
            {
                placeholder: false,
                answer: 30
            },
            {
                placeholder: 40,
                answer: 40
            },
            {
                placeholder: false,
                answer: 50
            },
            {
                placeholder: false,
                answer: 60
            },
            {
                placeholder: false,
                answer: 70
            },
            {
                placeholder: 80,
                answer: 80
            },
        ],
    },
    {layout: LAYOUTS.quiz},

    {
        id: 139,
        layout: LAYOUTS.sortable,
        items: [
            {value: '30', id: 1},
            {value: '40', id: 2},
            {value: '60', id: 3},
            {value: '90', id: 4},
            {value: '80', id: 5},
            {value: '50', id: 6}
        ],
        answer: [
            {
                placeholder: '1',
                id: 1,
            },
            {
                placeholder: '2',
                id: 2,
            },
            {
                placeholder: '3',
                id: 6,
            },
            {
                placeholder: '4',
                id: 3,
            },
            {
                placeholder: '5',
                id: 5,
            },
            {
                placeholder: '6',
                id: 4
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Sabiranje i oduzimanje višekratnika broja 10 u prvoj stotini.`,
                audio: [require('../assets/sound/speech/speech21.aac')]
            },
        ]
    },
    {
        id: 140,
        layout: LAYOUTS.simple,
        question: "40+30={{input}}",
        answer: '70',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Upiši tačan odgovor`,
                audio: [require('../assets/sound/speech/speech23.aac')]
            },
            {
                layout: LAYOUTS.speech,
                phrase: `Oduzmi i napiši rezultat. `,
                audio: [require('../assets/sound/speech/speech22.aac')]
            },
        ]
    },
    {
        id: 141,
        layout: LAYOUTS.simple,
        question: "50+50={{input}}",
        answer: '100'
    },
    {
        id: 142,
        layout: LAYOUTS.simple,
        question: "70+20={{input}}",
        answer: '90'
    },
    {
        id: 143,
        layout: LAYOUTS.simple,
        question: "60+40={{input}}",
        answer: '100'
    },
    {
        id: 144,
        layout: LAYOUTS.simple,
        question: "50+30={{input}}",
        answer: '80'
    },
    /* {layout: LAYOUTS.quiz},*/


];