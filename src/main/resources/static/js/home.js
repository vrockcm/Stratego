function testFunction(){
    $(document).ready(function(){
        $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        })
    })
}