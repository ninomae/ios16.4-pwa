// See https://aka.ms/new-console-template for more information

using Google.Apis.FirebaseCloudMessaging.v1;
using Google.Apis.FirebaseCloudMessaging.v1.Data;
using Google.Apis.Services;
using PWAPush;

var secret = new SecretReader().Read<GoogleSetting>();
Console.WriteLine(secret.APIKey);
Console.WriteLine("Hello, World!");
var initializer = new BaseClientService.Initializer
{
    ApiKey = "<MY_API_KEY>",
    ApplicationName = "<MY_PROJECT_NAME>"
};
var service = new FirebaseCloudMessagingService(initializer);
var projectsResource = new ProjectsResource(service);
var sendMessage = new SendMessageRequest()
{
    Message = new Message()
    {
        Topic = "hoge",
        Notification = new Notification()
        {
            Title = "Hello!"
        },
        Webpush = new WebpushConfig()
        {

        }
    }
};
