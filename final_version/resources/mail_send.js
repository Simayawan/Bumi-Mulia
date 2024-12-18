<script src="https://unpkg.com/smtp.js/dist/smtp.min.js"></script>
function send_mail(sender,reciever,subjects,content) {
    const email = {
        from: sender,
        to: reciever,
        subject: subjects,
        text: content
    }
    smtp.sendMail(email)
        .then(info => console.log(info))
        .catch(err => console.error(err))
}