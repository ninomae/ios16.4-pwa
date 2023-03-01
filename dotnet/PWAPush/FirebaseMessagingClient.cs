using FirebaseAdmin;
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
}