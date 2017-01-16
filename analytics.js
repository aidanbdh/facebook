window.onload = () => {
  //Implementation: https://grapevine-analytics.herokuapp.com/view
  fetch('localhost:3000/view', {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      email: analyticsemail,
      name: 'view'
    })
  })
    .catch(() => {
      console.log('Error sending analytics. Please contact grapevineanalytics for more details.');
    });
}
