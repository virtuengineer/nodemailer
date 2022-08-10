# nodemailer

Sending mail with Node JS!

## Installation ##

Clone Repository:

    git clone https://github.com/virtuehub/nodemailer

Use NPM to install:

    npm install

Config:

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: 'example@hotmail.com',
            pass: '',
        },
    });
    host > hotmail(smtp.office365.com), outlook(smtp-mail.outlook.com) 
    example@hotmail.com > Your email
    pass > Your password

    let info = await transporter.sendMail({
        from: '"Nickname" <example@hotmail.com>',
        to: "example2@hotmail.com",
        subject: "Hello",
        text: "Hello world!",
        html: "<b>Hello world!</b>",
    });
    from > Nickname -> Your Nickname / <example@hotmail.com> -> Your email
    to > example2@hotmail.com -> To be sent email
    subject > Title