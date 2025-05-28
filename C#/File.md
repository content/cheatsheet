# 🏡 Property Tax Calculation Program in C#

This C# console application processes data from a file (`utca.txt`) containing information about plots of land, including their size, location, zone classification, and owner. It performs various operations such as:

- Counting properties
- Looking up owners by ID
- Calculating property taxes based on zones
- Detecting zoning inconsistencies in streets
- Writing calculated tax data to a file (`fizetendo.txt`)

---

## 📦 Class Definition: `PlotData`

```csharp
internal class PlotData
{
    public int OwnerId;
    public string StreetName;
    public string HouseNumber;
    public string Zone;
    public int Area;

    public PlotData(string line)
    {
        string[] parts = line.Split(' ');
        this.OwnerId = Convert.ToInt32(parts[0]);
        this.StreetName = parts[1];
        this.HouseNumber = parts[2];
        this.Zone = parts[3];
        this.Area = Convert.ToInt32(parts[4]);
    }
}
```
🔍 Why Use a Class?
- Using a class helps to group all related property data together. It enhances code organization, reusability, and maintainability

## 📂 Reading Data from File (StreamReader)
```csharp
List<PlotData> properties = new List<PlotData>();

using (StreamReader reader = new StreamReader("utca.txt"))
{
    string header = reader.ReadLine(); // Skip the header

    while (!reader.EndOfStream)
    {
        properties.Add(new PlotData(reader.ReadLine()));
    }
} 
```
💡 Why Use using?
- The using statement ensures that the file is properly closed and disposed of, even in case of an exception. It's equivalent to Python's with open(...).

### 💰 Switch Case Example
```csharp
int countA = 0, taxA = 0;
int countB = 0, taxB = 0;
int countC = 0, taxC = 0;

foreach (var property in properties)
{
    switch (property.Zone)
    {
        case "A": countA++; taxA += property.Area * 800; break;
        case "B": countB++; taxB += property.Area * 600; break;
        case "C": countC++; taxC += property.Area * 100; break;
    }
}
```
## 💾 Writing to Output File (StreamWriter)
```csharp
HashSet<int> processedOwners = new HashSet<int>();

using (StreamWriter writer = new StreamWriter("fizetendo.txt"))
{
    foreach (var property in properties)
    {
        if (!processedOwners.Contains(property.OwnerId))
        {
            processedOwners.Add(property.OwnerId);
            writer.WriteLine($"{property.OwnerId} {CalculateTax(property.Zone, property.Area)}");
        }
    }
}
```
💡 Why Use HashSet?
- To ensure that each owner is only processed once, avoiding duplicate entries in the output file

### 📄 Output File (fizetendo.txt)
```yaml
1001 160000
1002 108000
1003 15000
...
```




