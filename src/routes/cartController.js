const Cart = require("../models/Cart")

const add_to_cart = async(req,res)=>{
        try {
            const { productid, img, name, price, quantity } = req.body;
        
            const cart_obj = new Cart({
              productid: productid,
              img: img,
              name: name,
              price: price,
              quantity: 0,
            });

            const cartData = await cart_obj.save();
        
            // Redirect to the cart page or send a success response
            res.redirect("/cart");
    } catch (error) {
        res.status(400).send({ success:false, msg:error.message })
    }

}

module.exports = {
    add_to_cart
}