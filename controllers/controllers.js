const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: 'emailyazılacak',
        pass: 'emailşifresiayzılacal'
    },

})

const postiletisim = async (req, res, next) => {
    try {
        console.log("req", req.body)
        const mailOptions = await {
            from: "emailyazılacak", // kim gönderecekse onun email (gönderen)
            to: "emailyazılacak", // Alıcının email adresi
            subject: req.body.konu,
            text: `email= ${req.body.email} mesaj= ${req.body.message} `,
            html: `<h1>siteden gelen</h1>
            <p>  isim= ${req.body.name} </p>
            <p> email= ${req.body.email}  </p>
            <p>mesaj= ${req.body.message}  </p>
           
            `
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("error", error)
            }
          
        })
        res.send({ message: "Tüm Postlar başarılı olarak get ile getirildi" })
    } catch (err) {
        const error = new Error("Bir hata oluştu")
        error.error = err;
        next(error)
    }
};
const getiletisim = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};


module.exports={
    postiletisim,
    getiletisim
}