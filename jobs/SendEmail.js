async function SendEmail({ id, size }) {
  console.log("[SendEmail] Job processed:", { id, size });
}

module.exports = SendEmail;
