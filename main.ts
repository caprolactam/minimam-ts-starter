import mysql from 'mysql2/promise'
;(async function () {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 33060,
    user: 'user',
    password: 'user_password',
    database: 'portfolio',
  })

  await connection.query(
    'CREATE TABLE IF NOT EXISTS `table` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `age` INT NOT NULL , PRIMARY KEY (`id`));',
  )

  await connection.query(
    'INSERT INTO `table` (`id`, `name`, `age`) VALUES (NULL, "Page", "45");',
  )

  const result = await connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page";',
  )

  console.log(result)

  await connection.end()
})()

export function sumNumbers(a: number, b: number) {
  return a + b
}
