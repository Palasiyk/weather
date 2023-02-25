
let api_key = "790d913f4e9d9469ada73ae6ca05720f";


$('#myAjax').click(function (event) {
    event.preventDefault();
    let sity = document.getElementById('search').value;
    if (sity) {
        let weather_api = `https://api.openweathermap.org/data/2.5/weather?q=${sity}&units=metric&appid=${api_key}`;
        myAjax(weather_api);
    } else {
        document.getElementById("error").style.display = "block";
    }
});

    function myAjax(weather_api) {
        $.ajax({
            url: weather_api,
            dataType: "json",

        }).done(function (data) {
            console.log(data);
            $('#weather').css("display", "block");

            $('#sity').html(data.name);

            $('#weather__main').html(data.weather[0].main);

            $('#img').html(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="user foto">`);

            let temp = data.main.temp;
            $('#temp').html(temp.toFixed(1)+"°C");

            const d = new Date();
            $('#date').html(`${d.toDateString()}`);

            let wind = data.wind.speed;
            $('#wind').html("Wind speed "+wind.toFixed(1)+" m/s");

            let max_temp = data.main.temp_max;
            $('#max_temp').html("Max temp..."+max_temp.toFixed(1)+"°C");

            let min_temp = data.main.temp_min;
            $('#min_temp').html("Min temp..."+min_temp.toFixed(1)+"°C");

            $('#error').css("display", "none");
        }).fail(function () {
            // $('.erroring').html('<p >Не вірно введене місто</p>\n');
            $('#error').css("display", "block");
            $('#weather').css("display", "none");
        });
    }



