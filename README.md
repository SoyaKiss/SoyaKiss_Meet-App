<h2>Project Name: Event Planner PWA (Meet_App)</h2>
<h3>Objective: </h3>
<p>Develop a serverless, progressive web application (PWA) with React using a test-driven development (TDD) approach, integrating the Google Calendar API to fetch upcoming events.</p>
<br>

<h3>Context: </h3>
<p>Serverless architecture and PWAs have gained significant traction in recent years. By integrating these two concepts, this application will benefit from: </p>
<br>

<ul>
  <li><strong>Serverless: </strong>No backend maintenance, scalability, constant availability, and no costs for idle time.</li>
  <li><strong>PWAs: </strong> Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.</li>
</ul>
<br>
<p>The app will employ TDD, writing tests before the actual functionality. This approach ensures a focus on requirements and promotes high-quality code through immediate feedback. 
Additionally, the app will include data visualization to enhance user experience and facilitate data interpretation.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Filter Events by City: </strong> Users can search for events in a specific city.</li>
  <li><strong>Show/Hide Event Details: </strong> Toggle event details for a cleaner interface.</li>
  <li><strong>Specify Number of Events: </strong> Users can customize the number of events displayed.</li>
  <li><strong>Offline Usage: </strong> The app remains functional without an internet connection.</li>
  <li><strong>Add to Home Screen: </strong> Users can add a shortcut to their home screen.</li>
  <li><strong>Event Details Charts: </strong> Visual representations of event data through charts.</li>
</ul>
<br>
<h3>Technical Requirements</h3>
<ul>
  <li>Framework: Built using React.</li>
  <li>Development Technique: Test-driven development (TDD).</li>
  <li>API Integration: Utilizes Google Calendar API and OAuth2 authentication.</li>
  <li>Serverless Functions: Uses AWS Lambda for authorization.</li>
  <li>Version Control: Hosted on GitHub.</li>
  <li>Browser Compatibility: Supports the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as IE11.</li>
  <li>Responsive Design: Displays well on all screen sizes, including mobile and tablet (1920px to 320px widths).</li>
  <li>PWA Compliance: Passes Lighthouse’s PWA checklist.</li>
  <li>Offline Support: Functions offline or in slow network conditions with a service worker.</li>
  <li>Installable: Users can install the app on desktop and add it to their home screen on mobile.</li>
  <li>Deployment: Deployed on GitHub Pages.</li>
  <li>Alert System: Implements an OOP-based alert system.</li>
  <li>Data Visualization: Includes visual data representations.</li>
  <li>Test Coverage: Ensures a test coverage rate of ≥ 90%.</li>
  <li>Performance Monitoring: Monitored using an online performance tool.</li>
</ul>
<br>
<h3>Visualization Techniques</h3>
The application will feature two main charts.
<ul>
  <li><strong>Scatterplot: </strong> Displays the number of events in each location.</li>
  <li><strong>Pie Chart: </strong> Visualizes the popularity of different event genres.</li>
</ul>
<br>
<h3>Conclusion</h3>
<p>This project aims to deliver a high-quality, user-friendly event planning application by leveraging the advantages of serverless architecture and PWAs, combined with a rigorous TDD methodology. </p>

<br>
<br>

<h2>User Stories</h2>

<h3>Feature 1: Filter Events By City</h3>
<h4>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.</h4>
<p><strong>As a </strong>user,</p> 
<p><strong>I should be able to </strong>see upcoming events from all cities when I haven’t searched for a specific city,</p> 
<p><strong>so that</strong> I can explore all available events without any filter applied.</p>

<br>

<h4>Scenario 2: User should see a list of suggestions when they search for a city.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>see a list of city suggestions when I start typing in the search bar,</p>
<p><strong>so that</strong> I can quickly find and select the city I’m looking for.</p>

<br>

<h4>Scenario 3: User can select a city from the suggested list.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>select a city from the suggested list,</p>
<p><strong>so that</strong> I can filter the events to show only those happening in the selected city.</p>

<br>

<h3>Feature 2: Show/Hide Event Details</h3>
<h4>Scenario 1: An event element is collapsed by default.</h4>
<p><strong>As a </strong>user,</p> 
<p><strong>I should be able to </strong>see event elements collapsed by default,</p> 
<p><strong>so that</strong> I can view a consise list of events without being overwhelmed by details.</p>

<br>

<h4>Scenario 2: User can expand an event to see details.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>expand an event element,</p>
<p><strong>so that</strong> I can see more detailed information about the event.</p>

<br>

<h4>Scenario 3: User can collapse an event to hide details.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>collapse an expanded event element,</p>
<p><strong>so that</strong> I can hide the details and return to a concise view of events.</p>

<br>

<h3>Feature 3: Specify Number of Events</h3>
<h4>Scenario 1: When user hasn’t specified a number, 32 events are shown by default.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>see 32 events by default if I haven’t specified a number,</p>
<p><strong>so that</strong> I have a reasonable number of events to browse without needing to configure settings initially.</p>
  
<br>

<h4>Scenario 2: User can change the number of events displayed.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>change the number of events displayed, </p>
<p><strong>so that</strong> I can view a customized number of events based on my preferences.</p>

<br>

