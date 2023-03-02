// See https://aka.ms/new-console-template for more information

using CommandLine;
using PWAPush;

await Parser.Default.ParseArguments<Options>(args)
    .WithParsedAsync(async o =>
    {
        var firebaseMessagingClient = new FirebaseMessagingClient();
        await firebaseMessagingClient.SendAsync(o.Token, "title", "bodyだよ");
    });


public class Options
{
    [Option('t', "token", Required = true, HelpText = "Set fcm token")]
    public string Token { get; set; }
}