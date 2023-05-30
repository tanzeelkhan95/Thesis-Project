const Cart = require("../models/Cart")

const add_to_cart = async(req,res)=>{
        try {
            const { productid, img, name, price } = req.body;
        
            const cart_obj = new Cart({
              productid: productid,
              img: img,
              name: name,
              price: price,
            });

            const cartData = await cart_obj.save();
        
            // Redirect to the cart page or send a success response
            res.redirect("/cart");
    } catch (error) {
        res.status(400).send({ success:false, msg:error.message })
    }

}

const delete_cart_item = async (req,res) => {
    const productId = req.body.productId;
    const cartItem = await Cart.findById(productId);
    await cartItem.remove();
    res.redirect("/cart")
}
module.exports = {
    add_to_cart,
    delete_cart_item,
}