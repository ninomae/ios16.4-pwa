// See https://aka.ms/new-console-template for more information

using CommandLine;
using PWAPush;

await Parser.Default.ParseArguments<Options>(args)
    .WithParsedAsync(async o =>
    {
        var firebaseMessagingClient = new FirebaseMessagingClient();
        await firebaseMessagingClient.SendAsync(o.Token, "title", "bodyだよ", "https://image.cnbcfm.com/api/v1/image/104225995-_95A5004.jpg?v=1540458420&w=740&h=416&ffmt=webp&vtcrop=y");
    });


public class Options
{
    [Option('t', "token", Required = true, HelpText = "Set fcm token")]
    public string Token { get; set; }
}