<h3>Feature 4: Use the App When Offline</h3>
<h4>Scenario 1: Show cached data when there’s no internet connection.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>see cached event data when there’s no internet connection,</p>
<p><strong>so that</strong> I can still access previously loaded events even when offline.</p>

<br>

<h4>Scenario 2: Show error when user changes search settings (city, number of events).</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>see an error message if I try to change search settings while offline, </p>
<p><strong>so that</strong> I understand that the action cannot be completed without an internet connection.</p>

<br>

<h3>Feature 5: Add an App Shortcut to the Home Screen</h3>
<h4>Scenario 1: User can install the meet app as a shortcut on their device home screen.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>install the meet app as a shortcut on my device home screen,</p>
<p><strong>so that</strong> I can quickly access the app directly from my home screen.</p>

<br>

<h3>Feature 6: Display Charts Visualizing Event Details</h3>
<h4>Scenario 1: Show a chart with the number of upcoming events in each city.</h4>
<p><strong>As a </strong>user, </p>
<p><strong>I should be able to </strong>see a chart displaying the number of upcoming events in each city,</p>
<p><strong>so that</strong> I can easily visualize and compare event availability across different cities.</p>

<br>

<h2>"Given-When-Then" Scenarios</h2>

<h3>Feature 1: Filter Events by City</h3>
<h4>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities</h4>
<p><strong>Given </strong> the user has not entered a city in the search bar,</p>
<p><strong>When </strong> the user opens the event page,</p>
<p><strong>Then</strong> the app should display upcoming events from all cities.</p>

<br>

<h4>Scenario 2: User should see a list of suggestions when they search for a city.</h4>
<p><strong>Given </strong> the user is on the events page,</p>
<p><strong>When </strong> the user starts typing a city name in the search bar,</p>
<p><strong>Then</strong> the app should display a list of city suggestions that match the entered text.</p>

<br>

<h4>Scenario 3: User can select a city from the suggested list.</h4>
<p><strong>Given </strong> the user is presented with a list of city suggestions,</p>
<p><strong>When </strong> the user clicks on a city from the suggested list,</p>
<p><strong>Then</strong> the app should display upcoming events for the selected city.</p>

<br>

<h3>Feature 2: Show/Hide Event Details</h3>
<h4>Scenario 1: An event element is collapsed by default.</h4>
<p><strong>Given </strong> the user is on the events page,</p>
<p><strong>When </strong> the events are initially displayed,</p>
<p><strong>Then</strong> each event element should be collapsed by default, showing only basic information.</p>

<br>

<h4>Scenario 2: User can expand an event to see details.</h4>
<p><strong>Given </strong> the user is on the events page with collapsed event elements,</p>
<p><strong>When </strong> the user clicks on an event element,</p>
<p><strong>Then</strong> the event element should expand to show detailed information about the event.</p>

<br>

<h4>Scenario 3: User can collapse an event to hide details.</h4>
<p><strong>Given </strong> the user has expanded an event element to see details,</p>
<p><strong>When </strong> the user clicks on the expanded event element again,</p>
<p><strong>Then</strong> the event element should collapse to hide the detailed information.</p>

<br>

<h3>Feature 3: Specify Number of Events</h3>
<h4>Scenario 1: When user hasn’t specified a number, 32 events are shown by default.</h4>
<p><strong>Given </strong> the user has not specified the number of events to display,</p>
<p><strong>When </strong> the user opens the events page,</p>
<p><strong>Then</strong> the app should display 32 events by default.</p>

<br>

<h4>Scenario 2: User can change the number of events displayed.</h4>
<p><strong>Given </strong> the user is on the events page,</p>
<p><strong>When </strong> the user enters a specific number in the input field for the number of events,</p>
<p><strong>Then</strong> the app should display the specified number of events.</p>

<br>

<h3>Feature 4: Use the App When Offline</h3>
<h4>Scenario 1: Show cached data when there’s no internet connection.</h4>
<p><strong>Given </strong> the user has previously loaded the events page,</p>
<p><strong>When </strong> the user is offline and opens the events page,</p>
<p><strong>Then</strong> the app should display the cached data of the previously loaded events.</p>

<br>

<h4>Scenario 2: Show error when user changes search settings (city, number of events).</h4>
<p><strong>Given </strong> the user is offline,</p>
<p><strong>When </strong> the user tries to change the search settings (city, number of events),</p>
<p><strong>Then</strong> the app should display an error message indicating that the changes cannot be made without an internet connection.</p>

<br>

<h3>Feature 5: Add an App Shortcut to the Home Screen</h3>
<h4>Scenario 1: User can install the meet app as a shortcut on their device home screen.</h4>
<p><strong>Given </strong> the user is using a device that supports home screen shortcuts,</p>
<p><strong>When </strong> the user clicks the "Add to Home Screen" button,</p>
<p><strong>Then</strong> the app should be installed as a shortcut on the user's device home screen.</p>

<br>

<h3>Feature 6: Display Charts Visualizing Event Details</h3>
<h4>Scenario 1: Show a chart with the number of upcoming events in each city.</h4>
<p><strong>Given </strong> the user is on the events page,</p>
<p><strong>When </strong> the user views the event statistics section,</p>
<p><strong>Then</strong> the app should display a chart showing the number of upcoming events in each city.</p>
