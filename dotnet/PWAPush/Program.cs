// See https://aka.ms/new-console-template for more information

using Google.Apis.FirebaseCloudMessaging.v1;
using Google.Apis.FirebaseCloudMessaging.v1.Data;
using Google.Apis.Services;
using PWAPush;

var secret = new SecretReader().Read<GoogleSetting>();
var firebaseMessagingClient = new FirebaseMessagingClient();
Console.WriteLine("hoge");