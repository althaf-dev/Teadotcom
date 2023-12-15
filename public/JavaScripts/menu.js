$(document).ready(() => {

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item")[0].scrollWidth;
    console.log(`carouselWidth=${carouselWidth}`);
    console.log(`cardwidth = ${cardWidth}`);
    let position = 0;

    $(".cartsummary").hide();
    $(".form-check-input").click(() => {
        if ($(".form-check-input").val() == "on") {

            $(".nonveg").toggle();
        }
    })


    let item = 0;
    let cartPrice = 0;
    cart_items=[];

    // localStorage.setItem("items",JSON.stringify(cart_items));

    $(".card button").click((event) => {
        const button = event.currentTarget;
        $(".cartsummary").show();

        pricetag = button.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[1];
        item_tag = button.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[1];
        price = Number($(pricetag).html());
        item_name = $(item_tag).html();
        cartPrice += price;
        cart_items.push({item_name,price});
        localStorage.setItem("items",JSON.stringify(cart_items));
        $("#cart-price").html(cartPrice);
    })

    $(".carousel-control-next").click(() => {

        if (position < (carouselWidth - (4 * cardWidth))) {
            position += cardWidth;
            $(".carousel-inner").animate({ scrollLeft: position }, 1000);

        }})


    $(".carousel-control-prev").click(() => {
        if (position > 0) {
            console.log(position);
            position -= cardWidth;
            $(".carousel-inner").animate({ scrollLeft: position }, 1000);
        }
    })
})