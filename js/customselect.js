var SampleJSONData = [
    {
        id: 0,
        title: 'Evaluación 1'
    }, {
        id: 1,
        title: 'Birds',
		isSelectable: false,
        subs: [
            {
                id: 10,
                title: 'Pigeon',
				isSelectable: false
            }, {
                id: 11,
                title: 'Parrot'
            }, {
                id: 12,
                title: 'Owl'
            }, {
                id: 13,
                title: 'Falcon'
            }
        ]
    }, {
        id: 2,
        title: 'Rabbit'
    }, {
        id: 3,
        title: 'Fox'
    }, {
        id: 5,
        title: 'Cats',
        subs: [
            {
                id: 50,
                title: 'Kitty'
            }, {
                id: 51,
                title: 'Bigs',
                subs: [
                    {
                        id: 510,
                        title: 'Cheetah'
                    }, {
                        id: 511,
                        title: 'Jaguar'
                    }, {
                        id: 512,
                        title: 'Leopard'
                    }
                ]
            }
        ]
    }, {
        id: 6,
        title: 'Fish'
    }
];
var SampleJSONData2 = [
    {
        id: 1,
        title: 'Promedio Final',
		subs: [
			{
				id: 10,
				title: 'Conocimiento',
                subs: [
                    {
                        id: 13,
                        title: 'Parcial'
                    }, {
                        id: 14,
                        title: 'Final'
                    }
                ]
			}, {
				id: 11,
				title: 'Desempeño',
                subs: [
                    {
                        id: 15,
                        title: 'Práctica Clínica',
                        subs: [
                            {
                                id: 16,
                                title: 'Sesión 1'
                            }, {
                                id: 17,
                                title: 'Sesión 2'
                            }
                        ]
                    },  {
                        id: 510,
                        title: 'Promedio de talleres',
                        subs: [
                            {
                                id: 18,
                                title: 'Taller 1'
                            }, {
                                id: 19,
                                title: 'Taller 2'
                            }
                        ]
                    }, 
                ]
			}
		]
    }, {
        id: 2,
        title: 'Evaluación 2',
        subs: [
            {
                id: 20,
                title: 'Evaluación 2.2'
            }, {
                id: 21,
                title: 'Evaluación 2.3'
            }, {
                id: 22,
                title: 'Evaluación 2.4'
            }
        ]
    }, {
        id: 3,
        title: 'Evalaución 3'
    }, {
        id: 4,
        title: 'Evaluación 4'
    }
];


jQuery(document).ready(function($) {

  
    
    comboTree3 = $('#justAnInputBox1').comboTree({
        source : SampleJSONData,
        isMultiple: true,
        cascadeSelect: true,
        collapse: false
    });

    comboTree3.setSource(SampleJSONData2);


});