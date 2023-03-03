using System.Collections.ObjectModel;
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

    /// <summary>
    /// PUSH通知を送信します
    /// </summary>
    /// <param name="token"></param>
    /// <param name="title"></param>
    /// <param name="body"></param>
    public async Task SendAsync(string token, string title, string body, string imageUri = null)
    {
        var message = new Message
        {
            Notification = new Notification
            {
                Title = title,
                Body = body,
                ImageUrl = imageUri
            },
            Token = token,
            Webpush = new WebpushConfig()
            {
                Headers = new Dictionary<string, string>()
                {
                    {"image", imageUri}
                }
            },
            Android = new AndroidConfig()
            {
                Notification  = new AndroidNotification()
                {
                    ImageUrl = imageUri
                }
            },
            Apns = new ApnsConfig()
            {
                Aps = new Aps()
                {
                    Badge = 2,
                    MutableContent = true
                },
                FcmOptions = new ApnsFcmOptions()
                {
                    ImageUrl = imageUri
                }
            }
        };

        await FirebaseMessaging.DefaultInstance.SendAsync(message);
    }
    
    /// <summary>
    /// 複数人にPUSH通知を送信します
    /// </summary>
    /// <param name="tokens"></param>
    /// <param name="title"></param>
    /// <param name="body"></param>
    public async Task SendMulticastAsync(string[] tokens, string title, string body, string imageUri = null)
    {
        var message = new MulticastMessage
        {
            Notification = new Notification
            {
                Title = title,
                Body = body,
                ImageUrl = imageUri,
            },
            Tokens = tokens,
            Webpush =
            {
                Headers = new Dictionary<string, string>()
                {
                    {"image", imageUri}
                }
            }
        };
        await FirebaseMessaging.DefaultInstance.SendMulticastAsync(message);
    }
}