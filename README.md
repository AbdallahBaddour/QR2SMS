# QR2SMS
<b>Description:</b> Scan QRcode To Automatically Send SMS Based On User Carrier.

<b>Created By:</b> [@BaddourAbdallah](http://twitter.com/baddourabdallah) Using [Ionic Framework](http://ionicframework.com/)

<b>To setup the app:</b>

1.First create a new blank ionic project:
```bash
$ ionic start [appname] blank
```
2.Replace folders/files of my project in the blank project you just create in the <b>www</b> folder.

3.Install [ngCordova](http://ngcordova.com/docs/install/).

4.Install [cordovaSMS](http://ngcordova.com/docs/plugins/sms/) plugin.

5.Install [whitelist](https://github.com/apache/cordova-plugin-whitelist) plugin:
```bash
$ ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git
```
Add these 2 lines in <b>config.xml</b> below:
```bash
<access origin="*"/>
```
```bash
  <access origin="tel:*" launch-external="yes" />
  <access origin="mailto:*" launch-external="yes" />
```
6.Insatll [barcodeScanner](http://ngcordova.com/docs/plugins/barcodeScanner/) plugin.

7.Insatll [sim](https://github.com/pbakondy/cordova-plugin-sim) plugin.

8.Generate QR code using the following text format:
```bash
carriername1:receiver_PhoneNumber:message_here-carrienamer2:receiver_PhoneNumber:message_here-carriername3:....
```
example:
```bash
vodafone:7640000123:Hello Vodafone users-orange:7650000321:Hello orange users
```
I used this [QRcode Generator Site](http://www.qr-code-generator.com/) while developing this app.

9.To build and run the app on android:
```bash
$ ionic platform add android
$ ionic run android
```

#License
See the [LICENSE](https://github.com/AbdallahBaddour/QR2SMS/blob/master/LICENSE.md) file for license rights and limitations (MIT).
And you may not use the application for any illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations (for example: federal, state, local and provincial) applicable to your use of the application.
