import express from 'express';
import dotenv from 'dotenv';
import stripe from 'stripe'; 

dotenv.config();
const app=express();
app.use(express.static('project'));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile("newcart.html",{root:'project'})
})

app.get("/success",(req,res)=>{
    res.sendFile("success.html",{root:'project'})
})

app.get("/cancel",(req,res)=>{
    res.sendFile("cancel.html",{root:'project'})
})

let stripegateway=stripe(process.env.stripe_api);
let DOMAIN =process.env.DOMAIN;

app.post('/stripe-checkout',async(req,res)=>{
    const lineitems=req.body.items.map((item)=>{
        const unitAmount=parseInt(item.price.replace(/[^0-9.-]+/g, '') *100);
        console.log('item-price:',item.price);
        console.log('unitAmount:',unitAmount);
        return{
            price_data:{
                currency:'usd',
                product_data:{
                    name:item.title,
                    images:[item.productimg]
                },
                unit_amount:unitAmount,
            },
            quantity:item.quantity,

        };
    });
    console.log('lineItems:',lineitems);
    const session=await stripegateway.checkout.sessions.create({
        payment_method_types:['card'],
        mode:'payment',
        success_url:`${DOMAIN}/success`,
        cancel_url:`${DOMAIN}/cancel`,
        line_items:lineitems,

        billing_address_collection:'required'
    });
    res.json(session.url);
});
app.listen(3000,()=>{
    console.log("listening on port 3000;");
});