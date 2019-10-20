export const LAYOUTS = {
    simple: 'simple',
    manyInputs: 'manyInputs',
    dragAndDrop: 'dragAndDrop',
    sortable: 'sortable',
    choice: 'choice',
    speech: 'speech'
};

export default [
    {
        layout: LAYOUTS.speech,
        phrase: `Dobrodošao! Odigraj jednu rundu matematike!`
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Ponavljanje sabiranja i oduzimanja u prvoj desetici. Ukucaj tačan odgovor i pritisni ENTER ili klikni na "Dalje".`
    },
    {
        layout: LAYOUTS.simple,
        question: "4 + 5 = {{input}}",
        answer: 9
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
        answer: 1
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
        layout: LAYOUTS.speech,
        phrase: `U kvadratić upiši odgovarajući broj i klikni na "Dalje" ili pritisni ENTER.`
    },
    {
        layout: LAYOUTS.simple,
        question: "{{input}}-7=3",
        answer: 10
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
    {
        layout: LAYOUTS.simple,
        question: "5+{{input}}=5",
        answer: 0
    },
    //{},
    {
        layout: LAYOUTS.speech,
        phrase: `Upiši znamenkama (ciframa) broj u kvadratić i klikni na "Dalje" ili pritisni ENTER.`
    },
    {
        layout: LAYOUTS.simple,
        question: "Petnaest {{input}}",
        answer: 15
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
        layout: LAYOUTS.speech,
        phrase: `Napiši riječima brojeve koje vidiš u kvadrat i klikni na "Dalje" ili pritisni ENTER. `
    },
    {
        layout: LAYOUTS.simple,
        question: "16 {{input}}",
        answer: 'SESNAEST'
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
        layout: LAYOUTS.speech,
        phrase: `U kvadrate upiši nedostajuće brojeve i klikni na "Dalje" ili pritisni ENTER.`
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
    },
    {
        layout: LAYOUTS.speech,
        phrase: `Poredaj po veličini brojeve od manjeg ka većem.`
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
        answer: [9, 10, 11, 12, 17, 19]
    },
    {
        layout: LAYOUTS.speech,
        phrase: `U kvadrate upiši nedostajuće brojeve i klikni na "Dalje" ili pritisni ENTER.`
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
        layout: LAYOUTS.speech,
        phrase: `Klikni na najmanji broj u kvadratu.`
    },
    {
        layout: LAYOUTS.choice,
        items: [
            {
                placeholder: 19,
                right: true,
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
    //
    {
        layout: LAYOUTS.speech,
        phrase: `Ponavljanje sabiranja i oduzimanja u prvoj desetici. Ukucaj tačan odgovor i pritisni ENTER ili klikni na "Dalje".`
    },
    {
        layout: LAYOUTS.simple,
        question: "16+3={{input}}",
        answer: 19
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
        answer: 20
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
        answer: 14
    },

    {
        layout: LAYOUTS.simple,
        question: "2 + 7 ={{input}}",
        answer: 9
    },

    {
        layout: LAYOUTS.simple,
        question: "9+6={{input}}",
        answer: 14
    },
    {
        layout: LAYOUTS.simple,
        question: "6+7={{input}}",
        answer: 13
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
        layout: LAYOUTS.speech,
        phrase: `Ponavljanje sabiranja i oduzimanja u prvoj desetici. Ukucaj tačan odgovor i pritisni ENTER ili klikni na "Dalje".`
    },
    {
        layout: LAYOUTS.simple,
        question: "{{input}}+13=20",
        answer: 7
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
//
    {
        layout: LAYOUTS.speech,
        phrase: `Oduzimanje u drugoj desetici. Ukucaj rješenje i klikni na "Dalje" ili pritisni ENTER.`
    },
    {
        layout: LAYOUTS.simple,
        question: "17-5={{input}}",
        answer: 12
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
        answer: 9
    },

    {
        layout: LAYOUTS.speech,
        phrase: `Stavi odgovarajući znak u kvadratić i klikni na "Dalje" ili pritisni ENTER.`
    },
    {
        layout: LAYOUTS.dragAndDrop,
        question: "15-9{{drop(<)}}8",
        items: [
            {
                placeholder: '<',
            },
            {
                placeholder: '=',
            },
            {
                placeholder: '>',
            }
        ]
    },

    {
        layout: LAYOUTS.dragAndDrop,
        question: "14-8{{drop(=)}}6",
        items: [
            {
                placeholder: '<',
            },
            {
                placeholder: '=',
            },
            {
                placeholder: '>',
            }
        ]
    },

    {
        layout: LAYOUTS.dragAndDrop,
        question: "29-11{{drop(>)}}7",
        items: [
            {
                placeholder: '<',
            },
            {
                placeholder: '=',
            },
            {
                placeholder: '>',
            }
        ]
    },
    {
        layout: LAYOUTS.simple,
        question: "7+4+6={{input}}",
        answer: 17
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
    {
        layout: LAYOUTS.simple,
        question: "6+({{input}}+3)=16",
        answer: 7
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
        answer: [9, 10, 11, 12, 17, 19]
    },
    // todo
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
        answer: [9, 10, 11, 12, 17, 19]
    },
    {
        layout: LAYOUTS.simple,
        question: "3={{input}}",
        answer: 'III'
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
        answer: ['30', '40', '50', '60', '80', '90']
    },
    {
        layout: LAYOUTS.simple,
        question: "40+30={{input}}",
        answer: '70'
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
    {
        layout: LAYOUTS.simple,
        question: "50+30={{input}}",
        answer: '80'
    },


];