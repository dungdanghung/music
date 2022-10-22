
function Animationwc() {


    function getlastnumber(chuoi) {
        chuoi = chuoi.split(' ')
        chuoi = chuoi.find((da) => {
            if (da.includes('show')) {
                return da
            }
        })
        return chuoi[chuoi.length - 1]
    }


    setTimeout(() => {
        let a = document.querySelectorAll('.wcitem1_1'); a = [...a]
        a.map((da, index) => {
            if (index < 3) {
                da.classList.add('activewc', `show${index + 1}`)
                if (index == 0) { da.classList.add('first') }
            } else if (index == 3) {
                da.classList.add('next')
            }
        })

        let countnext = 4
        let active

        setInterval(() => {
            active = document.querySelectorAll('.activewc'); active = [...active];
            active.map((da, index) => {
                if (da.className.includes('show1')) {
                    da.classList.add('actionwc')
                    da.classList.remove('show1')
                } else {
                    da.classList.add(`show${parseInt(getlastnumber(da.className)) - 1}`)
                    da.classList.remove(`show${parseInt(getlastnumber(da.className))}`)
                }
            })
            document.querySelector('.next').classList.add('activewc', 'show3')
            document.querySelector('.next').classList.remove('next')
            setTimeout(() => {
                document.querySelector('.first').classList.remove('activewc', 'actionwc', 'first')
                document.querySelector('.show1').classList.add('first')
                a[countnext].classList.add('next')
                countnext + 1 < a.length ? countnext = countnext + 1 : countnext = 0;
            }, 500)
        }, 3000)

    }, 100)
}

export default Animationwc;