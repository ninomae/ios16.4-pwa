// See https://aka.ms/new-console-template for more information

using CommandLine;
using PWAPush;

Parser.Default.ParseArguments<Options>(args)
    .WithParsedAsync(async o =>
    {
        Console.WriteLine("fuga");
        var firebaseMessagingClient = new FirebaseMessagingClient();
        await firebaseMessagingClient.SendAsync(o.Token, "title", "bodyだよ");
        Console.WriteLine("hoge");
    });


public class Options
{
    [Option('t', "token", Required = true, HelpText = "Set fcm token")]
    public string Token { get; set; }
}