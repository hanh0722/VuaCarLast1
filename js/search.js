$(document).ready(function () {
    Toyota = ['Dòng xe','4 Runner','Alphard','Avalon','Avanza','Aygo','Camry','Caria','Celica','Corolla','Corolla Altis'];
    Honda = ['Dòng xe','Accord','Brio','City','Civic','Concerto','CR V','FIT','HR-V','Jazz','Odyssey'];
    DongXe = ['Dòng xe'];
    Huyndai = ['Dòng xe','Accent','Avante','Azera','Ben','i20','Kona','Libero','Matrix','HD'];
    Mazda = ['Dòng xe','Mazda 6','Mazda 5','Mazda 4','Mazda 3','Mazda 323','Mazda 626'];
    Kia = ['Dòng xe','Bongo','Cadenza','Carens','CD5','Cerata','Morning'];
    // sửa lại
    Ford = ['Dòng xe','Bongo','Cadenza','Carens','CD5','Cerata','Morning'];
    Chevrolet = ['Dòng xe','Accent','Avante','Azera','Ben','i20','Kona','Libero','Matrix','HD'];
    Nissan = ['Dòng xe'];
    Mitsubishi = ['Dòng xe'];
    BMW = ['Dòng xe'];
    Mercedes_Benz = ['Dòng xe'];
    VinFast = ['Dòng xe'];
    $('#country').change(function () {
        //clear values
        $('#type-car').html('');

        //find which list to use
        list = [];
        switch ($(this).val()) {
            case "Toyota":
                list = Toyota;
                break;
            case "Honda":
                list = Honda;
                break;
            case "Huyndai":
                list = Huyndai;
                break;
            case "Mazda":
                list = Mazda;
                break;
            case "Kia":
                list = Kia;
                break;
            case "Ford":
                list = Ford;
                break;
            case "Chevrolet":
                list = Chevrolet;
                break;
            case "Nissan":
                list = Nissan;
                break; 
            case "Mitsubishi":
                list = Mitsubishi;
                break;
            case "BMW":
                list = BMW;
                break;
            case "Mercedes-Benz":
                list = Mercedes_Benz;
                break;
            case "VinFast":
                list = VinFast;
                break;     
            default:
                list = DongXe;
                break;
        }
        //populate dropdown
        for (let i = 0; i < list.length; i++) {
            $('#type-car').append("<option>" + list[i] + "</option>");
        }
    });
});