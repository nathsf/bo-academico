$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#masiva thead tr')
        .clone(true)
        .addClass('filters')
        .appendTo('#masiva thead');
 
    var tableColumn = $('#masiva').DataTable({
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () {
            var api = this.api();
 
            // For each column
            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    $(cell).html('<input type="text" placeholder="' + title + '" />');
 
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('change', function (e) {
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
                        })
                        .on('keyup', function (e) {
                            e.stopPropagation();
 
                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
        "language": {
            "lengthMenu": "#Filas _MENU_ ",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "zeroRecords": "No se encontró resultados",
            "info": "#Registros: _TOTAL_ ",
            "infoEmpty": "No se encontró resultados",
            "infoFiltered": "(filtrados de _MAX_ registros)",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "search": "Buscar:",
            "searchPlaceholder": "Buscar"
        },
    });

    $('#masivaGrupo thead tr')
    .clone(true)
    .addClass('filtersGrupo')
    .appendTo('#masivaGrupo thead');

var tableColumn2 = $('#masivaGrupo').DataTable({
    orderCellsTop: true,
    fixedHeader: true,
    initComplete: function () {
        var api = this.api();

        // For each column
        api
            .columns()
            .eq(0)
            .each(function (colIdx) {
                // Set the header cell to contain the input element
                var cell = $('.filtersGrupo th').eq(
                    $(api.column(colIdx).header()).index()
                );
                var title = $(cell).text();
                $(cell).html('<input type="text" placeholder="' + title + '" />');

                // On every keypress in this input
                $(
                    'input',
                    $('.filtersGrupo th').eq($(api.column(colIdx).header()).index())
                )
                    .off('keyup change')
                    .on('change', function (e) {
                        // Get the search value
                        $(this).attr('title', $(this).val());
                        var regexr = '({search})'; //$(this).parents('th').find('select').val();

                        var cursorPosition = this.selectionStart;
                        // Search the column for that value
                        api
                            .column(colIdx)
                            .search(
                                this.value != ''
                                    ? regexr.replace('{search}', '(((' + this.value + ')))')
                                    : '',
                                this.value != '',
                                this.value == ''
                            )
                            .draw();
                    })
                    .on('keyup', function (e) {
                        e.stopPropagation();

                        $(this).trigger('change');
                        $(this)
                            .focus()[0]
                            .setSelectionRange(cursorPosition, cursorPosition);
                    });
            });
    },
    "language": {
        "lengthMenu": "#Filas _MENU_ ",
        "emptyTable": "Ningún dato disponible en esta tabla",
        "zeroRecords": "No se encontró resultados",
        "info": "#Registros: _TOTAL_ ",
        "infoEmpty": "No se encontró resultados",
        "infoFiltered": "(filtrados de _MAX_ registros)",
        "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "search": "Buscar:",
        "searchPlaceholder": "Buscar"
    },
});
});