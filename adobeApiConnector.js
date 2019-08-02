class AdobeAPI {
    constructor() { }

    connection(word, limit, offset) {
        const div = document.querySelector('.galeria');

        $.ajax({
            url: `https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en_US&search_parameters[words]=${word}&search_parameters[limit]=${limit}&search_parameters[offset]=${offset}`,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("x-api-key", "*********************************")
                xhr.setRequestHeader("x-product", "www.arpley.pl")
            },
            success: function (data) {
                for (let i = 0; i < limit; i++) {
                    const element = data.files[i];
                    const divBox = document.createElement("div")
                    divBox.classList.add("gallery_box")
                    const link = document.createElement('a');
                    link.href = `zamowienie.php?${element.id}&${element.thumbnail_url}`
                    const img = document.createElement("img");
                    img.src = element.thumbnail_url;
                    link.appendChild(img);
                    divBox.appendChild(link);
                    div.appendChild(divBox);
                };
            }
        })

    }
}
