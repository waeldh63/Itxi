set up for the app
go to Itxi file using terminal
   cd Itxi 
   npm install 
   npx react-native run-android (to run the application) 
   
   NOTE: MAKE SURE TO HAVE RUNNING EMULATOR FOR ANDROID 

THIS APP CONTAINS  react native navigation and deep linking
 IN APP.JS WE HAVE NavigationContainer CONTAINS 4 SCREEN
   FOR ONBOARDING :
   WelcomePage 
   CompanyIdPage (COMPANY IDS == 2000 || 2001 || 2002 || 2003 ||2004 || 2005 ||2006||2007 ||2008 ||2009) CHECK DATA IN DATA FOLDER 
   PickVoicePage

   And the MainPage
   IN MAIN PAGE WE HAVE A BOTTOM SHEET SCREEN FOR SETTINGS CONTAINS 4 SCREEN 
   SettingsPage
   SetCompanyIdPage
   PickVoicePage
   CompanyIdPage

TO TEST DEEP linking USE TERMINAL AFTER RUNING THE APP WITH  (npx react-native run-android):
   adb shell am force-stop com.itxi
   adb shell am start -W -a android.intent.action.VIEW -d "myapp://set-company-id"

      THESE SECOND COMMAND SHOULD OPEN SetCompanyIdPage WITH IGNORING THE ONBOARDING SCREENS AFTER CLOSING THE APPLICATION USING THE FIRST COMMAND
