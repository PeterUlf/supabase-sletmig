// const apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6emV3ZWdubGx1aWxuZW9nZGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyOTg4MTYsImV4cCI6MTk5Njg3NDgxNn0.csZtN59Edno3EGoeChpEd6S3oPhTO52WLf5xcuAaxr4"
const url = "https://rzzewegnlluilneogdel.supabase.co/rest/v1/test";

fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6emV3ZWdubGx1aWxuZW9nZGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyOTg4MTYsImV4cCI6MTk5Njg3NDgxNn0.csZtN59Edno3EGoeChpEd6S3oPhTO52WLf5xcuAaxr4",
  },
})
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //do something with the data
  console.log("hele datasættet", data[0]);

  data.forEach(everyElement);
}

function everyElement(single) {
  console.log("everyElement");
  console.log("element noget", single);
}
