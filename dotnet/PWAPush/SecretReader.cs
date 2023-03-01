using Microsoft.Extensions.Configuration;

namespace PWAPush;

public class SecretReader
{
    public T Read<T>()
    {
        var environment = Environment.GetEnvironmentVariable("NETCORE_ENVIRONMENT");
        var builder = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .AddJsonFile($"appsettings.{environment}.json", optional: true)
            .AddUserSecrets<Program>()
            .AddEnvironmentVariables();
        var configurationRoot = builder.Build();
        return configurationRoot.Get<T>()!;
    }
}