$(function () {
    $('.js-basic-example').DataTable({

        "paging": false,

        "info": false,
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});