jokrr-Quotrr
============

Built in Meteor 1.0.2.1

A simple iOS / Android app that allows users to make jokes and approve/disaprove of them.
make jokr for iOS ( an app where friends can make joke lists together )

Features/fixes to be added:


           add userID to people that like or dislike a joke
          make each joke a different alert color (or alternate between 2 colors)
           add Facebook account ui 
          make sure user is logged in in order to vote on shit


To get working on your iOS device type: 

meteor install-sdk ios
meteor add-platform ios
meteor run ios


Running on an iPhone or iPad (Mac Only; requires Apple developer account)

If you have an Apple developer account, you can also run your app on an iOS device. Run the following command:

meteor run ios-device

Or Android:
Running on an Android emulator

In the terminal, go to your app folder and type:

meteor install-sdk android
This will help you install all of the necessary tools to build an Android app from your project. When you are done installing everything, type:

meteor add-platform android
After you agree to the license terms, type:

meteor run android
After some initialization, you will see an Android emulator pop up, running your app inside a native Android wrapper. The emulator can be somewhat slow, so if you want to see what it's really like using your app, you should run it on an actual device.

Running on an Android device

First, complete all of the steps above to set up the Android tools on your system. Then, make sure you have USB Debugging enabled on your phone and the phone is plugged into your computer with a USB cable. Also, you must quit the Android emulator before running on a device.

Then, run the following command:

meteor run android-device
The app will be built and installed on your device. If you want to point your app to the server you deployed in the previous step, run:

meteor run android-device --mobile-server my_app_name.meteor.com