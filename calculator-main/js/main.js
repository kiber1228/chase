window.addEventListener('DOMContentLoaded', () => {
    const Kreditsum = document.querySelector("#Kreditsum"),
        boshlangicht = document.querySelector("#boshlangicht"),
        YillikFoiz = document.querySelector("#YillikFoiz"),
        YillikMuddat = document.querySelector("#YillikMuddat"),
        Kalendaryili = document.querySelector("#Kalendaryili"),
        Kalendaroyi = document.querySelector("#Kalendaroyi"),
        knopka = document.querySelector(".btn"),
        kriditlist = document.querySelector('#kridit-list')

    var arrey = [
        {}
    ]



    let idx;
   const Year = ['2022','2023','2024',2025,'2026','2027','2028','2029','2030',2031,'2032','2033','2034','2035','2036',2037,'2038','2039','2040','2041','2042','2043','2044','2045','2046']
    const Moth = ["Yanvar", "Fevral", "Mart", 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr','Noyabr', 'Dekabr']
    function inner() {
      idx =1;
        var tr = "";
        var i = 0
        for (var td of arrey) {
            Moth.forEach(item => {
                i++;
                tr += "<tr>" +
                    "<td>" + i + "</td>"
                    + "<td>" + Year[0] + "</td>"
                    + "<td>" + item + "</td>"
                    + "<td>" + Kreditsum.value + "</td>"
                    + "<td>" +  parseFloat(kriditlist) * parseFloat(YillikFoiz) + "</td>"
                    + "<td>" + parseInt(td.YillikFoiz) / 100 + "</td>"
                    + "<td>" + parseInt(td.YillikMuddat) + parseInt(td.boshlangicht) + "</td>"


                "</tr>"
            })

            

        }
        for (var td of arrey) {
            Moth.forEach(item => {
                i++;
                tr += "<tr>" +
                    "<td>" + i + "</td>"
                    + "<td>" + Year[1] + "</td>"
                    + "<td>" + item + "</td>"
                    + "<td>" + Kreditsum.value + "</td>"
                    + "<td>" +  parseFloat(kriditlist) * parseFloat(YillikFoiz) + "</td>"
                    + "<td>" + parseInt(td.YillikFoiz) / 100 + "</td>"
                    + "<td>" + parseInt(td.YillikMuddat) + parseInt(td.boshlangicht) + "</td>"


                "</tr>"
            })

            

        }

        for (var td of arrey) {
            Moth.forEach(item => {
                i++;
                tr += "<tr>" +
                    "<td>" + i + "</td>"
                    + "<td>" + Year[2] + "</td>"
                    + "<td>" + item + "</td>"
                    + "<td>" + Kreditsum.value + "</td>"
                    + "<td>" +  parseFloat(kriditlist) * parseFloat(YillikFoiz) + "</td>"
                    + "<td>" + parseInt(td.YillikFoiz) / 100 + "</td>"
                    + "<td>" + parseInt(td.YillikMuddat) + parseInt(td.boshlangicht) + "</td>"


                "</tr>"
            })

            

        }
        for (var td of arrey) {
            Moth.forEach(item => {
                i++;
                tr += "<tr>" +
                    "<td>" + i + "</td>"
                    + "<td>" + Year[2] + "</td>"
                    + "<td>" + item + "</td>"
                    + "<td>" + Kreditsum.value + "</td>"
                    + "<td>" +  parseFloat(kriditlist) * parseFloat(YillikFoiz) + "</td>"
                    + "<td>" + parseInt(td.YillikFoiz) / 100 + "</td>"
                    + "<td>" + parseInt(td.YillikMuddat) + parseInt(td.boshlangicht) + "</td>"


                "</tr>"
            })

            

        }

        document.getElementById("kridit-list").innerHTML = tr;
    }

    knopka.onclick = () => {
        
        let obj = {
            Kreditsum: Kreditsum.value,
            boshlangicht: boshlangicht.value,
            YillikFoiz: YillikFoiz.value,
            YillikMuddat: YillikMuddat.value,
            Kalendaryili: Kalendaryili.value,
            Kalendaroyi: Kalendaroyi.value,
        }
        arrey.push(obj)
        inner()
    }
    // knopka.addEventListener('click', (event) => {
    //     inner()
    //     event.preventDefault()
    //     if (Kreditsum.value == '' && btf.value == '' && YillikFoiz.value == '' && YillikMuddat.value == '' && Kalendaryili.value == ''
    //         && Kalendaroyi.value == '' && btn.value == '' && kriditlist.value == '') {

    //     } else {
    //             let obj = {
    //                 Kreditsum: Kreditsum.value,
    //                 boshlangicht: boshlangicht.value,
    //                 YillikFoiz: YillikFoiz.value,
    //                 YillikMuddat: YillikMuddat.value,
    //                 Kalendaryili: Kalendaryili.value,
    //                 Kalendaroyi: Kalendaroyi.value,
    //             }
    //             arrey.push({...obj})
    //             inner();
    //         console.log(arrey)

    //         Kreditsum.value = ''
    //         boshlangicht.value = ''
    //         YillikFoiz.value = ''
    //         YillikMuddat.value = ''
    //         Kalendaryili.value = ''
    //         Kalendaroyi.value = ''


    //     }
    // })


})

