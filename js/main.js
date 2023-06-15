$('.toggle-open').click(() => {
    $('.toggle-menu').css('display', 'flex')
    $('.toggle-close').css('display', 'flex')
    $('.toggle-open').css('display', 'none')

})
$('.toggle-close').click(() => {
    $('.toggle-menu').css('display', 'none')
    $('.toggle-close').css('display', 'none')
    $('.toggle-open').css('display', 'flex')

})

