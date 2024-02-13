SELECT user.name, user.birthdate, customer.name
FROM user
JOIN customer ON user.customer_id = customer.id
WHERE user.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR) 
AND user.status = 1
AND customer.status = 1
ORDER BY customer.name;