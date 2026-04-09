/// producer

consumer.subscribe({ topic: "orders" });

consumer.run({
  eachMessage: async ({ message }) => {
    const data = JSON.parse(message.value);
    console.log("Processing order:", data);
  }
});
