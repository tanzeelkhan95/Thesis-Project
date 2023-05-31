const Cart = require("../models/Cart")
const CartCred = require("../models/cartData")
const UserCred = require("../models/userData")

const user_details = async(req,res) =>{
    try {
        const { fullname, phone, address, postalcode, city, country } = req.body

        const usercred_obj = new UserCred({
            fullname:fullname,
            phone:phone,
            address:address,
            postalcode:postalcode,
            city:city,
            country:country
        })
        const usercredData = await usercred_obj.save()
        res.status(200).redirect('/payment')
    } catch (error) {
        res.status(400).send({ success:false, msg:error.message })
    }
}

const cart_details = async(req,res) =>{
    try {
        const { productString, allQuantity, totalcartcost } = req.body

        const cartcred_obj = new CartCred({
            productString:productString,
            allQuantity:allQuantity,
            totalcartcost:totalcartcost
        })
        const cartcredData = await cartcred_obj.save()
        res.status(200).redirect('/usercred')
    } catch (error) {
        res.status(400).send({ success:false, msg:error.message })
    }
}

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
    cart_details,
    user_details
}