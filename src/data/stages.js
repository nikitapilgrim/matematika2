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
        layout: LAYOUTS.simple,
        question: "2 + 7 = {{input}}",
        answer: 9
    },
    {
        layout: LAYOUTS.simple,
        question: "8 + 2 = {{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "6 + 3 = {{input}}",
        answer: 9
    },
    {
        layout: LAYOUTS.simple,
        question: "4 + 6 = {{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "5 + 5 = {{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "9 - 4 = {{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "10 - 7 = {{input}}",
        answer: 3
    },
    {
        layout: LAYOUTS.simple,
        question: "7 - 2 = {{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "7 - 5 = {{input}}",
        answer: 2
    },
    {
        layout: LAYOUTS.simple,
        question: "6 - 5 = {{input}}",
        answer: 1
    },
    {
        layout: LAYOUTS.simple,
        question: "8 - 3 = {{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "5+3-2 = {{input}}",
        answer: 6
    },
    {
        layout: LAYOUTS.simple,
        question: "8-2+4 = {{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "7+2-5 = {{input}}",
        answer: 4
    },
    {
        layout: LAYOUTS.simple,
        question: "8+2-5 = {{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "7+3-6 = {{input}}",
        answer: 4
    },
    {
        layout: LAYOUTS.simple,
        question: "2+6-3 = {{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "(7-5)+6 = {{input}}",
        answer: 8
    },
    {
        layout: LAYOUTS.simple,
        question: "10-(7-3) = {{input}}",
        answer: 6
    },
    {
        layout: LAYOUTS.simple,
        question: "9-(6+3) = {{input}}",
        answer: 0
    },
    {
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
        layout: LAYOUTS.simple,
        question: "9-{{input}}=7",
        answer: 2
    },
    {
        layout: LAYOUTS.simple,
        question: "4+{{input}}=10",
        answer: 6
    },
    {
        layout: LAYOUTS.simple,
        question: "5+{{input}}=5",
        answer: 0
    },

    {layout: LAYOUTS.quiz},
    {
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
        layout: LAYOUTS.simple,
        question: "Jedanaest {{input}}",
        answer: 11
    },
    {
        layout: LAYOUTS.simple,
        question: "Trinaest {{input}}",
        answer: 13
    },
    {
        layout: LAYOUTS.simple,
        question: "Sedamnaest {{input}}",
        answer: 17
    },
    {
        layout: LAYOUTS.simple,
        question: "Dvanaest {{input}}",
        answer: 12
    },

    {
        layout: LAYOUTS.simple,
        question: "16 {{input}}",
        answer: 'SESNAEST',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Napiši riječima brojeve koje vidiš u kvadratić.`,
                audio: [require('../assets/sound/speech/speech5.aac')]
            },
        ]
    },
    {
        layout: LAYOUTS.simple,
        question: "18 {{input}}",
        answer: 'OSAMNAEST'
    },
    {
        layout: LAYOUTS.simple,
        question: "14 {{input}}",
        answer: 'CETRNAEST'
    },
    {
        layout: LAYOUTS.simple,
        question: "20 {{input}}",
        answer: 'DVADESET'
    },
    {
        layout: LAYOUTS.simple,
        question: "19 {{input}}",
        answer: 'DEVETNAEST'
    },

    {
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
    },
    {
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
        layout: LAYOUTS.simple,
        question: "11+7={{input}}",
        answer: 18
    },

    {
        layout: LAYOUTS.simple,
        question: "17+2={{input}}",
        answer: 19
    },

    {
        layout: LAYOUTS.simple,
        question: "15+2={{input}}",
        answer: 17
    },

    {
        layout: LAYOUTS.simple,
        question: "18+2={{input}}",
        answer: 20
    },

    {
        layout: LAYOUTS.simple,
        question: "16+4={{input}}",
        answer: 20,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Napiši riječima brojeve koje vidiš u kvadratić //CHECK THIS`,
                audio: [require('../assets/sound/speech/speech5.aac')]
            },
        ]
    },
    {
        layout: LAYOUTS.simple,
        question: "13+5={{input}}",
        answer: 18
    },

    {
        layout: LAYOUTS.simple,
        question: "12+4={{input}}",
        answer: 16
    },

    {
        layout: LAYOUTS.simple,
        question: "11+8={{input}}",
        answer: 19
    },

    {
        layout: LAYOUTS.simple,
        question: "9+3={{input}}",
        answer: 12
    },
    {
        layout: LAYOUTS.simple,
        question: "5+9={{input}}",
        answer: 14,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Poredaj po veličini brojeve od manjeg ka većem. // check this to`,
                audio: [require('../assets/sound/speech/speech7.aac')]
            },
        ]
    },
    {
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
        layout: LAYOUTS.simple,
        question: "9+6={{input}}",
        answer: 14
    },

    {
        layout: LAYOUTS.simple,
        question: "6+7={{input}}",
        answer: 13,
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Klikni na najmanji broj u kvadratu. // check this`,
                audio: [require('../assets/sound/speech/speech9.aac')]
            },
        ]
    },
    {
        layout: LAYOUTS.simple,
        question: "9+9={{input}}",
        answer: 18
    },
    {
        layout: LAYOUTS.simple,
        question: "8+8={{input}}",
        answer: 16
    },

    {
        layout: LAYOUTS.simple,
        question: "6+7={{input}}",
        answer: 13
    },

    {
        layout: LAYOUTS.simple,
        question: "6+8={{input}}",
        answer: 14
    },

    {
        layout: LAYOUTS.simple,
        question: "8+7={{input}}",
        answer: 15
    },

    {
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
        layout: LAYOUTS.simple,
        question: "{{input}}+4=17",
        answer: 13
    },

    {
        layout: LAYOUTS.simple,
        question: "{{input}}+5=13",
        answer: 8
    },
    {
        layout: LAYOUTS.simple,
        question: "9+{{input}}=12",
        answer: 3
    },

    {
        layout: LAYOUTS.simple,
        question: "1+{{input}}=20",
        answer: 19
    },


    {
        layout: LAYOUTS.simple,
        question: "17+{{input}}=17",
        answer: 0
    },

    {
        layout: LAYOUTS.simple,
        question: "{{input}}+13=20",
        answer: 7
    },
    {layout: LAYOUTS.quiz},
    {
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
        layout: LAYOUTS.simple,
        question: "20-7= {{input}}",
        answer: 13
    },
    {
        layout: LAYOUTS.simple,
        question: "17-6={{input}}",
        answer: 11
    },
    {
        layout: LAYOUTS.simple,
        question: "19-7={{input}}",
        answer: 12
    },
    {
        layout: LAYOUTS.simple,
        question: "18-5={{input}}",
        answer: 13
    },
    {
        layout: LAYOUTS.simple,
        question: "14-3={{input}}",
        answer: 11
    },
    {
        layout: LAYOUTS.simple,
        question: "12-2={{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "16-6={{input}}",
        answer: 10
    },
    {
        layout: LAYOUTS.simple,
        question: "15-1={{input}}",
        answer: 14
    },
    {
        layout: LAYOUTS.simple,
        question: "15-6={{input}}",
        answer: 9
    },
    {
        layout: LAYOUTS.simple,
        question: "17-8={{input}}",
        answer: 9
    },
    {
        layout: LAYOUTS.simple,
        question: "15-8={{input}}",
        answer: 7
    },
    {
        layout: LAYOUTS.simple,
        question: "18-9={{input}}",
        answer: 9
    },
    {
        layout: LAYOUTS.simple,
        question: "11-5={{input}}",
        answer: 6
    },
    {
        layout: LAYOUTS.simple,
        question: "14-6={{input}}",
        answer: 8
    },

    {
        layout: LAYOUTS.simple,
        question: "12-5={{input}}",
        answer: 7
    },
    {
        layout: LAYOUTS.simple,
        question: "12-7={{input}}",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "20-7={{input}}",
        answer: 13
    },
    {
        layout: LAYOUTS.simple,
        question: "{{input}}-4=8",
        answer: 12
    },
    {
        layout: LAYOUTS.simple,
        question: "{{input}}-6=9",
        answer: 15
    },
    {
        layout: LAYOUTS.simple,
        question: "17-{{input}}=9",
        answer: 8
    },
    {
        layout: LAYOUTS.simple,
        question: "15-{{input}}=6",
        answer: 9
    },
    {
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
        layout: LAYOUTS.simple,
        question: "7+1+9={{input}}",
        answer: 17
    },
    {
        layout: LAYOUTS.simple,
        question: "13+2+5={{input}}",
        answer: 20
    },
    {
        layout: LAYOUTS.simple,
        question: "8+2+3={{input}}",
        answer: 13
    },
    {
        layout: LAYOUTS.simple,
        question: "7+5+3={{input}}",
        answer: 15
    },
    {
        layout: LAYOUTS.simple,
        question: "14+2+4={{input}}",
        answer: 20
    },
    {
        layout: LAYOUTS.simple,
        question: "5+6+4={{input}}",
        answer: 15
    },
    {
        layout: LAYOUTS.simple,
        question: "8+4+2={{input}}",
        answer: 14
    },
    {
        layout: LAYOUTS.simple,
        question: "11+3+5={{input}}",
        answer: 19
    },
    {layout: LAYOUTS.quiz},

    {
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
        layout: LAYOUTS.simple,
        question: "(7+9)-{{input}}=11",
        answer: 5
    },

    {
        layout: LAYOUTS.simple,
        question: "(7+9)-{{input}}=11",
        answer: 5
    },
    {
        layout: LAYOUTS.simple,
        question: "(8+6)+{{input}}=20",
        answer: 6
    },

    {
        layout: LAYOUTS.simple,
        question: "{{input}}-(4+7)=9",
        answer: 20
    },

    {
        layout: LAYOUTS.simple,
        question: "18-11={{input}}",
        answer: 7
    },

    {
        layout: LAYOUTS.simple,
        question: "15-{{input}}=6",
        answer: 9
    },

    {
        layout: LAYOUTS.simple,
        question: "20-{{input}}=7",
        answer: 13
    },

    {
        layout: LAYOUTS.simple,
        question: "13-6={{input}}",
        answer: 7
    },

    {
        layout: LAYOUTS.simple,
        question: "14-{{input}}=0",
        answer: 14
    },

    {
        layout: LAYOUTS.simple,
        question: "19-{{input}}=19",
        answer: 0
    },

    {
        layout: LAYOUTS.simple,
        question: "17-{{input}}=5",
        answer: 12
    },

    {
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
        layout: LAYOUTS.simple,
        question: "9={{input}}",
        answer: 'IX'
    },
    {
        layout: LAYOUTS.simple,
        question: "8={{input}}",
        answer: 'VIII'
    },
    {
        layout: LAYOUTS.simple,
        question: "10={{input}}",
        answer: 'X'
    },
    {
        layout: LAYOUTS.simple,
        question: "7={{input}}",
        answer: 'VII'
    },
    {
        layout: LAYOUTS.simple,
        question: "6={{input}}",
        answer: 'VI'
    },
    {
        layout: LAYOUTS.simple,
        question: "6={{input}}",
        answer: 'VI'
    },
    {
        layout: LAYOUTS.simple,
        question: "III+VI={{input}}",
        answer: 'IX'
    },
    {
        layout: LAYOUTS.simple,
        question: "VIII+II={{input}}",
        answer: 'X'
    },
    {
        layout: LAYOUTS.simple,
        question: "X-V={{input}}",
        answer: 'V'
    },
    {
        layout: LAYOUTS.simple,
        question: "VII+II={{input}}",
        answer: 'IX'
    },
    {
        layout: LAYOUTS.simple,
        question: "IX+I={{input}}",
        answer: 'X'
    },
    {
        layout: LAYOUTS.simple,
        question: "VII-IV={{input}}",
        answer: 'III'
    },
    {
        layout: LAYOUTS.simple,
        question: "V+IV={{input}}",
        answer: 'IX'
    },
    {
        layout: LAYOUTS.simple,
        question: "VI+II={{input}}",
        answer: 'VIII'
    },
    {
        layout: LAYOUTS.simple,
        question: "IX-III={{input}}",
        answer: 'VI'
    },
    {layout: LAYOUTS.quiz},

    {
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
        layout: LAYOUTS.simple,
        question: "50+50={{input}}",
        answer: '100'
    },
    {
        layout: LAYOUTS.simple,
        question: "70+20={{input}}",
        answer: '90'
    },
    {
        layout: LAYOUTS.simple,
        question: "60+40={{input}}",
        answer: '100'
    },
    {
        layout: LAYOUTS.simple,
        question: "50+30={{input}}",
        answer: '80'
    },
    /* {layout: LAYOUTS.quiz},*/


];