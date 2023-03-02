using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;

namespace PWAPush;

public class FirebaseMessagingClient
{
    public FirebaseMessagingClient()
    {
        FirebaseApp.Create(new AppOptions
        {
            // 環境変数に入れる https://firebase.google.com/docs/admin/setup?hl=ja
            // export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
            Credential = GoogleCredential.GetApplicationDefault()
        });
    }

    public async Task SendAsync(string token, string title, string body)
    {
        var message = new Message
        {
            Notification = new Notification
            {
                Title = title,
                Body = body
            },
            Token = token
        };
        var result = await FirebaseMessaging.DefaultInstance.SendAsync(message);
        Console.WriteLine(result);
    }
}