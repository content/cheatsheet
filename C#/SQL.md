# SQL Cheatsheet in C#

To use the following code snippets you must add `MySqlConnector` NuGet Package to your project.

## Creating SQL Connection

To create a SQL connection in C#, you can use the `SqlConnection` class from the `System.Data.SqlClient` namespace. Here's a simple example:

```csharp
using System;
using MySqlConnector;

class Program
{
    static void Main()
    {
        MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder
        {
            Server = "address",
            UserID = "user",
            Password = "password",
            Database = "database",
        };

        using (MySqlConnection connection = new MySqlConnection(builder.ToString()))
        {
            connection.Open();
        }
    }
}
```

Remember to replace `address`, `user`, `password`, `database` with your actual database information.

## Simple Query Function

Here's a simple query function in C# that executes the given `query` parameter:

```csharp
using System;
using MySqlConnector;

class Program
{
    static MySqlDataReader Query(string query, MySqlConnection connection)
    {
        MySqlCommand command = new MySqlCommand(sql, connection);
        MySqlDataReader reader = command.ExecuteReader();
        return reader;
    }
}
```

Basic usage example:

```csharp
using MySqlConnector;
using System;

class Program
{
    static void Main(string[] args)
    {
        MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder
        {
            Server = "address",
            UserID = "root",
            Password = "",
            Database = "test"
        };

        MySqlConnection connection = new MySqlConnection(builder.ConnectionString);
        connection.Open();

        using (MySqlDataReader result = Query("SELECT * FROM test", connection))
        {
            Console.WriteLine("col1\tcol2\tcol3\tcol4");
            while (result.Read())
            {
                Console.Write(result["col1"] + "\t");
                Console.Write(result["col2"] + "\t");
                Console.Write(result["col3"] + "\t");
                Console.Write(result["col4"] + "\t");
                Console.WriteLine();
            }
        }

        connection.Close();
        Console.ReadKey();
    }

    static MySqlDataReader Query(string sql, MySqlConnection connection)
    {
        MySqlCommand command = new MySqlCommand(sql, connection);
        MySqlDataReader reader = command.ExecuteReader();
        return reader;
    }
}
```

Output:
```
col1    col2    col3    col4
1       1       2       3
2       4       5       6
```