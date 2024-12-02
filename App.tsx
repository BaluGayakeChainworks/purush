// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import LoginPage from './src/screens/loginPage';
import SignUpScreen from './src/screens/signUpScreen';
import SetPassword from './src/screens/setPassword';
import AdminScreen from './src/screens/adminScreen';
import UserManagement from './src/screens/userManagement';
import AddUser from './src/screens/addUser';
import MyProfile from './src/screens/profile';
import EditProfile from './src/screens/editProfile';
import UpdatePassword from './src/screens/updatePassword';
import Reports from './src/screens/reports';
import TaskAssign from './src/screens/taskAssign';
//Field Officer Screen
import FieldOfficer from './src/screens/fieldOfficerScreens/fieldOfficer';
import Overview from './src/screens/fieldOfficerScreens/overview';
import Tasks from './src/screens/fieldOfficerScreens/tasks';
import SubmitReport from './src/screens/fieldOfficerScreens/submitReport';
//Forest Admin Screen
import ForestAdmin from './src/screens/forestAdminScreen/forestAdmin';
import SubmitReports from './src/screens/forestAdminScreen/submitReport';
import ForestAdminOverview from './src/screens/forestAdminScreen/overview';
import PatrolSchedule from './src/screens/forestAdminScreen/patrolSchedule';
import Alerts from './src/screens/forestAdminScreen/alerts';
import EmergencyContacts from './src/screens/forestAdminScreen/emergencyContact';
import TouristLogin from './src/screens/touristScreens/touristLogin';
import RegisterTour from './src/screens/touristScreens/registerTour';
import Header from './src/screens/header';
import PaymentMethod from './src/screens/touristScreens/paymentMethod';
import AddCard from './src/screens/touristScreens/addCard';
import PaymentScreen from './src/screens/touristScreens/payment';
import PaymentConfirmation from './src/screens/touristScreens/paymentConfirmation';
import ParkingAvailability from './src/screens/parkingManagementScreens/parkingAvailability';
import ParkingSpots from './src/screens/parkingManagementScreens/parkingSpots';
import ParkingDetails from './src/screens/parkingManagementScreens/parkingDetails';
import ParkingConfirmation from './src/screens/parkingManagementScreens/parkingConfirmation';
import Facilities from './src/screens/facilitiesServicesScreen/facilities';
import MapScreen from './src/screens/facilitiesServicesScreen/mapScreen';
import GuidedTours from './src/screens/guidedToursAndInfoScreen/guidedTours';
import AudioVideoGuide from './src/screens/guidedToursAndInfoScreen/audioVIdeo';
import GuideBooking from './src/screens/guidedToursAndInfoScreen/guideBooking';
import BookGuide from './src/screens/guidedToursAndInfoScreen/tourGuideBooking';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="UserManagement" component={UserManagement} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="Profile" component={MyProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="TaskAssign" component={TaskAssign} />
        <Stack.Screen name="Header" component={Header} />

        {/* field Officer */}

        <Stack.Screen name="FieldOfficer" component={FieldOfficer} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="SubmitReport" component={SubmitReport} />

        {/* forest Admin */}

        <Stack.Screen name="ForestAdmin" component={ForestAdmin} />
        <Stack.Screen
          name="ForestAdminOverview"
          component={ForestAdminOverview}
        />
        <Stack.Screen name="SubmitReports" component={SubmitReports} />
        <Stack.Screen name="PatrolSchedule" component={PatrolSchedule} />
        <Stack.Screen name="Alerts" component={Alerts} />
        <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} />

        {/* Tourist Screens */}

        <Stack.Screen name="TouristLogin" component={TouristLogin} />
        <Stack.Screen name="RegisterTour" component={RegisterTour} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmation}
        />
        <Stack.Screen
          name="ParkingAvailability"
          component={ParkingAvailability}
        />
        <Stack.Screen name="ParkingSpots" component={ParkingSpots} />
        <Stack.Screen name="ParkingDetails" component={ParkingDetails} />
        <Stack.Screen
          name="ParkingConfirmation"
          component={ParkingConfirmation}
        />
        <Stack.Screen name="Facilities" component={Facilities} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="GuidedTours" component={GuidedTours} />
        <Stack.Screen name="AudioVideoGuide" component={AudioVideoGuide} />
        <Stack.Screen name="GuideBooking" component={GuideBooking} />
        <Stack.Screen name="BookGuide" component={BookGuide} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
