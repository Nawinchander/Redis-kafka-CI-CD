/// producer

producer.send({
  topic: "orders",
  messages: [{ value: JSON.stringify({ orderId: 1 }) }]
});


