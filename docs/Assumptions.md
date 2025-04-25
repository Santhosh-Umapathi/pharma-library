# Assumptions/Questions

All the questions/assumptions from the provided pdf with high level requirements

## 1. Show more assets

### Questions

1. A button to show more assets ?
2. On click of button, it will show more assets below the current assets as a new section?
3. Should the assets be fetched from the API endpoint?
   1. Should we show a loading spinner or skeleton placeholder while the assets are being fetched?
4. A button at the bottom of the new section - "Not seeing, try search"?
   1. Scroll to the top of the page and focus on the search bar ?

### Assumptions

1. Yes, show a simple button to show more assets
2. Yes, it will show more assets below the current assets as a new section
3. Yes, the assets will be fetched from the API endpoint. For the sake of simplicity, we will mock the date on the endpoint

   1. No, we will not show a loading spinner or skeleton placeholder while the assets are being fetched

4. Yes, it will show a button at the bottom of the new section - "Not seeing, try search"

   1. Yes, Scroll to the top of the page and focus on the search bar ?

## 2. Explore Asset

### Questions

1. Opens a modal with Asset Details?
2. Modal with nice animation?
3. Modal should have a background overlay?
4. Modal should close on clicking outside the modal?

### Assumptions

1. Yes, Opens a modal with Asset Details
2. No, for the sake of simplicity, no animation is required.
3. No
4. No, for the sake of simplicity, modal can be closed only with close button.

## 3. Recent searches

### Questions

1.  On focusing the search bar, it will show recent searches as a simple dropdown ?
2.  Recent searches will be saved in the memory, browser local storage or database?
3.  On clicking any recent search, it will be added to the search bar, and the search results will be shown?
4.  When a new search is made, the recent searches will be updated?

### Assumptions

1. Yes
2. Browser local storage, to balance the simplicity and better UX, although recommended to use database for production.
   1. In memory - loss of data on page refresh
   2. Browser local storage - not available on other devices
   3. Database - available anywhere, anytime
3. Yes
4. Yes

## 4. Top tabs

### Questions

1.  KPI - Calculation based on selected data. Needs to be displayed ?
2.  Layouts - A dashboard for visuals/charts. Needs to be displayed ?
3.  Storyboards - Powerpoint specific for charts. Needs to be displayed ?
4.  Should we show a loading spinner or skeleton placeholder while the assets are being fetched?

### Assumptions

1. No, Wireframes not available for this feature
2. No, Wireframes not available for this feature
3. No, Wireframes not available for this feature
4. No

## 5. Request

### Questions

1. It opens a modal with a form to request an asset?
2. Submit button to send the request to BE ?
3. Request status - Toasts for success/error ?
4. If the same request was already submitted, feedback to user ?
5. If user can see his previous requests and status of those requests ? CRUD operations for requests ?

### Assumptions

1. Yes, it opens a modal with a form to request an asset - (Username, email, asset name, reason for request)
2. Yes, only send a mock request
3. No
4. No
5. No, not in scope

## 6. Asset Modal base

### Questions

1. Asset Modal can open additional modals - KPI, Data Viz, Layouts, Storyboard ?
2. Or based on the selected top tab, open the right modal ?
   1. eg: KPI tab opens KPI modal or a Featured layout card opens layout modal.
3. Business questions are part of "KPI" modal, but on the wireframe, its rendered also on "Layout" modal ?
4. Should all of these to be implemented ?
5. Based on the wireframe for the modal, with the tag "layout", should this be assumed as "Layout" modal

### Assumptions

1. No
2. Yes
3. Assuming a minor missed requirement for Layout modal and should be included
4. Only layout modal to be implemented
5. Yes
