

let item = JSON.parse(localStorage.getItem("items"));
let sum = 0;
item.forEach(element => {
    $("#cart_items").append(`<div class=" row mt-2 p-1 m-0"><div class="col-4">
    ${element.item_name}
</div>
<div class="col-4">
    <button class="btn btn-white border border-2 text-success fw-bold ps-lg-3 pe-lg-3 mt-2"><div><span class="min p-2 fw-bold" >-</span><span  id="qty" class="ms-2 me-2 qty">1</span><span class="plus p-2" class="ms-3 fw-bold">+</span></div></button>
</div>
<div class="col-3 mt-1  d-flex justify-content-end align-items-center  ">
  ${element.price}
</div></div>`);
    sum += element.price;
});

$(".total").html(sum);
$(".min").click((event) => {

    event.stopPropagation();
    const parent = event.target.parentElement;
    const parent_price = event.target.parentElement.parentElement.parentElement.parentElement.children[2];
    const child = parent.children[1];
    let qty1 = Number($(child).text());
    price = Number($(parent_price).html());
   

    if (qty1 > 0) {
       

        sum -= (price/qty1);
        price -= price / qty1;
        $(parent_price).html(price);
        
        qty1--;
        $(child).html(qty1);
        
        $(".total").html(sum);
        console.log("iam here")
    }
    if (qty1 == 0) {
        $(event.target.parentElement.parentElement.parentElement.parentElement).remove();
    }
})

$(".plus").click((event) => {

    event.stopPropagation();
    const parent = event.target.parentElement.children[1];
    const parent_price = event.target.parentElement.parentElement.parentElement.parentElement.children[2];
    price = Number($(parent_price).html());
    let qty1 = Number($(parent).text());
    price += price / qty1;
    $(parent_price).html(price);
    qty1++;
    console.log(qty1);
    $(parent).html(qty1);
    sum += (price/qty1);
    $(".total").html(sum);


})