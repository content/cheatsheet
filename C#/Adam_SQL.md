# MySQL Database Connection and Operations in C#

This code demonstrates how to connect to a MySQL database and perform basic operations using C#.

## Code Explanation

```csharp
using MySqlConnector;  // MySQL database connector library
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

Console.WriteLine("Hello, World!");
List<int> list = new List<int>();      // List to store seller IDs
List<string> list2 = new List<string>(); // List to store seller names

// Create connection string builder to configure the database connection
var builder = new MySqlConnectionStringBuilder
{
    Server = "localhost",    // Database server address
    UserID = "root",        // Database username
    Password = "",          // Database password (empty in this case)
    Database = "ingatlan"   // Database name
};

// Create and open the database connection
MySqlConnection conn = new MySqlConnection(builder.ConnectionString);
conn.Open();

// Create a command to execute SQL queries
var command = conn.CreateCommand();

// SELECT operation - Read data from 'sellers' table
command.CommandText = "SELECT * FROM sellers";
var reader = command.ExecuteReader();

// Process the query results
while (reader.Read())
{
    list.Add(reader.GetInt32(0));    // Add seller ID to list (first column)
    list2.Add(reader.GetString(1));  // Add seller name to list (second column)
}
reader.Close();  // Close the data reader

// INSERT operation - Add new record to 'sellers' table
command.CommandText = "INSERT INTO `sellers` (`id`, `name`, `phone`) " +
                     "VALUES (NULL, 'asdd', '23q232')";
command.ExecuteNonQuery();  // Execute the INSERT command

// Close the database connection
conn.Close();

// Output the number of sellers retrieved
Console.WriteLine(list.Count);
Console.ReadKey();
```
