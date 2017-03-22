use cashboard;

db.transactions.remove({})

db.transactions.insert([{
  where: "Food's", 
  value: 6.00, 
  date:"24/03", 
  tag: "supermarket"},
  {
  where: "Boots", 
  value: 6.00, 
  date:"24/03", 
  tag: "pharmacy"},

  {
  where: "crep", 
  value: 7.00, 
  date:"22/03", 
  tag: "pharmacy"}
  ]);     
      









